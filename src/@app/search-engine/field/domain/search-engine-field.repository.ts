import { SearchEngineFieldId } from './value-objects';
import { SearchEngineField } from '@app/search-engine/field';
import { CQMetadata, IRepository, LiteralObject, Pagination, QueryStatement } from '@aurorajs.dev/core';

export abstract class SearchEngineIFieldRepository implements IRepository<SearchEngineField>
{
    abstract readonly repository: any;

    // paginate records
    abstract paginate(
        options?: {
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
        }
    ): Promise<Pagination<SearchEngineField>>;

    // find a single record
    abstract find(
        options?: {
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
        }
    ): Promise<SearchEngineField | null>;

    // find a single record by id
    abstract findById(
        id: SearchEngineFieldId,
        options?: {
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
            // if id is a composite key, pass find arguments, example: { key1: value1, key2: value2, ...}
            findArguments?: LiteralObject;
        }
    ): Promise<SearchEngineField | null>;

    // get multiple records
    abstract get(
        options?: {
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
        }
    ): Promise<SearchEngineField[]>;

    // get records with rawSQL
    abstract rawSQL(
        options?: {
            rawSQL?: string;
            cQMetadata?: CQMetadata;
        }
    ): Promise<SearchEngineField[]>;

    // count records
    abstract count(
        options?: {
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
        }
    ): Promise<number>;

    // ******************
    // ** side effects **
    // ******************

    // create a single record
    abstract create(
        field: SearchEngineField,
        options?: {
            createOptions?: LiteralObject;
            dataFactory?: (aggregate: SearchEngineField) => LiteralObject;
            // arguments to find object and check if object is duplicated
            finderQueryStatement?: (aggregate: SearchEngineField) => QueryStatement;
        }
    ): Promise<void>;

    // create a single or multiple records
    abstract insert(
        fields: SearchEngineField[],
        options?: {
            insertOptions?: LiteralObject;
            dataFactory?: (aggregate: SearchEngineField) => LiteralObject;
        }
    ): Promise<void>;

    // update record by id
    abstract updateById(
        field: SearchEngineField,
        options?: {
            updateByIdOptions?: LiteralObject;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
            dataFactory?: (aggregate: SearchEngineField) => LiteralObject;
            // arguments to find object to update, with i18n we use langId and id relationship with parent entity
            findArguments?: LiteralObject;
        }
    ): Promise<void>;

    // update records
    abstract update(
        field: SearchEngineField,
        options?: {
            updateOptions?: LiteralObject;
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
            dataFactory?: (aggregate: SearchEngineField) => LiteralObject;
        }
    ): Promise<void>;

    // insert or update key identification element already existing in the table
    abstract upsert(
        field: SearchEngineField,
        options?: {
            upsertOptions?: LiteralObject;
            dataFactory?: (aggregate: SearchEngineField) => LiteralObject;
        }
    ): Promise<void>;

    // delete record
    abstract deleteById(
        id: SearchEngineFieldId,
        options?: {
            deleteOptions?: LiteralObject;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
            // if id is a composite key, pass find arguments, example: { key1: value1, key2: value2, ...}
            findArguments?: LiteralObject;
        }
    ): Promise<void>;

    // delete records
    abstract delete(
        options?: {
            deleteOptions?: LiteralObject;
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
        }
    ): Promise<void>;

    // increment records
    abstract increment(
        field: SearchEngineField,
        options?: {
            incrementOptions?: LiteralObject;
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
            dataFactory?: (aggregate: SearchEngineField) => LiteralObject;
        }
    ): Promise<void>;
}
