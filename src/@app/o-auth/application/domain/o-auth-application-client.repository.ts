import { OAuthApplicationClient } from '@app/o-auth/application';
import { OAuthApplicationApplicationApplicationId } from '@app/o-auth/application/domain/value-objects';
import { CQMetadata, IRepository, LiteralObject, Pagination, QueryStatement } from '@aurorajs.dev/core';

export abstract class OAuthIApplicationClientRepository implements IRepository<OAuthApplicationClient>
{
    abstract readonly repository: any;

    // paginate records
    abstract paginate(
        options?: {
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
        }
    ): Promise<Pagination<OAuthApplicationClient>>;

    // find a single record
    abstract find(
        options?: {
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
        }
    ): Promise<OAuthApplicationClient | null>;

    // find a single record by id
    abstract findById(
        id: OAuthApplicationApplicationApplicationId,
        options?: {
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
        }
    ): Promise<OAuthApplicationClient | null>;

    // get multiple records
    abstract get(
        options?: {
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
        }
    ): Promise<OAuthApplicationClient[]>;

    // get records with rawSQL
    abstract rawSQL(
        options?: {
            rawSQL?: string;
            cQMetadata?: CQMetadata;
        }
    ): Promise<OAuthApplicationClient[]>;

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
        roleClient: OAuthApplicationClient,
        options?: {
            createOptions?: LiteralObject;
            dataFactory?: (aggregate: OAuthApplicationClient) => LiteralObject;
            // arguments to find object and check if object is duplicated
            finderQueryStatement: (aggregate: OAuthApplicationClient) => QueryStatement;
        }
    ): Promise<void>;

    // create a single or multiple records
    abstract insert(
        rolesClients: OAuthApplicationClient[],
        options?: {
            insertOptions?: LiteralObject;
            dataFactory?: (aggregate: OAuthApplicationClient) => LiteralObject;
        }
    ): Promise<void>;

    // update record by id
    abstract updateById(
        permission: OAuthApplicationClient,
        options?: {
            updateByIdOptions?: LiteralObject;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
            dataFactory?: (aggregate: OAuthApplicationClient) => LiteralObject;
            // arguments to find object to update, with i18n we use langId and id relationship with parent entity
            findArguments?: LiteralObject;
        }
    ): Promise<void>;

    // update records
    abstract update(
        roleClient: OAuthApplicationClient,
        options?: {
            updateOptions?: LiteralObject;
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
            dataFactory?: (aggregate: OAuthApplicationClient) => LiteralObject;
        }
    ): Promise<void>;

    // insert or update key identification elements already existing in the table
    abstract upsert(
        roleClient: OAuthApplicationClient,
        options?: {
            upsertOptions?: LiteralObject;
            dataFactory?: (aggregate: OAuthApplicationClient) => LiteralObject;
        }
    ): Promise<void>;

    // delete record
    abstract deleteById(
        id: OAuthApplicationApplicationApplicationId,
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
