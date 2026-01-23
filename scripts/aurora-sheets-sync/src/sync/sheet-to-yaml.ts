import * as fs from 'fs-extra';
import { sheets_v4 } from 'googleapis';
import * as yaml from 'js-yaml';
import * as path from 'path';
import { GoogleSheetsAuth } from '../auth/google-auth';
import { SheetsConfigManager } from '../config/sheets-config';
import {
  extractPivotNameFromSeparator,
  isPivotSeparator,
  parsePivotMetadataRows,
} from '../transformers/pivot-transformer';
import { sheetRowToProperty } from '../transformers/property-transformer';
import {
  AuroraPivot,
  AuroraProperty,
  AuroraSchema,
  SheetPropertyRow,
} from '../types';

// Sheets to exclude from module processing (system sheets)
const EXCLUDED_SHEETS = ['DATA', 'TEMPLATE', 'MODULES'];

export interface PullOptions {
  dryRun?: boolean;
  verbose?: boolean;
  backup?: boolean;
  preferYaml?: boolean;
  preferSheet?: boolean;
}

export interface PullResult {
  success: boolean;
  modulesProcessed: number;
  modulesFailed: string[];
  backupPath?: string;
  messages: string[];
}

/**
 * Pull schemas from Google Sheets to YAML files
 */
export async function pullBoundedContext(
  auth: GoogleSheetsAuth,
  config: SheetsConfigManager,
  boundedContextName: string,
  options: PullOptions = {},
): Promise<PullResult> {
  const result: PullResult = {
    success: true,
    modulesProcessed: 0,
    modulesFailed: [],
    messages: [],
  };

  try {
    await config.load();
    const bcConfig = config.getBoundedContext(boundedContextName);
    const cliterPath = config.getCliterPath();
    const bcPath = path.join(cliterPath, boundedContextName);

    // Create backup if requested
    if (options.backup !== false) {
      const backupPath = await createBackup(config, boundedContextName);
      result.backupPath = backupPath;
      result.messages.push(`Backup created: ${backupPath}`);
    }

    const sheetsApi = auth.getSheetsApi();

    // Get all sheets in the spreadsheet
    const spreadsheet = await sheetsApi.spreadsheets.get({
      spreadsheetId: bcConfig.spreadsheetId,
    });

    const sheets = spreadsheet.data.sheets || [];
    const moduleSheets = sheets.filter(
      (s) =>
        s.properties?.title && !EXCLUDED_SHEETS.includes(s.properties.title),
    );

    if (options.dryRun) {
      result.messages.push(
        `[DRY RUN] Would pull ${moduleSheets.length} modules from spreadsheet`,
      );
      result.modulesProcessed = moduleSheets.length;
      return result;
    }

    // Ensure output directory exists
    await fs.ensureDir(bcPath);

    // Process each module sheet
    for (const sheet of moduleSheets) {
      const sheetName = sheet.properties!.title!;

      try {
        // Try to read existing YAML to preserve metadata and fields not in spreadsheet
        const existingFilePath = path.join(bcPath, `${sheetName}.aurora.yaml`);
        let existingSchema: AuroraSchema | undefined;

        if (await fs.pathExists(existingFilePath)) {
          const existingContent = await fs.readFile(existingFilePath, 'utf-8');
          existingSchema = yaml.load(existingContent) as AuroraSchema;
        }

        const schema = await readModuleSheet(
          sheetsApi,
          bcConfig.spreadsheetId,
          sheetName,
          existingSchema,
        );

        if (!schema) {
          result.messages.push(`⚠ Skipped: ${sheetName} (empty or invalid)`);
          continue;
        }

        // Write YAML file
        const filePath = path.join(bcPath, `${sheetName}.aurora.yaml`);

        // Ensure descriptions end with newline for proper YAML folded style (> instead of >-)
        normalizeDescriptions(schema);

        const yamlContent = yaml.dump(schema, {
          indent: 2,
          lineWidth: 120,
          noRefs: true,
          sortKeys: false,
          quotingType: '"',
        });

        await fs.writeFile(filePath, yamlContent, 'utf-8');
        result.modulesProcessed++;
        result.messages.push(`✓ Pulled: ${sheetName}`);
      } catch (error) {
        const err = error as Error;
        result.modulesFailed.push(sheetName);
        result.messages.push(`✗ Failed: ${sheetName} - ${err.message}`);
        result.success = false;
      }
    }
  } catch (error) {
    const err = error as Error;
    result.success = false;
    result.messages.push(`Error: ${err.message}`);
  }

  return result;
}

/**
 * Read a single module sheet and convert to AuroraSchema
 * New structure: Row 1 = headers, Row 2+ = properties
 * Metadata comes from existing YAML file
 */
async function readModuleSheet(
  api: sheets_v4.Sheets,
  spreadsheetId: string,
  sheetName: string,
  existingSchema?: AuroraSchema,
): Promise<AuroraSchema | null> {
  // Read all data from the sheet
  const response = await api.spreadsheets.values.get({
    spreadsheetId,
    range: `'${sheetName}'!A:Z`,
  });

  const rows = response.data.values || [];
  if (rows.length < 2) return null; // Need at least headers + 1 property

  // Row 0 = headers, Row 1+ = properties
  const headers = rows[0] as (keyof SheetPropertyRow)[];

  // Validate headers
  if (!headers.includes('name') || !headers.includes('type')) {
    return null;
  }

  // Parse properties from row 1 onwards
  const properties: AuroraProperty[] = [];
  const pivots = new Map<string, AuroraPivot>();

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];

    // Skip empty rows
    if (!row[0]?.trim()) continue;

    // Check for pivot separator
    if (isPivotSeparator(row)) {
      const pivotName = extractPivotNameFromSeparator(row);
      if (pivotName) {
        const { pivot, endIdx } = parsePivotSection(rows, i);
        if (pivot) {
          pivots.set(pivotName, pivot);
        }
        i = endIdx - 1; // -1 because loop will increment
      }
      continue;
    }

    // Parse property row
    const propObj: Record<string, string> = {};
    for (let j = 0; j < headers.length; j++) {
      propObj[headers[j]] = row[j] || '';
    }
    const sheetProperty = sheetRowToProperty(
      propObj as unknown as SheetPropertyRow,
    );

    // Merge with existing property to preserve fields not in spreadsheet
    if (existingSchema) {
      const existingProp = existingSchema.aggregateProperties?.find(
        (p) => p.name === sheetProperty.name,
      );
      if (existingProp) {
        // Preserve fields from existing that aren't handled by spreadsheet
        properties.push(mergeProperties(existingProp, sheetProperty, headers));
      } else {
        properties.push(sheetProperty);
      }
    } else {
      properties.push(sheetProperty);
    }
  }

  // Build schema using existing metadata or defaults
  const schema: AuroraSchema = existingSchema
    ? {
        ...existingSchema,
        aggregateProperties: properties,
      }
    : {
        version: '0.0.1',
        boundedContextName: '',
        moduleName: sheetName,
        moduleNames: sheetName + 's',
        aggregateName: toPascalCase(sheetName),
        aggregateProperties: properties,
      };

  // Merge pivot data back into relationships
  mergePivotsIntoProperties(schema.aggregateProperties, pivots);

  return schema;
}

/**
 * Normalize descriptions in schema to ensure proper YAML folded style
 * Adds trailing newline so yaml.dump uses '>' instead of '>-'
 */
function normalizeDescriptions(schema: AuroraSchema): void {
  // Normalize module description
  if (schema.description && !schema.description.endsWith('\n')) {
    schema.description = schema.description + '\n';
  }

  // Normalize property descriptions
  for (const prop of schema.aggregateProperties || []) {
    if (prop.description && !prop.description.endsWith('\n')) {
      prop.description = prop.description + '\n';
    }
  }
}

/**
 * Convert kebab-case to PascalCase
 */
function toPascalCase(str: string): string {
  return str
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

/**
 * Map of spreadsheet headers to AuroraProperty field names
 * Used to determine which fields should be overwritten from spreadsheet
 */
const HEADER_TO_PROPERTY_FIELD: Record<string, keyof AuroraProperty> = {
  name: 'name',
  type: 'type',
  primaryKey: 'primaryKey',
  nullable: 'nullable',
  index: 'index',
  indexUsing: 'indexUsing',
  maxLength: 'maxLength',
  decimals: 'decimals',
  defaultValue: 'defaultValue',
  enumOptions: 'enumOptions',
  autoIncrement: 'autoIncrement',
  isI18n: 'isI18n',
  example: 'example',
  description: 'description',
  // Array options handled separately
  subtype: 'arrayOptions',
  values: 'enumOptions', // or arrayOptions.enumOptions or decimals
  'arrayOptions.type': 'arrayOptions',
  'arrayOptions.maxLength': 'arrayOptions',
  'arrayOptions.enumOptions': 'arrayOptions',
  // Relationship handled separately
  relationship: 'relationship',
  master: 'relationship',
  'rel.type': 'relationship',
  'rel.singularName': 'relationship',
  'rel.aggregateName': 'relationship',
  'rel.modulePath': 'relationship',
  'rel.key': 'relationship',
  'rel.field': 'relationship',
  'rel.avoidConstraint': 'relationship',
};

/**
 * Merge existing property with sheet property
 * Preserves fields from existing that don't have a corresponding column in the sheet
 */
function mergeProperties(
  existing: AuroraProperty,
  fromSheet: AuroraProperty,
  headers: string[],
): AuroraProperty {
  // Start with existing property
  const merged: AuroraProperty = { ...existing };

  // Determine which top-level fields are controlled by the spreadsheet
  const sheetControlledFields = new Set<keyof AuroraProperty>();
  for (const header of headers) {
    const field = HEADER_TO_PROPERTY_FIELD[header];
    if (field) {
      sheetControlledFields.add(field);
    }
  }

  // Override fields that are controlled by the spreadsheet
  for (const field of sheetControlledFields) {
    if (field === 'arrayOptions') {
      // Special handling for arrayOptions - merge if both exist
      if (fromSheet.arrayOptions) {
        merged.arrayOptions = fromSheet.arrayOptions;
      } else if (
        headers.includes('subtype') ||
        headers.includes('arrayOptions.type')
      ) {
        // Sheet has array columns but no array data - remove from merged
        delete merged.arrayOptions;
      }
    } else if (field === 'relationship') {
      // Special handling for relationship - merge if both exist
      if (fromSheet.relationship) {
        merged.relationship = fromSheet.relationship;
      } else if (
        headers.includes('relationship') ||
        headers.includes('rel.type')
      ) {
        // Sheet has relationship columns but no relationship data - remove from merged
        delete merged.relationship;
      }
    } else {
      // For simple fields, take the sheet value (even if undefined)
      const sheetValue = fromSheet[field];
      if (sheetValue !== undefined) {
        (merged as unknown as Record<string, unknown>)[field] = sheetValue;
      } else {
        // If sheet has the column but value is empty/undefined, remove from merged
        delete (merged as unknown as Record<string, unknown>)[field];
      }
    }
  }

  return merged;
}

/**
 * Parse a pivot section from rows
 */
function parsePivotSection(
  rows: string[][],
  startIdx: number,
): { pivot: AuroraPivot | null; endIdx: number } {
  const pivotName = extractPivotNameFromSeparator(rows[startIdx]);
  if (!pivotName) return { pivot: null, endIdx: startIdx + 1 };

  let i = startIdx + 1;
  const metadataRows: string[][] = [];
  let headerIdx = -1;

  // Collect metadata rows until we hit the property headers
  while (i < rows.length) {
    const row = rows[i];

    if (row[0] === 'name' && row[1] === 'type') {
      headerIdx = i;
      break;
    }

    if (row[0]?.trim() && !isPivotSeparator(row)) {
      metadataRows.push(row);
    }

    i++;
  }

  if (headerIdx === -1) return { pivot: null, endIdx: i };

  // Parse metadata
  const metadata = parsePivotMetadataRows(metadataRows);

  // Parse pivot properties
  const pivotProperties: AuroraProperty[] = [];
  const headers = rows[headerIdx] as (keyof SheetPropertyRow)[];
  i = headerIdx + 1;

  while (i < rows.length) {
    const row = rows[i];

    // Stop at next pivot or empty section
    if (isPivotSeparator(row) || (!row[0]?.trim() && !row[1]?.trim())) {
      break;
    }

    if (row[0]?.trim()) {
      const propObj: Record<string, string> = {};
      for (let j = 0; j < headers.length; j++) {
        propObj[headers[j]] = row[j] || '';
      }
      pivotProperties.push(
        sheetRowToProperty(propObj as unknown as SheetPropertyRow),
      );
    }

    i++;
  }

  const pivot: AuroraPivot = {
    boundedContextName: metadata.boundedContextName || '',
    moduleName: metadata.moduleName || pivotName,
    moduleNames: metadata.moduleNames || '',
    aggregateName: metadata.aggregateName || '',
    hasOAuth: metadata.hasOAuth,
    hasTenant: metadata.hasTenant,
    hasAuditing: metadata.hasAuditing,
    aggregateProperties: pivotProperties,
  };

  return { pivot, endIdx: i };
}

/**
 * Merge pivot data back into many-to-many relationship properties
 */
function mergePivotsIntoProperties(
  properties: AuroraProperty[],
  pivots: Map<string, AuroraPivot>,
): void {
  for (const prop of properties) {
    if (
      prop.relationship?.type === 'many-to-many' &&
      !prop.relationship.pivot
    ) {
      // Try to find matching pivot by conventional naming
      const possiblePivotNames = [
        `${prop.name}-${prop.relationship.aggregateName?.toLowerCase()}`,
        `${prop.relationship.aggregateName?.toLowerCase()}-${prop.name}`,
      ];

      for (const pivotName of possiblePivotNames) {
        const pivot = pivots.get(pivotName);
        if (pivot) {
          prop.relationship.pivot = pivot;
          break;
        }
      }

      // Also try direct match on modulePath hint
      for (const [name, pivot] of pivots) {
        if (
          pivot.aggregateProperties?.some(
            (p) => p.relationship?.modulePath === prop.relationship?.modulePath,
          )
        ) {
          prop.relationship.pivot = pivot;
          break;
        }
      }
    }
  }
}

/**
 * Create a backup of existing YAML files
 */
async function createBackup(
  config: SheetsConfigManager,
  boundedContextName: string,
): Promise<string> {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupsPath = config.getBackupsPath();
  const backupDir = path.join(backupsPath, boundedContextName, timestamp);

  const cliterPath = config.getCliterPath();
  const sourcePath = path.join(cliterPath, boundedContextName);

  if (await fs.pathExists(sourcePath)) {
    await fs.ensureDir(backupDir);
    await fs.copy(sourcePath, backupDir);
  }

  return backupDir;
}

/**
 * Get list of module names from a spreadsheet
 */
export async function listModulesInSheet(
  auth: GoogleSheetsAuth,
  spreadsheetId: string,
): Promise<string[]> {
  const sheetsApi = auth.getSheetsApi();
  const spreadsheet = await sheetsApi.spreadsheets.get({ spreadsheetId });

  return (spreadsheet.data.sheets || [])
    .map((s) => s.properties?.title)
    .filter(
      (title): title is string => !!title && !EXCLUDED_SHEETS.includes(title),
    );
}
