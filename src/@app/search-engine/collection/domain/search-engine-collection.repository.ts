
import { CQMetadata, IRepository, LiteralObject, Pagination, QueryStatement } from '@aurorajs.dev/core';
import { SearchEngineCollection } from './search-engine-collection.aggregate';
import { SearchEngineCollectionId } from './value-objects';

export abstract class SearchEngineICollectionRepository implements IRepository<SearchEngineCollection>
{
    abstract readonly repository: any;

    // paginate records
    abstract paginate(
        options?: {
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
        }
    ): Promise<Pagination<SearchEngineCollection>>;

    // find a single record
    abstract find(
        options?: {
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
        }
    ): Promise<SearchEngineCollection | null>;

    // find a single record by id
    abstract findById(
        id: SearchEngineCollectionId,
        options?: {
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
        }
    ): Promise<SearchEngineCollection | null>;

    // get multiple records
    abstract get(
        options?: {
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
        }
    ): Promise<SearchEngineCollection[]>;

    // get records with rawSQL
    abstract rawSQL(
        options?: {
            rawSQL?: string;
            cQMetadata?: CQMetadata;
        }
    ): Promise<SearchEngineCollection[]>;

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
        collection: SearchEngineCollection,
        options?: {
            createOptions?: LiteralObject;
            dataFactory?: (aggregate: SearchEngineCollection) => LiteralObject;
            // arguments to find object and check if object is duplicated
            finderQueryStatement?: (aggregate: SearchEngineCollection) => QueryStatement;
        }
    ): Promise<void>;

    // create a single or multiple records
    abstract insert(
        collections: SearchEngineCollection[],
        options?: {
            insertOptions?: LiteralObject;
            dataFactory?: (aggregate: SearchEngineCollection) => LiteralObject;
        }
    ): Promise<void>;

    // update record by id
    abstract updateById(
        collection: SearchEngineCollection,
        options?: {
            updateByIdOptions?: LiteralObject;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
            dataFactory?: (aggregate: SearchEngineCollection) => LiteralObject;
            // arguments to find object to update, with i18n we use langId and id relationship with parent entity
            findArguments?: LiteralObject;
        }
    ): Promise<void>;

    // update records
    abstract update(
        collection: SearchEngineCollection,
        options?: {
            updateOptions?: LiteralObject;
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
            dataFactory?: (aggregate: SearchEngineCollection) => LiteralObject;
        }
    ): Promise<void>;

    // insert or update key identification element already existing in the table
    abstract upsert(
        collection: SearchEngineCollection,
        options?: {
            upsertOptions?: LiteralObject;
            dataFactory?: (aggregate: SearchEngineCollection) => LiteralObject;
        }
    ): Promise<void>;

    // delete record
    abstract deleteById(
        id: SearchEngineCollectionId,
        options?: {
            deleteOptions?: LiteralObject;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
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
}