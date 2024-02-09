// export commands
export { NotificationCreateOutboxCommand } from './application/create/notification-create-outbox.command';
export { NotificationCreateOutboxesCommand } from './application/create/notification-create-outboxes.command';
export { NotificationUpdateOutboxByIdCommand } from './application/update/notification-update-outbox-by-id.command';
export { NotificationUpdateOutboxesCommand } from './application/update/notification-update-outboxes.command';
export { NotificationUpdateAndIncrementOutboxesCommand } from './application/update/notification-update-and-increment-outboxes.command';
export { NotificationUpsertOutboxCommand } from './application/upsert/notification-upsert-outbox.command';
export { NotificationDeleteOutboxByIdCommand } from './application/delete/notification-delete-outbox-by-id.command';
export { NotificationDeleteOutboxesCommand } from './application/delete/notification-delete-outboxes.command';

// export queries
export { NotificationPaginateOutboxesQuery } from './application/paginate/notification-paginate-outboxes.query';
export { NotificationGetOutboxesQuery } from './application/get/notification-get-outboxes.query';
export { NotificationFindOutboxQuery } from './application/find/notification-find-outbox.query';
export { NotificationFindOutboxByIdQuery } from './application/find/notification-find-outbox-by-id.query';
export { NotificationRawSQLOutboxesQuery } from './application/raw-sql/notification-raw-sql-outboxes.query';

// export mocks
export { notificationMockOutboxData } from './infrastructure/mock/notification-mock-outbox.data';
export { NotificationMockOutboxSeeder } from './infrastructure/mock/notification-mock-outbox.seeder';
export { NotificationMockOutboxRepository } from './infrastructure/mock/notification-mock-outbox.repository';

// export events
export { NotificationAddOutboxesContextEvent } from './application/events/notification-add-outboxes-context.event';
export { NotificationCreatedOutboxesEvent } from './application/events/notification-created-outboxes.event';
export { NotificationCreatedOutboxEvent } from './application/events/notification-created-outbox.event';
export { NotificationDeletedOutboxesEvent } from './application/events/notification-deleted-outboxes.event';
export { NotificationDeletedOutboxEvent } from './application/events/notification-deleted-outbox.event';
export { NotificationUpdatedOutboxesEvent } from './application/events/notification-updated-outboxes.event';
export { NotificationUpdatedOutboxEvent } from './application/events/notification-updated-outbox.event';
export { NotificationUpdatedAndIncrementedOutboxesEvent } from './application/events/notification-updated-and-incremented-outboxes.event';
export { NotificationUpdatedAndIncrementedOutboxEvent } from './application/events/notification-updated-and-incremented-outbox.event';

// export command handlers
// can not export application command handlers, because Nest can't resolve dependencies

// export command services
// can not export application services, because Nest can't resolve dependencies

// domain
export { NotificationOutbox } from './domain/notification-outbox.aggregate';
export { NotificationOutboxMapper } from './domain/notification-outbox.mapper';
export { NotificationIOutboxRepository } from './domain/notification-outbox.repository';
export { NotificationOutboxResponse } from './domain/notification-outbox.response';

// infrastructure
export { NotificationOutboxModel } from './infrastructure/sequelize/notification-sequelize-outbox.model';
export { NotificationSequelizeOutboxRepository } from './infrastructure/sequelize/notification-sequelize-outbox.repository';

// sagas
export { NotificationOutboxSagas } from './application/sagas/notification-outbox.sagas';

// command handlers
import { NotificationCreateOutboxCommandHandler } from './application/create/notification-create-outbox.command-handler';
import { NotificationCreateOutboxesCommandHandler } from './application/create/notification-create-outboxes.command-handler';
import { NotificationUpdateOutboxByIdCommandHandler } from './application/update/notification-update-outbox-by-id.command-handler';
import { NotificationUpdateOutboxesCommandHandler } from './application/update/notification-update-outboxes.command-handler';
import { NotificationUpdateAndIncrementOutboxesCommandHandler } from './application/update/notification-update-and-increment-outboxes.command-handler';
import { NotificationUpsertOutboxCommandHandler } from './application/upsert/notification-upsert-outbox.command-handler';
import { NotificationDeleteOutboxByIdCommandHandler } from './application/delete/notification-delete-outbox-by-id.command-handler';
import { NotificationDeleteOutboxesCommandHandler } from './application/delete/notification-delete-outboxes.command-handler';

// query handlers
import { NotificationPaginateOutboxesQueryHandler } from './application/paginate/notification-paginate-outboxes.query-handler';
import { NotificationGetOutboxesQueryHandler } from './application/get/notification-get-outboxes.query-handler';
import { NotificationFindOutboxQueryHandler } from './application/find/notification-find-outbox.query-handler';
import { NotificationFindOutboxByIdQueryHandler } from './application/find/notification-find-outbox-by-id.query-handler';
import { NotificationRawSQLOutboxesQueryHandler } from './application/raw-sql/notification-raw-sql-outboxes.query-handler';

// event handlers
import { NotificationCreatedOutboxEventHandler } from './application/events/notification-created-outbox.event-handler';
import { NotificationCreatedOutboxesEventHandler } from './application/events/notification-created-outboxes.event-handler';
import { NotificationUpdatedOutboxEventHandler } from './application/events/notification-updated-outbox.event-handler';
import { NotificationUpdatedOutboxesEventHandler } from './application/events/notification-updated-outboxes.event-handler';
import { NotificationUpdatedAndIncrementedOutboxesEventHandler } from './application/events/notification-updated-and-incremented-outboxes.event-handler';
import { NotificationDeletedOutboxEventHandler } from './application/events/notification-deleted-outbox.event-handler';
import { NotificationDeletedOutboxesEventHandler } from './application/events/notification-deleted-outboxes.event-handler';

// services
import { NotificationCreateOutboxService } from './application/create/notification-create-outbox.service';
import { NotificationCreateOutboxesService } from './application/create/notification-create-outboxes.service';
import { NotificationPaginateOutboxesService } from './application/paginate/notification-paginate-outboxes.service';
import { NotificationGetOutboxesService } from './application/get/notification-get-outboxes.service';
import { NotificationFindOutboxService } from './application/find/notification-find-outbox.service';
import { NotificationFindOutboxByIdService } from './application/find/notification-find-outbox-by-id.service';
import { NotificationRawSQLOutboxesService } from './application/raw-sql/notification-raw-sql-outboxes.service';
import { NotificationUpdateOutboxByIdService } from './application/update/notification-update-outbox-by-id.service';
import { NotificationUpdateOutboxesService } from './application/update/notification-update-outboxes.service';
import { NotificationUpdateAndIncrementOutboxesService } from './application/update/notification-update-and-increment-outboxes.service';
import { NotificationUpsertOutboxService } from './application/upsert/notification-upsert-outbox.service';
import { NotificationDeleteOutboxByIdService } from './application/delete/notification-delete-outbox-by-id.service';
import { NotificationDeleteOutboxesService } from './application/delete/notification-delete-outboxes.service';

export const NotificationOutboxHandlers = [
    // commands
    NotificationCreateOutboxCommandHandler,
    NotificationCreateOutboxesCommandHandler,
    NotificationUpdateOutboxByIdCommandHandler,
    NotificationUpdateOutboxesCommandHandler,
    NotificationUpdateAndIncrementOutboxesCommandHandler,
    NotificationUpsertOutboxCommandHandler,
    NotificationDeleteOutboxByIdCommandHandler,
    NotificationDeleteOutboxesCommandHandler,

    // queries
    NotificationPaginateOutboxesQueryHandler,
    NotificationGetOutboxesQueryHandler,
    NotificationFindOutboxQueryHandler,
    NotificationFindOutboxByIdQueryHandler,
    NotificationRawSQLOutboxesQueryHandler,

    // events
    NotificationCreatedOutboxEventHandler,
    NotificationCreatedOutboxesEventHandler,
    NotificationUpdatedOutboxEventHandler,
    NotificationUpdatedOutboxesEventHandler,
    NotificationUpdatedAndIncrementedOutboxesEventHandler,
    NotificationDeletedOutboxEventHandler,
    NotificationDeletedOutboxesEventHandler,
];

export const NotificationOutboxServices = [
    NotificationCreateOutboxService,
    NotificationCreateOutboxesService,
    NotificationPaginateOutboxesService,
    NotificationGetOutboxesService,
    NotificationFindOutboxService,
    NotificationFindOutboxByIdService,
    NotificationRawSQLOutboxesService,
    NotificationUpdateOutboxByIdService,
    NotificationUpdateOutboxesService,
    NotificationUpdateAndIncrementOutboxesService,
    NotificationUpsertOutboxService,
    NotificationDeleteOutboxByIdService,
    NotificationDeleteOutboxesService,
];