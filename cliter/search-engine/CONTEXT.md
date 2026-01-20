# Search Engine

## Purpose

Full-text search infrastructure integration, typically with Typesense or similar search engines. Manages search collections, field schemas, and API keys for secure search access. Enables powerful search capabilities across application data.

## Modules

| Module | Responsibility |
|--------|----------------|
| collection | Search index definitions (equivalent to database tables). Tracks collection status (CONSOLIDATED/INDEXING), document counts, sorting configuration, and nested field support. |
| field | Schema definitions for collection fields. Specifies field names, types, and nullable settings. Child records of collections defining the searchable schema. |
| api-key | Search engine API key management. Controls access permissions (actions) and collection scope for secure, scoped search access. |

## Key Business Rules

- **Collection Status**: CONSOLIDATED (ready for queries), INDEXING (data being synchronized - queries may return stale results).
- **Unique Names**: Collection names and aliases must be globally unique for routing queries.
- **Field Schema**: Fields define the searchable schema; changes require re-indexing.
- **Scoped API Keys**: API keys can be restricted to specific collections and actions for security.

## Main Flows

1. **Create Collection**: Define collection with fields -> Sync to search engine -> Status becomes CONSOLIDATED.
2. **Index Data**: Trigger index API -> Status changes to INDEXING -> Sync documents -> Status returns to CONSOLIDATED.
3. **Search Query**: Client uses API key -> Validate key scope -> Route to collection -> Return results.
4. **Schema Update**: Add/modify field -> Re-index collection -> New field becomes searchable.

## Dependencies

- **Uses**: None (infrastructure domain)
- **Used by**: Any bounded context requiring full-text search capabilities

## Technical Notes

- **No Auditing**: hasAuditing=false for search metadata (operational data, not business data).
- **Nested Fields**: isEnableNestedFields allows indexing of JSON/object fields.
- **Memory Shards**: numMemoryShards configures search engine performance tuning.
- **Timestamp Tracking**: timestampCreatedAt stores search engine's creation timestamp (not Aurora's).
- **Collection Alias**: Optional alias provides alternate names for collections (useful for zero-downtime re-indexing).
- **API Key Structure**: apiKeyId is the search engine's internal ID; value is the actual key secret.
