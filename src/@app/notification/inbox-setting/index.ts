// export commands
export { NotificationCreateInboxSettingCommand } from './application/create/notification-create-inbox-setting.command';
export { NotificationCreateInboxSettingsCommand } from './application/create/notification-create-inbox-settings.command';
export { NotificationUpdateInboxSettingByIdCommand } from './application/update/notification-update-inbox-setting-by-id.command';
export { NotificationUpdateInboxSettingsCommand } from './application/update/notification-update-inbox-settings.command';
export { NotificationUpdateAndIncrementInboxSettingsCommand } from './application/update/notification-update-and-increment-inbox-settings.command';
export { NotificationUpsertInboxSettingCommand } from './application/upsert/notification-upsert-inbox-setting.command';
export { NotificationDeleteInboxSettingByIdCommand } from './application/delete/notification-delete-inbox-setting-by-id.command';
export { NotificationDeleteInboxSettingsCommand } from './application/delete/notification-delete-inbox-settings.command';

// export queries
export { NotificationPaginateInboxSettingsQuery } from './application/paginate/notification-paginate-inbox-settings.query';
export { NotificationGetInboxSettingsQuery } from './application/get/notification-get-inbox-settings.query';
export { NotificationFindInboxSettingQuery } from './application/find/notification-find-inbox-setting.query';
export { NotificationFindInboxSettingByIdQuery } from './application/find/notification-find-inbox-setting-by-id.query';
export { NotificationRawSQLInboxSettingsQuery } from './application/raw-sql/notification-raw-sql-inbox-settings.query';

// export mocks
export { notificationMockInboxSettingData } from './infrastructure/mock/notification-mock-inbox-setting.data';
export { NotificationMockInboxSettingSeeder } from './infrastructure/mock/notification-mock-inbox-setting.seeder';
export { NotificationMockInboxSettingRepository } from './infrastructure/mock/notification-mock-inbox-setting.repository';

// export events
export { NotificationAddInboxSettingsContextEvent } from './application/events/notification-add-inbox-settings-context.event';
export { NotificationCreatedInboxSettingsEvent } from './application/events/notification-created-inbox-settings.event';
export { NotificationCreatedInboxSettingEvent } from './application/events/notification-created-inbox-setting.event';
export { NotificationDeletedInboxSettingsEvent } from './application/events/notification-deleted-inbox-settings.event';
export { NotificationDeletedInboxSettingEvent } from './application/events/notification-deleted-inbox-setting.event';
export { NotificationUpdatedInboxSettingsEvent } from './application/events/notification-updated-inbox-settings.event';
export { NotificationUpdatedInboxSettingEvent } from './application/events/notification-updated-inbox-setting.event';
export { NotificationUpdatedAndIncrementedInboxSettingsEvent } from './application/events/notification-updated-and-incremented-inbox-settings.event';
export { NotificationUpdatedAndIncrementedInboxSettingEvent } from './application/events/notification-updated-and-incremented-inbox-setting.event';

// export command handlers
// can not export application command handlers, because Nest can't resolve dependencies

// export command services
// can not export application services, because Nest can't resolve dependencies

// domain
export { NotificationInboxSetting } from './domain/notification-inbox-setting.aggregate';
export { NotificationInboxSettingMapper } from './domain/notification-inbox-setting.mapper';
export { NotificationIInboxSettingRepository } from './domain/notification-inbox-setting.repository';
export { NotificationInboxSettingResponse } from './domain/notification-inbox-setting.response';

// infrastructure
export { NotificationInboxSettingModel } from './infrastructure/sequelize/notification-sequelize-inbox-setting.model';
export { NotificationSequelizeInboxSettingRepository } from './infrastructure/sequelize/notification-sequelize-inbox-setting.repository';

// sagas
export { NotificationInboxSettingSagas } from './application/sagas/notification-inbox-setting.sagas';

// command handlers
import { NotificationCreateInboxSettingCommandHandler } from './application/create/notification-create-inbox-setting.command-handler';
import { NotificationCreateInboxSettingsCommandHandler } from './application/create/notification-create-inbox-settings.command-handler';
import { NotificationUpdateInboxSettingByIdCommandHandler } from './application/update/notification-update-inbox-setting-by-id.command-handler';
import { NotificationUpdateInboxSettingsCommandHandler } from './application/update/notification-update-inbox-settings.command-handler';
import { NotificationUpdateAndIncrementInboxSettingsCommandHandler } from './application/update/notification-update-and-increment-inbox-settings.command-handler';
import { NotificationUpsertInboxSettingCommandHandler } from './application/upsert/notification-upsert-inbox-setting.command-handler';
import { NotificationDeleteInboxSettingByIdCommandHandler } from './application/delete/notification-delete-inbox-setting-by-id.command-handler';
import { NotificationDeleteInboxSettingsCommandHandler } from './application/delete/notification-delete-inbox-settings.command-handler';

// query handlers
import { NotificationPaginateInboxSettingsQueryHandler } from './application/paginate/notification-paginate-inbox-settings.query-handler';
import { NotificationGetInboxSettingsQueryHandler } from './application/get/notification-get-inbox-settings.query-handler';
import { NotificationFindInboxSettingQueryHandler } from './application/find/notification-find-inbox-setting.query-handler';
import { NotificationFindInboxSettingByIdQueryHandler } from './application/find/notification-find-inbox-setting-by-id.query-handler';
import { NotificationRawSQLInboxSettingsQueryHandler } from './application/raw-sql/notification-raw-sql-inbox-settings.query-handler';

// event handlers
import { NotificationCreatedInboxSettingEventHandler } from './application/events/notification-created-inbox-setting.event-handler';
import { NotificationCreatedInboxSettingsEventHandler } from './application/events/notification-created-inbox-settings.event-handler';
import { NotificationUpdatedInboxSettingEventHandler } from './application/events/notification-updated-inbox-setting.event-handler';
import { NotificationUpdatedInboxSettingsEventHandler } from './application/events/notification-updated-inbox-settings.event-handler';
import { NotificationUpdatedAndIncrementedInboxSettingsEventHandler } from './application/events/notification-updated-and-incremented-inbox-settings.event-handler';
import { NotificationDeletedInboxSettingEventHandler } from './application/events/notification-deleted-inbox-setting.event-handler';
import { NotificationDeletedInboxSettingsEventHandler } from './application/events/notification-deleted-inbox-settings.event-handler';

// services
import { NotificationCreateInboxSettingService } from './application/create/notification-create-inbox-setting.service';
import { NotificationCreateInboxSettingsService } from './application/create/notification-create-inbox-settings.service';
import { NotificationPaginateInboxSettingsService } from './application/paginate/notification-paginate-inbox-settings.service';
import { NotificationGetInboxSettingsService } from './application/get/notification-get-inbox-settings.service';
import { NotificationFindInboxSettingService } from './application/find/notification-find-inbox-setting.service';
import { NotificationFindInboxSettingByIdService } from './application/find/notification-find-inbox-setting-by-id.service';
import { NotificationRawSQLInboxSettingsService } from './application/raw-sql/notification-raw-sql-inbox-settings.service';
import { NotificationUpdateInboxSettingByIdService } from './application/update/notification-update-inbox-setting-by-id.service';
import { NotificationUpdateInboxSettingsService } from './application/update/notification-update-inbox-settings.service';
import { NotificationUpdateAndIncrementInboxSettingsService } from './application/update/notification-update-and-increment-inbox-settings.service';
import { NotificationUpsertInboxSettingService } from './application/upsert/notification-upsert-inbox-setting.service';
import { NotificationDeleteInboxSettingByIdService } from './application/delete/notification-delete-inbox-setting-by-id.service';
import { NotificationDeleteInboxSettingsService } from './application/delete/notification-delete-inbox-settings.service';

export const NotificationInboxSettingHandlers = [
    // commands
    NotificationCreateInboxSettingCommandHandler,
    NotificationCreateInboxSettingsCommandHandler,
    NotificationUpdateInboxSettingByIdCommandHandler,
    NotificationUpdateInboxSettingsCommandHandler,
    NotificationUpdateAndIncrementInboxSettingsCommandHandler,
    NotificationUpsertInboxSettingCommandHandler,
    NotificationDeleteInboxSettingByIdCommandHandler,
    NotificationDeleteInboxSettingsCommandHandler,

    // queries
    NotificationPaginateInboxSettingsQueryHandler,
    NotificationGetInboxSettingsQueryHandler,
    NotificationFindInboxSettingQueryHandler,
    NotificationFindInboxSettingByIdQueryHandler,
    NotificationRawSQLInboxSettingsQueryHandler,

    // events
    NotificationCreatedInboxSettingEventHandler,
    NotificationCreatedInboxSettingsEventHandler,
    NotificationUpdatedInboxSettingEventHandler,
    NotificationUpdatedInboxSettingsEventHandler,
    NotificationUpdatedAndIncrementedInboxSettingsEventHandler,
    NotificationDeletedInboxSettingEventHandler,
    NotificationDeletedInboxSettingsEventHandler,
];

export const NotificationInboxSettingServices = [
    NotificationCreateInboxSettingService,
    NotificationCreateInboxSettingsService,
    NotificationPaginateInboxSettingsService,
    NotificationGetInboxSettingsService,
    NotificationFindInboxSettingService,
    NotificationFindInboxSettingByIdService,
    NotificationRawSQLInboxSettingsService,
    NotificationUpdateInboxSettingByIdService,
    NotificationUpdateInboxSettingsService,
    NotificationUpdateAndIncrementInboxSettingsService,
    NotificationUpsertInboxSettingService,
    NotificationDeleteInboxSettingByIdService,
    NotificationDeleteInboxSettingsService,
];