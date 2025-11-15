import { SupportConfig } from '@app/support/config';
import {
    CQMetadata,
    IRepository,
    LiteralObject,
    Pagination,
    QueryStatement,
} from '@aurorajs.dev/core';
import { SupportConfigId } from './value-objects';

export abstract class SupportIConfigRepository
    implements IRepository<SupportConfig>
{
    abstract readonly repository: any;

    // paginate records
    abstract paginate(options?: {
        queryStatement?: QueryStatement;
        constraint?: QueryStatement;
        cQMetadata?: CQMetadata;
    }): Promise<Pagination<SupportConfig>>;

    // find a single record
    abstract find(options?: {
        queryStatement?: QueryStatement;
        constraint?: QueryStatement;
        cQMetadata?: CQMetadata;
    }): Promise<SupportConfig | null>;

    // find a single record by id
    abstract findById(
        id: SupportConfigId,
        options?: {
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
            // if id is a composite key, pass find arguments, example: { key1: value1, key2: value2, ...}
            findArguments?: LiteralObject;
        },
    ): Promise<SupportConfig | null>;

    // get multiple records
    abstract get(options?: {
        queryStatement?: QueryStatement;
        constraint?: QueryStatement;
        cQMetadata?: CQMetadata;
    }): Promise<SupportConfig[]>;

    // get records with rawSQL
    abstract rawSQL(options?: {
        rawSQL?: string;
        cQMetadata?: CQMetadata;
    }): Promise<SupportConfig[]>;

    // count records
    abstract count(options?: {
        queryStatement?: QueryStatement;
        constraint?: QueryStatement;
        cQMetadata?: CQMetadata;
    }): Promise<number>;

    // max record
    abstract max(
        column: string,
        options?: {
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
        },
    ): Promise<number>;

    // min record
    abstract min(
        column: string,
        options?: {
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
        },
    ): Promise<number>;

    // sum record
    abstract sum(
        column: string,
        options?: {
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
        },
    ): Promise<number>;

    // ******************
    // ** side effects **
    // ******************

    // create a single record
    abstract create(
        config: SupportConfig,
        options?: {
            createOptions?: LiteralObject;
            dataFactory?: (aggregate: SupportConfig) => LiteralObject;
            // arguments to find object and check if object is duplicated
            finderQueryStatement?: (aggregate: SupportConfig) => QueryStatement;
        },
    ): Promise<void>;

    // create a single or multiple records
    abstract insert(
        configs: SupportConfig[],
        options?: {
            insertOptions?: LiteralObject;
            dataFactory?: (aggregate: SupportConfig) => LiteralObject;
        },
    ): Promise<void>;

    // update record by id
    abstract updateById(
        config: SupportConfig,
        options?: {
            updateByIdOptions?: LiteralObject;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
            dataFactory?: (aggregate: SupportConfig) => LiteralObject;
            // arguments to find object to update, with i18n we use langId and id relationship with parent entity
            findArguments?: LiteralObject;
        },
    ): Promise<void>;

    // update records
    abstract update(
        config: SupportConfig,
        options?: {
            updateOptions?: LiteralObject;
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
            dataFactory?: (aggregate: SupportConfig) => LiteralObject;
        },
    ): Promise<void>;

    // update and increment records
    abstract updateAndIncrement(
        config: SupportConfig,
        options?: {
            updateAndIncrementOptions?: LiteralObject;
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
            dataFactory?: (aggregate: SupportConfig) => LiteralObject;
        },
    ): Promise<void>;

    // insert or update key identification element already existing in the table
    abstract upsert(
        config: SupportConfig,
        options?: {
            upsertOptions?: LiteralObject;
            dataFactory?: (aggregate: SupportConfig) => LiteralObject;
        },
    ): Promise<void>;

    // delete record
    abstract deleteById(
        id: SupportConfigId,
        options?: {
            deleteOptions?: LiteralObject;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
            // if id is a composite key, pass find arguments, example: { key1: value1, key2: value2, ...}
            findArguments?: LiteralObject;
        },
    ): Promise<void>;

    // delete records
    abstract delete(options?: {
        deleteOptions?: LiteralObject;
        queryStatement?: QueryStatement;
        constraint?: QueryStatement;
        cQMetadata?: CQMetadata;
    }): Promise<void>;
}
