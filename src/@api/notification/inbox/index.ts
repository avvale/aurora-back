// export DTOs
export { NotificationInboxDto } from './dto/notification-inbox.dto';
export { NotificationCreateInboxDto } from './dto/notification-create-inbox.dto';
export { NotificationUpdateInboxByIdDto } from './dto/notification-update-inbox-by-id.dto';
export { NotificationUpdateInboxesDto } from './dto/notification-update-inboxes.dto';

// export handlers
export { NotificationCreateInboxHandler } from './handlers/notification-create-inbox.handler';
export { NotificationCreateInboxesHandler } from './handlers/notification-create-inboxes.handler';
export { NotificationPaginateInboxesHandler } from './handlers/notification-paginate-inboxes.handler';
export { NotificationGetInboxesHandler } from './handlers/notification-get-inboxes.handler';
export { NotificationFindInboxByIdHandler } from './handlers/notification-find-inbox-by-id.handler';
export { NotificationFindInboxHandler } from './handlers/notification-find-inbox.handler';
export { NotificationUpdateInboxByIdHandler } from './handlers/notification-update-inbox-by-id.handler';
export { NotificationUpdateInboxesHandler } from './handlers/notification-update-inboxes.handler';
export { NotificationUpsertInboxHandler } from './handlers/notification-upsert-inbox.handler';
export { NotificationDeleteInboxByIdHandler } from './handlers/notification-delete-inbox-by-id.handler';
export { NotificationDeleteInboxesHandler } from './handlers/notification-delete-inboxes.handler';

// export controllers
export { NotificationCreateInboxController } from './controllers/notification-create-inbox.controller';
export { NotificationCreateInboxesController } from './controllers/notification-create-inboxes.controller';
export { NotificationPaginateInboxesController } from './controllers/notification-paginate-inboxes.controller';
export { NotificationGetInboxesController } from './controllers/notification-get-inboxes.controller';
export { NotificationFindInboxByIdController } from './controllers/notification-find-inbox-by-id.controller';
export { NotificationFindInboxController } from './controllers/notification-find-inbox.controller';
export { NotificationUpdateInboxByIdController } from './controllers/notification-update-inbox-by-id.controller';
export { NotificationUpdateInboxesController } from './controllers/notification-update-inboxes.controller';
export { NotificationUpsertInboxController } from './controllers/notification-upsert-inbox.controller';
export { NotificationDeleteInboxByIdController } from './controllers/notification-delete-inbox-by-id.controller';
export { NotificationDeleteInboxesController } from './controllers/notification-delete-inboxes.controller';

// export resolvers
export { NotificationCreateInboxResolver } from './resolvers/notification-create-inbox.resolver';
export { NotificationCreateInboxesResolver } from './resolvers/notification-create-inboxes.resolver';
export { NotificationPaginateInboxesResolver } from './resolvers/notification-paginate-inboxes.resolver';
export { NotificationGetInboxesResolver } from './resolvers/notification-get-inboxes.resolver';
export { NotificationFindInboxByIdResolver } from './resolvers/notification-find-inbox-by-id.resolver';
export { NotificationFindInboxResolver } from './resolvers/notification-find-inbox.resolver';
export { NotificationUpdateInboxByIdResolver } from './resolvers/notification-update-inbox-by-id.resolver';
export { NotificationUpdateInboxesResolver } from './resolvers/notification-update-inboxes.resolver';
export { NotificationUpsertInboxResolver } from './resolvers/notification-upsert-inbox.resolver';
export { NotificationDeleteInboxByIdResolver } from './resolvers/notification-delete-inbox-by-id.resolver';
export { NotificationDeleteInboxesResolver } from './resolvers/notification-delete-inboxes.resolver';

// export additionalApis
export { NotificationCheckNotificationsInboxController } from './controllers/notification-check-notifications-inbox.controller';
export { NotificationCheckNotificationsInboxHandler } from './handlers/notification-check-notifications-inbox.handler';
export { NotificationCheckNotificationsInboxResolver } from './resolvers/notification-check-notifications-inbox.resolver';

// import controllers
import { NotificationCreateInboxController } from './controllers/notification-create-inbox.controller';
import { NotificationCreateInboxesController } from './controllers/notification-create-inboxes.controller';
import { NotificationPaginateInboxesController } from './controllers/notification-paginate-inboxes.controller';
import { NotificationGetInboxesController } from './controllers/notification-get-inboxes.controller';
import { NotificationFindInboxByIdController } from './controllers/notification-find-inbox-by-id.controller';
import { NotificationFindInboxController } from './controllers/notification-find-inbox.controller';
import { NotificationUpdateInboxByIdController } from './controllers/notification-update-inbox-by-id.controller';
import { NotificationUpdateInboxesController } from './controllers/notification-update-inboxes.controller';
import { NotificationUpsertInboxController } from './controllers/notification-upsert-inbox.controller';
import { NotificationDeleteInboxByIdController } from './controllers/notification-delete-inbox-by-id.controller';
import { NotificationDeleteInboxesController } from './controllers/notification-delete-inboxes.controller';

// import resolvers
import { NotificationCreateInboxResolver } from './resolvers/notification-create-inbox.resolver';
import { NotificationCreateInboxesResolver } from './resolvers/notification-create-inboxes.resolver';
import { NotificationPaginateInboxesResolver } from './resolvers/notification-paginate-inboxes.resolver';
import { NotificationGetInboxesResolver } from './resolvers/notification-get-inboxes.resolver';
import { NotificationFindInboxByIdResolver } from './resolvers/notification-find-inbox-by-id.resolver';
import { NotificationFindInboxResolver } from './resolvers/notification-find-inbox.resolver';
import { NotificationUpdateInboxByIdResolver } from './resolvers/notification-update-inbox-by-id.resolver';
import { NotificationUpdateInboxesResolver } from './resolvers/notification-update-inboxes.resolver';
import { NotificationUpsertInboxResolver } from './resolvers/notification-upsert-inbox.resolver';
import { NotificationDeleteInboxByIdResolver } from './resolvers/notification-delete-inbox-by-id.resolver';
import { NotificationDeleteInboxesResolver } from './resolvers/notification-delete-inboxes.resolver';

// import handlers
import { NotificationCreateInboxHandler } from './handlers/notification-create-inbox.handler';
import { NotificationCreateInboxesHandler } from './handlers/notification-create-inboxes.handler';
import { NotificationPaginateInboxesHandler } from './handlers/notification-paginate-inboxes.handler';
import { NotificationGetInboxesHandler } from './handlers/notification-get-inboxes.handler';
import { NotificationFindInboxByIdHandler } from './handlers/notification-find-inbox-by-id.handler';
import { NotificationFindInboxHandler } from './handlers/notification-find-inbox.handler';
import { NotificationUpdateInboxByIdHandler } from './handlers/notification-update-inbox-by-id.handler';
import { NotificationUpdateInboxesHandler } from './handlers/notification-update-inboxes.handler';
import { NotificationUpsertInboxHandler } from './handlers/notification-upsert-inbox.handler';
import { NotificationDeleteInboxByIdHandler } from './handlers/notification-delete-inbox-by-id.handler';
import { NotificationDeleteInboxesHandler } from './handlers/notification-delete-inboxes.handler';

// import seeder
import { NotificationInboxSeeder } from './seeder/notification-inbox.seeder';

// import additionalApis
import { NotificationCheckNotificationsInboxController } from './controllers/notification-check-notifications-inbox.controller';
import { NotificationCheckNotificationsInboxHandler } from './handlers/notification-check-notifications-inbox.handler';
import { NotificationCheckNotificationsInboxResolver } from './resolvers/notification-check-notifications-inbox.resolver';

export const NotificationInboxApiControllers = [
    NotificationCreateInboxController,
    NotificationCreateInboxesController,
    NotificationPaginateInboxesController,
    NotificationGetInboxesController,
    NotificationFindInboxByIdController,
    NotificationFindInboxController,
    NotificationUpdateInboxByIdController,
    NotificationUpdateInboxesController,
    NotificationUpsertInboxController,
    NotificationDeleteInboxByIdController,
    NotificationDeleteInboxesController,

    // additionalApis
    NotificationCheckNotificationsInboxController,
];

export const NotificationInboxApiResolvers = [
    NotificationCreateInboxResolver,
    NotificationCreateInboxesResolver,
    NotificationPaginateInboxesResolver,
    NotificationGetInboxesResolver,
    NotificationFindInboxByIdResolver,
    NotificationFindInboxResolver,
    NotificationUpdateInboxByIdResolver,
    NotificationUpdateInboxesResolver,
    NotificationUpsertInboxResolver,
    NotificationDeleteInboxByIdResolver,
    NotificationDeleteInboxesResolver,

    // additionalApis
    NotificationCheckNotificationsInboxResolver,
];

export const NotificationInboxApiHandlers = [
    NotificationCreateInboxHandler,
    NotificationCreateInboxesHandler,
    NotificationPaginateInboxesHandler,
    NotificationGetInboxesHandler,
    NotificationFindInboxByIdHandler,
    NotificationFindInboxHandler,
    NotificationUpdateInboxByIdHandler,
    NotificationUpdateInboxesHandler,
    NotificationUpsertInboxHandler,
    NotificationDeleteInboxByIdHandler,
    NotificationDeleteInboxesHandler,

    // additionalApis
    NotificationCheckNotificationsInboxHandler,
];

export const NotificationInboxApiServices = [
    NotificationInboxSeeder,
];
