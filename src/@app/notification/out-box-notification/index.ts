// export commands
export { NotificationCreateOutBoxNotificationCommand } from './application/create/notification-create-out-box-notification.command';
export { NotificationCreateOutBoxNotificationsCommand } from './application/create/notification-create-out-box-notifications.command';
export { NotificationUpdateOutBoxNotificationByIdCommand } from './application/update/notification-update-out-box-notification-by-id.command';
export { NotificationUpdateOutBoxNotificationsCommand } from './application/update/notification-update-out-box-notifications.command';
export { NotificationUpdateAndIncrementOutBoxNotificationsCommand } from './application/update/notification-update-and-increment-out-box-notifications.command';
export { NotificationUpsertOutBoxNotificationCommand } from './application/upsert/notification-upsert-out-box-notification.command';
export { NotificationDeleteOutBoxNotificationByIdCommand } from './application/delete/notification-delete-out-box-notification-by-id.command';
export { NotificationDeleteOutBoxNotificationsCommand } from './application/delete/notification-delete-out-box-notifications.command';

// export queries
export { NotificationPaginateOutBoxNotificationsQuery } from './application/paginate/notification-paginate-out-box-notifications.query';
export { NotificationGetOutBoxNotificationsQuery } from './application/get/notification-get-out-box-notifications.query';
export { NotificationFindOutBoxNotificationQuery } from './application/find/notification-find-out-box-notification.query';
export { NotificationFindOutBoxNotificationByIdQuery } from './application/find/notification-find-out-box-notification-by-id.query';
export { NotificationRawSQLOutBoxNotificationsQuery } from './application/raw-sql/notification-raw-sql-out-box-notifications.query';

// export mocks
export { notificationMockOutBoxNotificationData } from './infrastructure/mock/notification-mock-out-box-notification.data';
export { NotificationMockOutBoxNotificationSeeder } from './infrastructure/mock/notification-mock-out-box-notification.seeder';
export { NotificationMockOutBoxNotificationRepository } from './infrastructure/mock/notification-mock-out-box-notification.repository';

// export events
export { NotificationAddOutBoxNotificationsContextEvent } from './application/events/notification-add-out-box-notifications-context.event';
export { NotificationCreatedOutBoxNotificationsEvent } from './application/events/notification-created-out-box-notifications.event';
export { NotificationCreatedOutBoxNotificationEvent } from './application/events/notification-created-out-box-notification.event';
export { NotificationDeletedOutBoxNotificationsEvent } from './application/events/notification-deleted-out-box-notifications.event';
export { NotificationDeletedOutBoxNotificationEvent } from './application/events/notification-deleted-out-box-notification.event';
export { NotificationUpdatedOutBoxNotificationsEvent } from './application/events/notification-updated-out-box-notifications.event';
export { NotificationUpdatedOutBoxNotificationEvent } from './application/events/notification-updated-out-box-notification.event';
export { NotificationUpdatedAndIncrementedOutBoxNotificationsEvent } from './application/events/notification-updated-and-incremented-out-box-notifications.event';
export { NotificationUpdatedAndIncrementedOutBoxNotificationEvent } from './application/events/notification-updated-and-incremented-out-box-notification.event';

// export command handlers
// can not export application command handlers, because Nest can't resolve dependencies

// export command services
// can not export application services, because Nest can't resolve dependencies

// domain
export { NotificationOutBoxNotification } from './domain/notification-out-box-notification.aggregate';
export { NotificationOutBoxNotificationMapper } from './domain/notification-out-box-notification.mapper';
export { NotificationIOutBoxNotificationRepository } from './domain/notification-out-box-notification.repository';
export { NotificationOutBoxNotificationResponse } from './domain/notification-out-box-notification.response';

// infrastructure
export { NotificationOutBoxNotificationModel } from './infrastructure/sequelize/notification-sequelize-out-box-notification.model';
export { NotificationSequelizeOutBoxNotificationRepository } from './infrastructure/sequelize/notification-sequelize-out-box-notification.repository';

// sagas
export { NotificationOutBoxNotificationSagas } from './application/sagas/notification-out-box-notification.sagas';

// command handlers
import { NotificationCreateOutBoxNotificationCommandHandler } from './application/create/notification-create-out-box-notification.command-handler';
import { NotificationCreateOutBoxNotificationsCommandHandler } from './application/create/notification-create-out-box-notifications.command-handler';
import { NotificationUpdateOutBoxNotificationByIdCommandHandler } from './application/update/notification-update-out-box-notification-by-id.command-handler';
import { NotificationUpdateOutBoxNotificationsCommandHandler } from './application/update/notification-update-out-box-notifications.command-handler';
import { NotificationUpdateAndIncrementOutBoxNotificationsCommandHandler } from './application/update/notification-update-and-increment-out-box-notifications.command-handler';
import { NotificationUpsertOutBoxNotificationCommandHandler } from './application/upsert/notification-upsert-out-box-notification.command-handler';
import { NotificationDeleteOutBoxNotificationByIdCommandHandler } from './application/delete/notification-delete-out-box-notification-by-id.command-handler';
import { NotificationDeleteOutBoxNotificationsCommandHandler } from './application/delete/notification-delete-out-box-notifications.command-handler';

// query handlers
import { NotificationPaginateOutBoxNotificationsQueryHandler } from './application/paginate/notification-paginate-out-box-notifications.query-handler';
import { NotificationGetOutBoxNotificationsQueryHandler } from './application/get/notification-get-out-box-notifications.query-handler';
import { NotificationFindOutBoxNotificationQueryHandler } from './application/find/notification-find-out-box-notification.query-handler';
import { NotificationFindOutBoxNotificationByIdQueryHandler } from './application/find/notification-find-out-box-notification-by-id.query-handler';
import { NotificationRawSQLOutBoxNotificationsQueryHandler } from './application/raw-sql/notification-raw-sql-out-box-notifications.query-handler';

// event handlers
import { NotificationCreatedOutBoxNotificationEventHandler } from './application/events/notification-created-out-box-notification.event-handler';
import { NotificationCreatedOutBoxNotificationsEventHandler } from './application/events/notification-created-out-box-notifications.event-handler';
import { NotificationUpdatedOutBoxNotificationEventHandler } from './application/events/notification-updated-out-box-notification.event-handler';
import { NotificationUpdatedOutBoxNotificationsEventHandler } from './application/events/notification-updated-out-box-notifications.event-handler';
import { NotificationUpdatedAndIncrementedOutBoxNotificationsEventHandler } from './application/events/notification-updated-and-incremented-out-box-notifications.event-handler';
import { NotificationDeletedOutBoxNotificationEventHandler } from './application/events/notification-deleted-out-box-notification.event-handler';
import { NotificationDeletedOutBoxNotificationsEventHandler } from './application/events/notification-deleted-out-box-notifications.event-handler';

// services
import { NotificationCreateOutBoxNotificationService } from './application/create/notification-create-out-box-notification.service';
import { NotificationCreateOutBoxNotificationsService } from './application/create/notification-create-out-box-notifications.service';
import { NotificationPaginateOutBoxNotificationsService } from './application/paginate/notification-paginate-out-box-notifications.service';
import { NotificationGetOutBoxNotificationsService } from './application/get/notification-get-out-box-notifications.service';
import { NotificationFindOutBoxNotificationService } from './application/find/notification-find-out-box-notification.service';
import { NotificationFindOutBoxNotificationByIdService } from './application/find/notification-find-out-box-notification-by-id.service';
import { NotificationRawSQLOutBoxNotificationsService } from './application/raw-sql/notification-raw-sql-out-box-notifications.service';
import { NotificationUpdateOutBoxNotificationByIdService } from './application/update/notification-update-out-box-notification-by-id.service';
import { NotificationUpdateOutBoxNotificationsService } from './application/update/notification-update-out-box-notifications.service';
import { NotificationUpdateAndIncrementOutBoxNotificationsService } from './application/update/notification-update-and-increment-out-box-notifications.service';
import { NotificationUpsertOutBoxNotificationService } from './application/upsert/notification-upsert-out-box-notification.service';
import { NotificationDeleteOutBoxNotificationByIdService } from './application/delete/notification-delete-out-box-notification-by-id.service';
import { NotificationDeleteOutBoxNotificationsService } from './application/delete/notification-delete-out-box-notifications.service';

export const NotificationOutBoxNotificationHandlers = [
    // commands
    NotificationCreateOutBoxNotificationCommandHandler,
    NotificationCreateOutBoxNotificationsCommandHandler,
    NotificationUpdateOutBoxNotificationByIdCommandHandler,
    NotificationUpdateOutBoxNotificationsCommandHandler,
    NotificationUpdateAndIncrementOutBoxNotificationsCommandHandler,
    NotificationUpsertOutBoxNotificationCommandHandler,
    NotificationDeleteOutBoxNotificationByIdCommandHandler,
    NotificationDeleteOutBoxNotificationsCommandHandler,

    // queries
    NotificationPaginateOutBoxNotificationsQueryHandler,
    NotificationGetOutBoxNotificationsQueryHandler,
    NotificationFindOutBoxNotificationQueryHandler,
    NotificationFindOutBoxNotificationByIdQueryHandler,
    NotificationRawSQLOutBoxNotificationsQueryHandler,

    // events
    NotificationCreatedOutBoxNotificationEventHandler,
    NotificationCreatedOutBoxNotificationsEventHandler,
    NotificationUpdatedOutBoxNotificationEventHandler,
    NotificationUpdatedOutBoxNotificationsEventHandler,
    NotificationUpdatedAndIncrementedOutBoxNotificationsEventHandler,
    NotificationDeletedOutBoxNotificationEventHandler,
    NotificationDeletedOutBoxNotificationsEventHandler,
];

export const NotificationOutBoxNotificationServices = [
    NotificationCreateOutBoxNotificationService,
    NotificationCreateOutBoxNotificationsService,
    NotificationPaginateOutBoxNotificationsService,
    NotificationGetOutBoxNotificationsService,
    NotificationFindOutBoxNotificationService,
    NotificationFindOutBoxNotificationByIdService,
    NotificationRawSQLOutBoxNotificationsService,
    NotificationUpdateOutBoxNotificationByIdService,
    NotificationUpdateOutBoxNotificationsService,
    NotificationUpdateAndIncrementOutBoxNotificationsService,
    NotificationUpsertOutBoxNotificationService,
    NotificationDeleteOutBoxNotificationByIdService,
    NotificationDeleteOutBoxNotificationsService,
];