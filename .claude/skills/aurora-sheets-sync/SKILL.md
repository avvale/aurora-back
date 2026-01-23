# Aurora Sheets Sync Skill

Bidirectional synchronization between Aurora YAML schemas (`cliter/[bounded-context]/*.aurora.yaml`) and Google Sheets.

## Triggers

Use this skill when the user mentions:
- "sync schemas", "google sheets", "export schemas", "spreadsheet"
- "sincronizar schemas", "exportar a sheets", "importar de sheets"
- "push schemas", "pull schemas", "diff schemas"

## Prerequisites

### 1. Google Cloud Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable **Google Sheets API** (APIs & Services → Library → Search "Google Sheets API" → Enable)
4. Create Service Account:
   - Go to APIs & Services → Credentials
   - Create Credentials → Service Account
   - Download JSON key file
   - Save to `scripts/aurora-sheets-sync/credentials/service-account.json`

### 2. Configuration

Create `aurora-sheets.config.json` in project root (or use `aurora-sheets init`):

```json
{
    "credentialsPath": "./scripts/aurora-sheets-sync/credentials/service-account.json",
    "boundedContexts": {
        "iam": {
            "spreadsheetId": "1abc123...",
            "description": "Identity and Access Management"
        }
    },
    "backupsPath": "backups/aurora-schemas",
    "cliterPath": "cliter"
}
```

### 3. Share Spreadsheets

Share each Google Spreadsheet with the service account email (found in the JSON key file as `client_email`).

## Commands

### Push: YAML → Google Sheets

```bash
# Push specific bounded context
cd scripts/aurora-sheets-sync && npm run push -- --bc iam

# Push all configured bounded contexts
npm run push -- --all

# Dry run (show what would change)
npm run push -- --bc iam --dry-run
```

### Pull: Google Sheets → YAML

```bash
# Pull specific bounded context (creates backup automatically)
npm run pull -- --bc iam

# Pull without backup
npm run pull -- --bc iam --no-backup

# Dry run
npm run pull -- --bc iam --dry-run
```

### Diff: Compare YAML vs Sheets

```bash
# Compare specific bounded context
npm run diff -- --bc iam

# Compare all and show summary only
npm run diff -- --all --summary
```

### Other Commands

```bash
# Initialize config file
npm run dev -- init

# List configured bounded contexts
npm run dev -- list

# Validate sheet format and connection
npm run dev -- validate --bc iam
```

## Google Sheet Structure

### Index Sheet ("Índice")

First sheet with module overview:

| Module Name | Aggregate Name | Description | Fields | OAuth | Tenant | Auditing | Last Sync |
|-------------|----------------|-------------|--------|-------|--------|----------|-----------|
| account     | IamAccount     | Core auth...| 18     | TRUE  | FALSE  | TRUE     | 2026-01-22|

### Module Sheets

Each module gets its own sheet with:

**Metadata Section (rows 1-11):**
- Module Name, Module Names (plural), Aggregate Name
- Bounded Context, Version
- Has OAuth, Has Tenant, Has Auditing (dropdowns)
- Description, Solid Icon, Outline Icon

**Properties Section (from row 13):**

| name | type | primaryKey | nullable | index | maxLength | ... | description |
|------|------|------------|----------|-------|-----------|-----|-------------|
| id   | id   | TRUE       | FALSE    |       |           | ... | Unique ID   |

**Pivot Sections (for many-to-many relationships):**

Visual separator followed by pivot metadata and properties:
```
══════ PIVOT: role-account ══════
```

## Property Columns Reference

| Column | Description | Example |
|--------|-------------|---------|
| name | Property name (camelCase) | `clientId` |
| type | Data type | `id`, `varchar`, `enum`, `relationship` |
| primaryKey | Is primary key | `TRUE` / `FALSE` |
| nullable | Allows null | `TRUE` / `FALSE` |
| index | Index type | `index`, `unique` |
| indexUsing | Index method | `GIN`, `BTREE` |
| maxLength | Max string length | `128` |
| decimals | Decimal precision | `16,14` (precision,scale) |
| defaultValue | Default value | `false`, `0` |
| enumOptions | Enum values (comma-sep) | `USER,SERVICE` |
| arrayOptions.type | Array element type | `varchar`, `id` |
| arrayOptions.maxLength | Array element max length | `64` |
| rel.type | Relationship type | `many-to-one`, `many-to-many` |
| rel.aggregateName | Target aggregate | `OAuthClient` |
| rel.modulePath | Target module path | `o-auth/client` |
| rel.key | Foreign key field | `id` |
| rel.field | Local field name | `client` |
| rel.avoidConstraint | Skip FK constraint | `TRUE` |
| autoIncrement | Auto increment | `TRUE` |
| isI18n | Internationalized | `TRUE` |
| example | Example value | `john@gmail.com` |
| description | Field description | (text) |

## Backups

Pull operations automatically create backups at:
```
backups/aurora-schemas/{bounded-context}/{timestamp}/
```

## Workflow Examples

### Initial Export to Sheets

```bash
# 1. Setup (first time only)
cd scripts/aurora-sheets-sync
npm install
npm run dev -- init

# 2. Configure aurora-sheets.config.json with your spreadsheet IDs

# 3. Push all schemas
npm run push -- --all
```

### Collaborative Editing Workflow

```bash
# 1. Check for differences
npm run diff -- --bc iam

# 2. If sheet has changes, pull them
npm run pull -- --bc iam

# 3. After local YAML changes, push back
npm run push -- --bc iam
```

### Conflict Resolution

When both YAML and Sheet have changes:

```bash
# 1. Review differences
npm run diff -- --bc iam

# 2. Option A: Keep YAML (discard sheet changes)
npm run push -- --bc iam

# 2. Option B: Keep Sheet (backup and overwrite YAML)
npm run pull -- --bc iam

# 2. Option C: Manual merge
# - Pull to separate folder, compare, merge manually
```

## Troubleshooting

### "Access denied to spreadsheet"

- Verify spreadsheet is shared with service account email
- Check service account has at least Editor access

### "Configuration file not found"

- Run `npm run dev -- init` to create template
- Or copy `aurora-sheets.config.example.json` to `aurora-sheets.config.json`

### "Service account credentials not found"

- Download JSON key from Google Cloud Console
- Save to `scripts/aurora-sheets-sync/credentials/service-account.json`

## File Locations

```
aurora-back/
├── aurora-sheets.config.json          # Main config (gitignored)
├── aurora-sheets.config.example.json  # Template config
├── scripts/aurora-sheets-sync/
│   ├── credentials/
│   │   └── service-account.json       # Google credentials (gitignored)
│   ├── src/
│   │   ├── index.ts                   # CLI entry point
│   │   ├── auth/                      # Google auth
│   │   ├── config/                    # Config management
│   │   ├── sync/                      # Push/pull/diff logic
│   │   ├── transformers/              # YAML ↔ Sheet conversion
│   │   └── validators/                # Schema validation
│   └── package.json
├── backups/aurora-schemas/            # Automatic backups
└── cliter/                            # Aurora YAML schemas
```

## Summary Table

| Command | Direction | Description |
|---------|-----------|-------------|
| `push --bc <name>` | YAML → Sheet | Export schemas to Google Sheets |
| `pull --bc <name>` | Sheet → YAML | Import schemas from Google Sheets |
| `diff --bc <name>` | Compare | Show differences without changes |
| `init` | Setup | Create configuration template |
| `validate --bc <name>` | Check | Validate sheet format |
| `list` | Info | List configured bounded contexts |
