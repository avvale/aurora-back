// export DTOs
export { MessageInboxDto } from './dto/message-inbox.dto';
export { MessageCreateInboxDto } from './dto/message-create-inbox.dto';
export { MessageUpdateInboxByIdDto } from './dto/message-update-inbox-by-id.dto';
export { MessageUpdateInboxesDto } from './dto/message-update-inboxes.dto';

// export handlers
export { MessageCreateInboxHandler } from './handlers/message-create-inbox.handler';
export { MessageCreateInboxesHandler } from './handlers/message-create-inboxes.handler';
export { MessagePaginateInboxesHandler } from './handlers/message-paginate-inboxes.handler';
export { MessageGetInboxesHandler } from './handlers/message-get-inboxes.handler';
export { MessageFindInboxByIdHandler } from './handlers/message-find-inbox-by-id.handler';
export { MessageFindInboxHandler } from './handlers/message-find-inbox.handler';
export { MessageUpdateInboxByIdHandler } from './handlers/message-update-inbox-by-id.handler';
export { MessageUpdateInboxesHandler } from './handlers/message-update-inboxes.handler';
export { MessageUpsertInboxHandler } from './handlers/message-upsert-inbox.handler';
export { MessageDeleteInboxByIdHandler } from './handlers/message-delete-inbox-by-id.handler';
export { MessageDeleteInboxesHandler } from './handlers/message-delete-inboxes.handler';

// export controllers
export { MessageCreateInboxController } from './controllers/message-create-inbox.controller';
export { MessageCreateInboxesController } from './controllers/message-create-inboxes.controller';
export { MessagePaginateInboxesController } from './controllers/message-paginate-inboxes.controller';
export { MessageGetInboxesController } from './controllers/message-get-inboxes.controller';
export { MessageFindInboxByIdController } from './controllers/message-find-inbox-by-id.controller';
export { MessageFindInboxController } from './controllers/message-find-inbox.controller';
export { MessageUpdateInboxByIdController } from './controllers/message-update-inbox-by-id.controller';
export { MessageUpdateInboxesController } from './controllers/message-update-inboxes.controller';
export { MessageUpsertInboxController } from './controllers/message-upsert-inbox.controller';
export { MessageDeleteInboxByIdController } from './controllers/message-delete-inbox-by-id.controller';
export { MessageDeleteInboxesController } from './controllers/message-delete-inboxes.controller';

// export resolvers
export { MessageCreateInboxResolver } from './resolvers/message-create-inbox.resolver';
export { MessageCreateInboxesResolver } from './resolvers/message-create-inboxes.resolver';
export { MessagePaginateInboxesResolver } from './resolvers/message-paginate-inboxes.resolver';
export { MessageGetInboxesResolver } from './resolvers/message-get-inboxes.resolver';
export { MessageFindInboxByIdResolver } from './resolvers/message-find-inbox-by-id.resolver';
export { MessageFindInboxResolver } from './resolvers/message-find-inbox.resolver';
export { MessageUpdateInboxByIdResolver } from './resolvers/message-update-inbox-by-id.resolver';
export { MessageUpdateInboxesResolver } from './resolvers/message-update-inboxes.resolver';
export { MessageUpsertInboxResolver } from './resolvers/message-upsert-inbox.resolver';
export { MessageDeleteInboxByIdResolver } from './resolvers/message-delete-inbox-by-id.resolver';
export { MessageDeleteInboxesResolver } from './resolvers/message-delete-inboxes.resolver';

// export additionalApis
export { MessageCheckMessagesInboxController } from './controllers/message-check-messages-inbox.controller';
export { MessageCheckMessagesInboxHandler } from './handlers/message-check-messages-inbox.handler';
export { MessageCheckMessagesInboxResolver } from './resolvers/message-check-messages-inbox.resolver';

// import controllers
import { MessageCreateInboxController } from './controllers/message-create-inbox.controller';
import { MessageCreateInboxesController } from './controllers/message-create-inboxes.controller';
import { MessagePaginateInboxesController } from './controllers/message-paginate-inboxes.controller';
import { MessageGetInboxesController } from './controllers/message-get-inboxes.controller';
import { MessageFindInboxByIdController } from './controllers/message-find-inbox-by-id.controller';
import { MessageFindInboxController } from './controllers/message-find-inbox.controller';
import { MessageUpdateInboxByIdController } from './controllers/message-update-inbox-by-id.controller';
import { MessageUpdateInboxesController } from './controllers/message-update-inboxes.controller';
import { MessageUpsertInboxController } from './controllers/message-upsert-inbox.controller';
import { MessageDeleteInboxByIdController } from './controllers/message-delete-inbox-by-id.controller';
import { MessageDeleteInboxesController } from './controllers/message-delete-inboxes.controller';

// import resolvers
import { MessageCreateInboxResolver } from './resolvers/message-create-inbox.resolver';
import { MessageCreateInboxesResolver } from './resolvers/message-create-inboxes.resolver';
import { MessagePaginateInboxesResolver } from './resolvers/message-paginate-inboxes.resolver';
import { MessageGetInboxesResolver } from './resolvers/message-get-inboxes.resolver';
import { MessageFindInboxByIdResolver } from './resolvers/message-find-inbox-by-id.resolver';
import { MessageFindInboxResolver } from './resolvers/message-find-inbox.resolver';
import { MessageUpdateInboxByIdResolver } from './resolvers/message-update-inbox-by-id.resolver';
import { MessageUpdateInboxesResolver } from './resolvers/message-update-inboxes.resolver';
import { MessageUpsertInboxResolver } from './resolvers/message-upsert-inbox.resolver';
import { MessageDeleteInboxByIdResolver } from './resolvers/message-delete-inbox-by-id.resolver';
import { MessageDeleteInboxesResolver } from './resolvers/message-delete-inboxes.resolver';

// import handlers
import { MessageCreateInboxHandler } from './handlers/message-create-inbox.handler';
import { MessageCreateInboxesHandler } from './handlers/message-create-inboxes.handler';
import { MessagePaginateInboxesHandler } from './handlers/message-paginate-inboxes.handler';
import { MessageGetInboxesHandler } from './handlers/message-get-inboxes.handler';
import { MessageFindInboxByIdHandler } from './handlers/message-find-inbox-by-id.handler';
import { MessageFindInboxHandler } from './handlers/message-find-inbox.handler';
import { MessageUpdateInboxByIdHandler } from './handlers/message-update-inbox-by-id.handler';
import { MessageUpdateInboxesHandler } from './handlers/message-update-inboxes.handler';
import { MessageUpsertInboxHandler } from './handlers/message-upsert-inbox.handler';
import { MessageDeleteInboxByIdHandler } from './handlers/message-delete-inbox-by-id.handler';
import { MessageDeleteInboxesHandler } from './handlers/message-delete-inboxes.handler';

// import seeder
import { MessageInboxSeeder } from './seeder/message-inbox.seeder';

// import additionalApis
import { MessageCheckMessagesInboxController } from './controllers/message-check-messages-inbox.controller';
import { MessageCheckMessagesInboxHandler } from './handlers/message-check-messages-inbox.handler';
import { MessageCheckMessagesInboxResolver } from './resolvers/message-check-messages-inbox.resolver';

export const MessageInboxApiControllers = [
    MessageCreateInboxController,
    MessageCreateInboxesController,
    MessagePaginateInboxesController,
    MessageGetInboxesController,
    MessageFindInboxByIdController,
    MessageFindInboxController,
    MessageUpdateInboxByIdController,
    MessageUpdateInboxesController,
    MessageUpsertInboxController,
    MessageDeleteInboxByIdController,
    MessageDeleteInboxesController,

    // additionalApis
    MessageCheckMessagesInboxController,
];

export const MessageInboxApiResolvers = [
    MessageCreateInboxResolver,
    MessageCreateInboxesResolver,
    MessagePaginateInboxesResolver,
    MessageGetInboxesResolver,
    MessageFindInboxByIdResolver,
    MessageFindInboxResolver,
    MessageUpdateInboxByIdResolver,
    MessageUpdateInboxesResolver,
    MessageUpsertInboxResolver,
    MessageDeleteInboxByIdResolver,
    MessageDeleteInboxesResolver,

    // additionalApis
    MessageCheckMessagesInboxResolver,
];

export const MessageInboxApiHandlers = [
    MessageCreateInboxHandler,
    MessageCreateInboxesHandler,
    MessagePaginateInboxesHandler,
    MessageGetInboxesHandler,
    MessageFindInboxByIdHandler,
    MessageFindInboxHandler,
    MessageUpdateInboxByIdHandler,
    MessageUpdateInboxesHandler,
    MessageUpsertInboxHandler,
    MessageDeleteInboxByIdHandler,
    MessageDeleteInboxesHandler,

    // additionalApis
    MessageCheckMessagesInboxHandler,
];

export const MessageInboxApiServices = [
    MessageInboxSeeder,
];
