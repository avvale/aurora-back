import { NotificationInboxSettingId } from './value-objects';
import { NotificationInboxSetting } from '@app/notification/inbox-setting';
import { CQMetadata, IRepository, LiteralObject, Pagination, QueryStatement } from '@aurorajs.dev/core';

export abstract class NotificationIInboxSettingRepository implements IRepository<NotificationInboxSetting>
{
    abstract readonly repository: any;

    // paginate records
    abstract paginate(
        options?: {
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
        }
    ): Promise<Pagination<NotificationInboxSetting>>;

    // find a single record
    abstract find(
        options?: {
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
        }
    ): Promise<NotificationInboxSetting | null>;

    // find a single record by id
    abstract findById(
        id: NotificationInboxSettingId,
        options?: {
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
            // if id is a composite key, pass find arguments, example: { key1: value1, key2: value2, ...}
            findArguments?: LiteralObject;
        }
    ): Promise<NotificationInboxSetting | null>;

    // get multiple records
    abstract get(
        options?: {
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
        }
    ): Promise<NotificationInboxSetting[]>;

    // get records with rawSQL
    abstract rawSQL(
        options?: {
            rawSQL?: string;
            cQMetadata?: CQMetadata;
        }
    ): Promise<NotificationInboxSetting[]>;

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
        inboxSetting: NotificationInboxSetting,
        options?: {
            createOptions?: LiteralObject;
            dataFactory?: (aggregate: NotificationInboxSetting) => LiteralObject;
            // arguments to find object and check if object is duplicated
            finderQueryStatement?: (aggregate: NotificationInboxSetting) => QueryStatement;
        }
    ): Promise<void>;

    // create a single or multiple records
    abstract insert(
        inboxSettings: NotificationInboxSetting[],
        options?: {
            insertOptions?: LiteralObject;
            dataFactory?: (aggregate: NotificationInboxSetting) => LiteralObject;
        }
    ): Promise<void>;

    // update record by id
    abstract updateById(
        inboxSetting: NotificationInboxSetting,
        options?: {
            updateByIdOptions?: LiteralObject;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
            dataFactory?: (aggregate: NotificationInboxSetting) => LiteralObject;
            // arguments to find object to update, with i18n we use langId and id relationship with parent entity
            findArguments?: LiteralObject;
        }
    ): Promise<void>;

    // update records
    abstract update(
        inboxSetting: NotificationInboxSetting,
        options?: {
            updateOptions?: LiteralObject;
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
            dataFactory?: (aggregate: NotificationInboxSetting) => LiteralObject;
        }
    ): Promise<void>;

    // update and increment records
    abstract updateAndIncrement(
        inboxSetting: NotificationInboxSetting,
        options?: {
            updateAndIncrementOptions?: LiteralObject;
            queryStatement?: QueryStatement;
            constraint?: QueryStatement;
            cQMetadata?: CQMetadata;
            dataFactory?: (aggregate: NotificationInboxSetting) => LiteralObject;
        }
    ): Promise<void>;

    // insert or update key identification element already existing in the table
    abstract upsert(
        inboxSetting: NotificationInboxSetting,
        options?: {
            upsertOptions?: LiteralObject;
            dataFactory?: (aggregate: NotificationInboxSetting) => LiteralObject;
        }
    ): Promise<void>;

    // delete record
    abstract deleteById(
        id: NotificationInboxSettingId,
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
