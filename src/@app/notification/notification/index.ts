// export commands
export { NotificationCreateNotificationCommand } from './application/create/notification-create-notification.command';
export { NotificationCreateNotificationsCommand } from './application/create/notification-create-notifications.command';
export { NotificationUpdateNotificationByIdCommand } from './application/update/notification-update-notification-by-id.command';
export { NotificationUpdateNotificationsCommand } from './application/update/notification-update-notifications.command';
export { NotificationUpdateAndIncrementNotificationsCommand } from './application/update/notification-update-and-increment-notifications.command';
export { NotificationUpsertNotificationCommand } from './application/upsert/notification-upsert-notification.command';
export { NotificationDeleteNotificationByIdCommand } from './application/delete/notification-delete-notification-by-id.command';
export { NotificationDeleteNotificationsCommand } from './application/delete/notification-delete-notifications.command';

// export queries
export { NotificationPaginateNotificationsQuery } from './application/paginate/notification-paginate-notifications.query';
export { NotificationGetNotificationsQuery } from './application/get/notification-get-notifications.query';
export { NotificationFindNotificationQuery } from './application/find/notification-find-notification.query';
export { NotificationFindNotificationByIdQuery } from './application/find/notification-find-notification-by-id.query';
export { NotificationRawSQLNotificationsQuery } from './application/raw-sql/notification-raw-sql-notifications.query';

// export mocks
export { notificationMockNotificationData } from './infrastructure/mock/notification-mock-notification.data';
export { NotificationMockNotificationSeeder } from './infrastructure/mock/notification-mock-notification.seeder';
export { NotificationMockNotificationRepository } from './infrastructure/mock/notification-mock-notification.repository';

// export events
export { NotificationAddNotificationsContextEvent } from './application/events/notification-add-notifications-context.event';
export { NotificationCreatedNotificationsEvent } from './application/events/notification-created-notifications.event';
export { NotificationCreatedNotificationEvent } from './application/events/notification-created-notification.event';
export { NotificationDeletedNotificationsEvent } from './application/events/notification-deleted-notifications.event';
export { NotificationDeletedNotificationEvent } from './application/events/notification-deleted-notification.event';
export { NotificationUpdatedNotificationsEvent } from './application/events/notification-updated-notifications.event';
export { NotificationUpdatedNotificationEvent } from './application/events/notification-updated-notification.event';
export { NotificationUpdatedAndIncrementedNotificationsEvent } from './application/events/notification-updated-and-incremented-notifications.event';
export { NotificationUpdatedAndIncrementedNotificationEvent } from './application/events/notification-updated-and-incremented-notification.event';

// export command handlers
// can not export application command handlers, because Nest can't resolve dependencies

// export command services
// can not export application services, because Nest can't resolve dependencies

// domain
export { NotificationNotification } from './domain/notification-notification.aggregate';
export { NotificationNotificationMapper } from './domain/notification-notification.mapper';
export { NotificationINotificationRepository } from './domain/notification-notification.repository';
export { NotificationNotificationResponse } from './domain/notification-notification.response';

// infrastructure
export { NotificationNotificationModel } from './infrastructure/sequelize/notification-sequelize-notification.model';
export { NotificationSequelizeNotificationRepository } from './infrastructure/sequelize/notification-sequelize-notification.repository';

// sagas
export { NotificationNotificationSagas } from './application/sagas/notification-notification.sagas';

// command handlers
import { NotificationCreateNotificationCommandHandler } from './application/create/notification-create-notification.command-handler';
import { NotificationCreateNotificationsCommandHandler } from './application/create/notification-create-notifications.command-handler';
import { NotificationUpdateNotificationByIdCommandHandler } from './application/update/notification-update-notification-by-id.command-handler';
import { NotificationUpdateNotificationsCommandHandler } from './application/update/notification-update-notifications.command-handler';
import { NotificationUpdateAndIncrementNotificationsCommandHandler } from './application/update/notification-update-and-increment-notifications.command-handler';
import { NotificationUpsertNotificationCommandHandler } from './application/upsert/notification-upsert-notification.command-handler';
import { NotificationDeleteNotificationByIdCommandHandler } from './application/delete/notification-delete-notification-by-id.command-handler';
import { NotificationDeleteNotificationsCommandHandler } from './application/delete/notification-delete-notifications.command-handler';

// query handlers
import { NotificationPaginateNotificationsQueryHandler } from './application/paginate/notification-paginate-notifications.query-handler';
import { NotificationGetNotificationsQueryHandler } from './application/get/notification-get-notifications.query-handler';
import { NotificationFindNotificationQueryHandler } from './application/find/notification-find-notification.query-handler';
import { NotificationFindNotificationByIdQueryHandler } from './application/find/notification-find-notification-by-id.query-handler';
import { NotificationRawSQLNotificationsQueryHandler } from './application/raw-sql/notification-raw-sql-notifications.query-handler';

// event handlers
import { NotificationCreatedNotificationEventHandler } from './application/events/notification-created-notification.event-handler';
import { NotificationCreatedNotificationsEventHandler } from './application/events/notification-created-notifications.event-handler';
import { NotificationUpdatedNotificationEventHandler } from './application/events/notification-updated-notification.event-handler';
import { NotificationUpdatedNotificationsEventHandler } from './application/events/notification-updated-notifications.event-handler';
import { NotificationUpdatedAndIncrementedNotificationsEventHandler } from './application/events/notification-updated-and-incremented-notifications.event-handler';
import { NotificationDeletedNotificationEventHandler } from './application/events/notification-deleted-notification.event-handler';
import { NotificationDeletedNotificationsEventHandler } from './application/events/notification-deleted-notifications.event-handler';

// services
import { NotificationCreateNotificationService } from './application/create/notification-create-notification.service';
import { NotificationCreateNotificationsService } from './application/create/notification-create-notifications.service';
import { NotificationPaginateNotificationsService } from './application/paginate/notification-paginate-notifications.service';
import { NotificationGetNotificationsService } from './application/get/notification-get-notifications.service';
import { NotificationFindNotificationService } from './application/find/notification-find-notification.service';
import { NotificationFindNotificationByIdService } from './application/find/notification-find-notification-by-id.service';
import { NotificationRawSQLNotificationsService } from './application/raw-sql/notification-raw-sql-notifications.service';
import { NotificationUpdateNotificationByIdService } from './application/update/notification-update-notification-by-id.service';
import { NotificationUpdateNotificationsService } from './application/update/notification-update-notifications.service';
import { NotificationUpdateAndIncrementNotificationsService } from './application/update/notification-update-and-increment-notifications.service';
import { NotificationUpsertNotificationService } from './application/upsert/notification-upsert-notification.service';
import { NotificationDeleteNotificationByIdService } from './application/delete/notification-delete-notification-by-id.service';
import { NotificationDeleteNotificationsService } from './application/delete/notification-delete-notifications.service';

export const NotificationNotificationHandlers = [
    // commands
    NotificationCreateNotificationCommandHandler,
    NotificationCreateNotificationsCommandHandler,
    NotificationUpdateNotificationByIdCommandHandler,
    NotificationUpdateNotificationsCommandHandler,
    NotificationUpdateAndIncrementNotificationsCommandHandler,
    NotificationUpsertNotificationCommandHandler,
    NotificationDeleteNotificationByIdCommandHandler,
    NotificationDeleteNotificationsCommandHandler,

    // queries
    NotificationPaginateNotificationsQueryHandler,
    NotificationGetNotificationsQueryHandler,
    NotificationFindNotificationQueryHandler,
    NotificationFindNotificationByIdQueryHandler,
    NotificationRawSQLNotificationsQueryHandler,

    // events
    NotificationCreatedNotificationEventHandler,
    NotificationCreatedNotificationsEventHandler,
    NotificationUpdatedNotificationEventHandler,
    NotificationUpdatedNotificationsEventHandler,
    NotificationUpdatedAndIncrementedNotificationsEventHandler,
    NotificationDeletedNotificationEventHandler,
    NotificationDeletedNotificationsEventHandler,
];

export const NotificationNotificationServices = [
    NotificationCreateNotificationService,
    NotificationCreateNotificationsService,
    NotificationPaginateNotificationsService,
    NotificationGetNotificationsService,
    NotificationFindNotificationService,
    NotificationFindNotificationByIdService,
    NotificationRawSQLNotificationsService,
    NotificationUpdateNotificationByIdService,
    NotificationUpdateNotificationsService,
    NotificationUpdateAndIncrementNotificationsService,
    NotificationUpsertNotificationService,
    NotificationDeleteNotificationByIdService,
    NotificationDeleteNotificationsService,
];