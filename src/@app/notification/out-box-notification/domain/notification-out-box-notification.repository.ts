import { NotificationOutBoxNotificationId } from './value-objects';
import { NotificationOutBoxNotification } from '@app/notification/out-box-notification';
import { CQMetadata, IRepository, LiteralObject, Pagination, QueryStatement } from '@aurorajs.dev/core';

export abstract class NotificationIOutBoxNotificationRepository implements IRepository<NotificationOutBoxNotification>
{
    abstract readonly repository: any;

    // paginate records
    abstract paginate(
        options?: {
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
        }
    ): Promise<Pagination<NotificationOutBoxNotification>>;

    // find a single record
    abstract find(
        options?: {
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
        }
    ): Promise<NotificationOutBoxNotification | null>;

    // find a single record by id
    abstract findById(
        id: NotificationOutBoxNotificationId,
        options?: {
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
            // if id is a composite key, pass find arguments, example: { key1: value1, key2: value2, ...}
            findArguments?: LiteralObject;
        }
    ): Promise<NotificationOutBoxNotification | null>;

    // get multiple records
    abstract get(
        options?: {
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
        }
    ): Promise<NotificationOutBoxNotification[]>;

    // get records with rawSQL
    abstract rawSQL(
        options?: {
            rawSQL?: string;
            cQMetadata?: CQMetadata;
        }
    ): Promise<NotificationOutBoxNotification[]>;

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
        outBoxNotification: NotificationOutBoxNotification,
        options?: {
            createOptions?: LiteralObject;
            dataFactory?: (aggregate: NotificationOutBoxNotification) => LiteralObject;
            // arguments to find object and check if object is duplicated
            finderQueryStatement?: (aggregate: NotificationOutBoxNotification) => QueryStatement;
        }
    ): Promise<void>;

    // create a single or multiple records
    abstract insert(
        outBoxNotifications: NotificationOutBoxNotification[],
        options?: {
            insertOptions?: LiteralObject;
            dataFactory?: (aggregate: NotificationOutBoxNotification) => LiteralObject;
        }
    ): Promise<void>;

    // update record by id
    abstract updateById(
        outBoxNotification: NotificationOutBoxNotification,
        options?: {
            updateByIdOptions?: LiteralObject;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
            dataFactory?: (aggregate: NotificationOutBoxNotification) => LiteralObject;
            // arguments to find object to update, with i18n we use langId and id relationship with parent entity
            findArguments?: LiteralObject;
        }
    ): Promise<void>;

    // update records
    abstract update(
        outBoxNotification: NotificationOutBoxNotification,
        options?: {
            updateOptions?: LiteralObject;
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
            dataFactory?: (aggregate: NotificationOutBoxNotification) => LiteralObject;
        }
    ): Promise<void>;

    // update and increment records
    abstract updateAndIncrement(
        outBoxNotification: NotificationOutBoxNotification,
        options?: {
            updateAndIncrementOptions?: LiteralObject;
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
            dataFactory?: (aggregate: NotificationOutBoxNotification) => LiteralObject;
        }
    ): Promise<void>;

    // insert or update key identification element already existing in the table
    abstract upsert(
        outBoxNotification: NotificationOutBoxNotification,
        options?: {
            upsertOptions?: LiteralObject;
            dataFactory?: (aggregate: NotificationOutBoxNotification) => LiteralObject;
        }
    ): Promise<void>;

    // delete record
    abstract deleteById(
        id: NotificationOutBoxNotificationId,
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
}
