// export commands
export { NotificationCreateInboxCommand } from './application/create/notification-create-inbox.command';
export { NotificationCreateInboxesCommand } from './application/create/notification-create-inboxes.command';
export { NotificationUpdateInboxByIdCommand } from './application/update/notification-update-inbox-by-id.command';
export { NotificationUpdateInboxesCommand } from './application/update/notification-update-inboxes.command';
export { NotificationUpdateAndIncrementInboxesCommand } from './application/update/notification-update-and-increment-inboxes.command';
export { NotificationUpsertInboxCommand } from './application/upsert/notification-upsert-inbox.command';
export { NotificationDeleteInboxByIdCommand } from './application/delete/notification-delete-inbox-by-id.command';
export { NotificationDeleteInboxesCommand } from './application/delete/notification-delete-inboxes.command';

// export queries
export { NotificationPaginateInboxesQuery } from './application/paginate/notification-paginate-inboxes.query';
export { NotificationGetInboxesQuery } from './application/get/notification-get-inboxes.query';
export { NotificationFindInboxQuery } from './application/find/notification-find-inbox.query';
export { NotificationFindInboxByIdQuery } from './application/find/notification-find-inbox-by-id.query';
export { NotificationRawSQLInboxesQuery } from './application/raw-sql/notification-raw-sql-inboxes.query';
export { NotificationCountInboxQuery } from './application/count/notification-count-inbox.query';
export { NotificationMaxInboxQuery } from './application/max/notification-max-inbox.query';
export { NotificationMinInboxQuery } from './application/min/notification-min-inbox.query';
export { NotificationSumInboxQuery } from './application/sum/notification-sum-inbox.query';

// export mocks
export { notificationMockInboxData } from './infrastructure/mock/notification-mock-inbox.data';
export { NotificationMockInboxSeeder } from './infrastructure/mock/notification-mock-inbox.seeder';
export { NotificationMockInboxRepository } from './infrastructure/mock/notification-mock-inbox.repository';

// export events
export { NotificationAddInboxesContextEvent } from './application/events/notification-add-inboxes-context.event';
export { NotificationCreatedInboxesEvent } from './application/events/notification-created-inboxes.event';
export { NotificationCreatedInboxEvent } from './application/events/notification-created-inbox.event';
export { NotificationDeletedInboxesEvent } from './application/events/notification-deleted-inboxes.event';
export { NotificationDeletedInboxEvent } from './application/events/notification-deleted-inbox.event';
export { NotificationUpdatedInboxesEvent } from './application/events/notification-updated-inboxes.event';
export { NotificationUpdatedInboxEvent } from './application/events/notification-updated-inbox.event';
export { NotificationUpdatedAndIncrementedInboxesEvent } from './application/events/notification-updated-and-incremented-inboxes.event';
export { NotificationUpdatedAndIncrementedInboxEvent } from './application/events/notification-updated-and-incremented-inbox.event';

// export command handlers
// can not export application command handlers, because Nest can't resolve dependencies

// export command services
// can not export application services, because Nest can't resolve dependencies

// domain
export { NotificationInbox } from './domain/notification-inbox.aggregate';
export { NotificationInboxMapper } from './domain/notification-inbox.mapper';
export { NotificationIInboxRepository } from './domain/notification-inbox.repository';
export { NotificationInboxResponse } from './domain/notification-inbox.response';

// infrastructure
export { NotificationInboxModel } from './infrastructure/sequelize/notification-sequelize-inbox.model';
export { NotificationSequelizeInboxRepository } from './infrastructure/sequelize/notification-sequelize-inbox.repository';

// sagas
export { NotificationInboxSagas } from './application/sagas/notification-inbox.sagas';

// command handlers
import { NotificationCreateInboxCommandHandler } from './application/create/notification-create-inbox.command-handler';
import { NotificationCreateInboxesCommandHandler } from './application/create/notification-create-inboxes.command-handler';
import { NotificationUpdateInboxByIdCommandHandler } from './application/update/notification-update-inbox-by-id.command-handler';
import { NotificationUpdateInboxesCommandHandler } from './application/update/notification-update-inboxes.command-handler';
import { NotificationUpdateAndIncrementInboxesCommandHandler } from './application/update/notification-update-and-increment-inboxes.command-handler';
import { NotificationUpsertInboxCommandHandler } from './application/upsert/notification-upsert-inbox.command-handler';
import { NotificationDeleteInboxByIdCommandHandler } from './application/delete/notification-delete-inbox-by-id.command-handler';
import { NotificationDeleteInboxesCommandHandler } from './application/delete/notification-delete-inboxes.command-handler';

// query handlers
import { NotificationPaginateInboxesQueryHandler } from './application/paginate/notification-paginate-inboxes.query-handler';
import { NotificationGetInboxesQueryHandler } from './application/get/notification-get-inboxes.query-handler';
import { NotificationFindInboxQueryHandler } from './application/find/notification-find-inbox.query-handler';
import { NotificationFindInboxByIdQueryHandler } from './application/find/notification-find-inbox-by-id.query-handler';
import { NotificationRawSQLInboxesQueryHandler } from './application/raw-sql/notification-raw-sql-inboxes.query-handler';
import { NotificationCountInboxQueryHandler } from './application/count/notification-count-inbox.query-handler';
import { NotificationMaxInboxQueryHandler } from './application/max/notification-max-inbox.query-handler';
import { NotificationMinInboxQueryHandler } from './application/min/notification-min-inbox.query-handler';
import { NotificationSumInboxQueryHandler } from './application/sum/notification-sum-inbox.query-handler';

// event handlers
import { NotificationCreatedInboxEventHandler } from './application/events/notification-created-inbox.event-handler';
import { NotificationCreatedInboxesEventHandler } from './application/events/notification-created-inboxes.event-handler';
import { NotificationUpdatedInboxEventHandler } from './application/events/notification-updated-inbox.event-handler';
import { NotificationUpdatedInboxesEventHandler } from './application/events/notification-updated-inboxes.event-handler';
import { NotificationUpdatedAndIncrementedInboxesEventHandler } from './application/events/notification-updated-and-incremented-inboxes.event-handler';
import { NotificationDeletedInboxEventHandler } from './application/events/notification-deleted-inbox.event-handler';
import { NotificationDeletedInboxesEventHandler } from './application/events/notification-deleted-inboxes.event-handler';

// services
import { NotificationCreateInboxService } from './application/create/notification-create-inbox.service';
import { NotificationCreateInboxesService } from './application/create/notification-create-inboxes.service';
import { NotificationPaginateInboxesService } from './application/paginate/notification-paginate-inboxes.service';
import { NotificationGetInboxesService } from './application/get/notification-get-inboxes.service';
import { NotificationFindInboxService } from './application/find/notification-find-inbox.service';
import { NotificationFindInboxByIdService } from './application/find/notification-find-inbox-by-id.service';
import { NotificationRawSQLInboxesService } from './application/raw-sql/notification-raw-sql-inboxes.service';
import { NotificationCountInboxService } from './application/count/notification-count-inbox.service';
import { NotificationMaxInboxService } from './application/max/notification-max-inbox.service';
import { NotificationMinInboxService } from './application/min/notification-min-inbox.service';
import { NotificationSumInboxService } from './application/sum/notification-sum-inbox.service';
import { NotificationUpdateInboxByIdService } from './application/update/notification-update-inbox-by-id.service';
import { NotificationUpdateInboxesService } from './application/update/notification-update-inboxes.service';
import { NotificationUpdateAndIncrementInboxesService } from './application/update/notification-update-and-increment-inboxes.service';
import { NotificationUpsertInboxService } from './application/upsert/notification-upsert-inbox.service';
import { NotificationDeleteInboxByIdService } from './application/delete/notification-delete-inbox-by-id.service';
import { NotificationDeleteInboxesService } from './application/delete/notification-delete-inboxes.service';

export const NotificationInboxHandlers = [
    // commands
    NotificationCreateInboxCommandHandler,
    NotificationCreateInboxesCommandHandler,
    NotificationUpdateInboxByIdCommandHandler,
    NotificationUpdateInboxesCommandHandler,
    NotificationUpdateAndIncrementInboxesCommandHandler,
    NotificationUpsertInboxCommandHandler,
    NotificationDeleteInboxByIdCommandHandler,
    NotificationDeleteInboxesCommandHandler,

    // queries
    NotificationPaginateInboxesQueryHandler,
    NotificationGetInboxesQueryHandler,
    NotificationFindInboxQueryHandler,
    NotificationFindInboxByIdQueryHandler,
    NotificationRawSQLInboxesQueryHandler,
    NotificationCountInboxQueryHandler,
    NotificationMaxInboxQueryHandler,
    NotificationMinInboxQueryHandler,
    NotificationSumInboxQueryHandler,

    // events
    NotificationCreatedInboxEventHandler,
    NotificationCreatedInboxesEventHandler,
    NotificationUpdatedInboxEventHandler,
    NotificationUpdatedInboxesEventHandler,
    NotificationUpdatedAndIncrementedInboxesEventHandler,
    NotificationDeletedInboxEventHandler,
    NotificationDeletedInboxesEventHandler,
];

export const NotificationInboxServices = [
    NotificationCreateInboxService,
    NotificationCreateInboxesService,
    NotificationPaginateInboxesService,
    NotificationGetInboxesService,
    NotificationFindInboxService,
    NotificationFindInboxByIdService,
    NotificationRawSQLInboxesService,
    NotificationMaxInboxService,
    NotificationCountInboxService,
    NotificationMinInboxService,
    NotificationSumInboxService,
    NotificationUpdateInboxByIdService,
    NotificationUpdateInboxesService,
    NotificationUpdateAndIncrementInboxesService,
    NotificationUpsertInboxService,
    NotificationDeleteInboxByIdService,
    NotificationDeleteInboxesService,
];