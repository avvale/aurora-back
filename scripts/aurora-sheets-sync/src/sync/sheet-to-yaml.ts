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
  parseBooleanValue,
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
        const schema = await readModuleSheet(
          sheetsApi,
          bcConfig.spreadsheetId,
          sheetName,
        );

        if (!schema) {
          result.messages.push(`⚠ Skipped: ${sheetName} (empty or invalid)`);
          continue;
        }

        // Write YAML file
        const filePath = path.join(bcPath, `${sheetName}.aurora.yaml`);
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
 */
async function readModuleSheet(
  api: sheets_v4.Sheets,
  spreadsheetId: string,
  sheetName: string,
): Promise<AuroraSchema | null> {
  // Read all data from the sheet
  const response = await api.spreadsheets.values.get({
    spreadsheetId,
    range: `'${sheetName}'!A:Z`,
  });

  const rows = response.data.values || [];
  if (rows.length < 13) return null; // Not enough rows for metadata + header

  // Parse metadata (rows 1-11)
  const metadata = parseMetadata(rows.slice(0, 11));

  // Find properties section
  const propertiesHeaderIdx = rows.findIndex(
    (row, idx) => idx > 10 && row[0] === 'name' && row[1] === 'type',
  );

  if (propertiesHeaderIdx === -1) return null;

  // Parse properties
  const { properties, pivots } = parsePropertiesSection(
    rows.slice(propertiesHeaderIdx),
  );

  // Build schema
  const schema: AuroraSchema = {
    version: metadata.version || '0.0.1',
    boundedContextName: metadata.boundedContextName,
    moduleName: metadata.moduleName || sheetName,
    moduleNames: metadata.moduleNames,
    aggregateName: metadata.aggregateName,
    hasOAuth: parseBooleanValue(metadata.hasOAuth),
    hasTenant: parseBooleanValue(metadata.hasTenant),
    hasAuditing: parseBooleanValue(metadata.hasAuditing),
    description: metadata.description,
    aggregateProperties: properties,
  };

  // Add front icons if present
  if (metadata.solidIcon || metadata.outlineIcon) {
    schema.front = {
      solidIcon: metadata.solidIcon || undefined,
      outlineIcon: metadata.outlineIcon || undefined,
    };
  }

  // Merge pivot data back into relationships
  mergePivotsIntoProperties(schema.aggregateProperties, pivots);

  return schema;
}

/**
 * Parse metadata from the first rows
 */
function parseMetadata(rows: string[][]): Record<string, string> {
  const metadata: Record<string, string> = {};

  const labelMap: Record<string, string> = {
    'Module Name': 'moduleName',
    'Module Names (plural)': 'moduleNames',
    'Aggregate Name': 'aggregateName',
    'Bounded Context': 'boundedContextName',
    Version: 'version',
    'Has OAuth': 'hasOAuth',
    'Has Tenant': 'hasTenant',
    'Has Auditing': 'hasAuditing',
    Description: 'description',
    'Solid Icon': 'solidIcon',
    'Outline Icon': 'outlineIcon',
  };

  for (const row of rows) {
    const label = row[0]?.trim();
    const value = row[1]?.trim();

    if (label && labelMap[label]) {
      metadata[labelMap[label]] = value || '';
    }
  }

  return metadata;
}

/**
 * Parse properties section including pivots
 */
function parsePropertiesSection(rows: string[][]): {
  properties: AuroraProperty[];
  pivots: Map<string, AuroraPivot>;
} {
  const properties: AuroraProperty[] = [];
  const pivots = new Map<string, AuroraPivot>();

  if (rows.length < 2) return { properties, pivots };

  const headers = rows[0] as (keyof SheetPropertyRow)[];
  let i = 1;

  // Parse main properties until we hit a pivot separator or end
  while (i < rows.length) {
    const row = rows[i];

    if (isPivotSeparator(row)) {
      // Parse pivot section
      const pivotName = extractPivotNameFromSeparator(row);
      if (pivotName) {
        const { pivot, endIdx } = parsePivotSection(rows, i);
        if (pivot) {
          pivots.set(pivotName, pivot);
        }
        i = endIdx;
      } else {
        i++;
      }
      continue;
    }

    // Skip empty rows
    if (!row[0]?.trim()) {
      i++;
      continue;
    }

    // Skip section headers like "Properties"
    if (row[0] === 'Properties' || row[0] === 'name') {
      i++;
      continue;
    }

    // Parse property row
    const propObj: Record<string, string> = {};
    for (let j = 0; j < headers.length; j++) {
      propObj[headers[j]] = row[j] || '';
    }
    properties.push(sheetRowToProperty(propObj as unknown as SheetPropertyRow));
    i++;
  }

  return { properties, pivots };
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
