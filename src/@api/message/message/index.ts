// export DTOs
export { MessageMessageDto } from './dto/message-message.dto';
export { MessageCreateMessageDto } from './dto/message-create-message.dto';
export { MessageUpdateMessageByIdDto } from './dto/message-update-message-by-id.dto';
export { MessageUpdateMessagesDto } from './dto/message-update-messages.dto';

// export handlers
export { MessageCreateMessageHandler } from './handlers/message-create-message.handler';
export { MessageCreateMessagesHandler } from './handlers/message-create-messages.handler';
export { MessagePaginateMessagesHandler } from './handlers/message-paginate-messages.handler';
export { MessageGetMessagesHandler } from './handlers/message-get-messages.handler';
export { MessageFindMessageByIdHandler } from './handlers/message-find-message-by-id.handler';
export { MessageFindMessageHandler } from './handlers/message-find-message.handler';
export { MessageUpdateMessageByIdHandler } from './handlers/message-update-message-by-id.handler';
export { MessageUpdateMessagesHandler } from './handlers/message-update-messages.handler';
export { MessageUpsertMessageHandler } from './handlers/message-upsert-message.handler';
export { MessageDeleteMessageByIdHandler } from './handlers/message-delete-message-by-id.handler';
export { MessageDeleteMessagesHandler } from './handlers/message-delete-messages.handler';

// export controllers
export { MessageCreateMessageController } from './controllers/message-create-message.controller';
export { MessageCreateMessagesController } from './controllers/message-create-messages.controller';
export { MessagePaginateMessagesController } from './controllers/message-paginate-messages.controller';
export { MessageGetMessagesController } from './controllers/message-get-messages.controller';
export { MessageFindMessageByIdController } from './controllers/message-find-message-by-id.controller';
export { MessageFindMessageController } from './controllers/message-find-message.controller';
export { MessageUpdateMessageByIdController } from './controllers/message-update-message-by-id.controller';
export { MessageUpdateMessagesController } from './controllers/message-update-messages.controller';
export { MessageUpsertMessageController } from './controllers/message-upsert-message.controller';
export { MessageDeleteMessageByIdController } from './controllers/message-delete-message-by-id.controller';
export { MessageDeleteMessagesController } from './controllers/message-delete-messages.controller';

// export resolvers
export { MessageCreateMessageResolver } from './resolvers/message-create-message.resolver';
export { MessageCreateMessagesResolver } from './resolvers/message-create-messages.resolver';
export { MessagePaginateMessagesResolver } from './resolvers/message-paginate-messages.resolver';
export { MessageGetMessagesResolver } from './resolvers/message-get-messages.resolver';
export { MessageFindMessageByIdResolver } from './resolvers/message-find-message-by-id.resolver';
export { MessageFindMessageResolver } from './resolvers/message-find-message.resolver';
export { MessageUpdateMessageByIdResolver } from './resolvers/message-update-message-by-id.resolver';
export { MessageUpdateMessagesResolver } from './resolvers/message-update-messages.resolver';
export { MessageUpsertMessageResolver } from './resolvers/message-upsert-message.resolver';
export { MessageDeleteMessageByIdResolver } from './resolvers/message-delete-message-by-id.resolver';
export { MessageDeleteMessagesResolver } from './resolvers/message-delete-messages.resolver';

// import controllers
import { MessageCreateMessageController } from './controllers/message-create-message.controller';
import { MessageCreateMessagesController } from './controllers/message-create-messages.controller';
import { MessagePaginateMessagesController } from './controllers/message-paginate-messages.controller';
import { MessageGetMessagesController } from './controllers/message-get-messages.controller';
import { MessageFindMessageByIdController } from './controllers/message-find-message-by-id.controller';
import { MessageFindMessageController } from './controllers/message-find-message.controller';
import { MessageUpdateMessageByIdController } from './controllers/message-update-message-by-id.controller';
import { MessageUpdateMessagesController } from './controllers/message-update-messages.controller';
import { MessageUpsertMessageController } from './controllers/message-upsert-message.controller';
import { MessageDeleteMessageByIdController } from './controllers/message-delete-message-by-id.controller';
import { MessageDeleteMessagesController } from './controllers/message-delete-messages.controller';

// import resolvers
import { MessageCreateMessageResolver } from './resolvers/message-create-message.resolver';
import { MessageCreateMessagesResolver } from './resolvers/message-create-messages.resolver';
import { MessagePaginateMessagesResolver } from './resolvers/message-paginate-messages.resolver';
import { MessageGetMessagesResolver } from './resolvers/message-get-messages.resolver';
import { MessageFindMessageByIdResolver } from './resolvers/message-find-message-by-id.resolver';
import { MessageFindMessageResolver } from './resolvers/message-find-message.resolver';
import { MessageUpdateMessageByIdResolver } from './resolvers/message-update-message-by-id.resolver';
import { MessageUpdateMessagesResolver } from './resolvers/message-update-messages.resolver';
import { MessageUpsertMessageResolver } from './resolvers/message-upsert-message.resolver';
import { MessageDeleteMessageByIdResolver } from './resolvers/message-delete-message-by-id.resolver';
import { MessageDeleteMessagesResolver } from './resolvers/message-delete-messages.resolver';

// import handlers
import { MessageCreateMessageHandler } from './handlers/message-create-message.handler';
import { MessageCreateMessagesHandler } from './handlers/message-create-messages.handler';
import { MessagePaginateMessagesHandler } from './handlers/message-paginate-messages.handler';
import { MessageGetMessagesHandler } from './handlers/message-get-messages.handler';
import { MessageFindMessageByIdHandler } from './handlers/message-find-message-by-id.handler';
import { MessageFindMessageHandler } from './handlers/message-find-message.handler';
import { MessageUpdateMessageByIdHandler } from './handlers/message-update-message-by-id.handler';
import { MessageUpdateMessagesHandler } from './handlers/message-update-messages.handler';
import { MessageUpsertMessageHandler } from './handlers/message-upsert-message.handler';
import { MessageDeleteMessageByIdHandler } from './handlers/message-delete-message-by-id.handler';
import { MessageDeleteMessagesHandler } from './handlers/message-delete-messages.handler';

// import seeder
import { MessageMessageSeeder } from './seeder/message-message.seeder';

export const MessageMessageApiControllers = [
    MessageCreateMessageController,
    MessageCreateMessagesController,
    MessagePaginateMessagesController,
    MessageGetMessagesController,
    MessageFindMessageByIdController,
    MessageFindMessageController,
    MessageUpdateMessageByIdController,
    MessageUpdateMessagesController,
    MessageUpsertMessageController,
    MessageDeleteMessageByIdController,
    MessageDeleteMessagesController,
];

export const MessageMessageApiResolvers = [
    MessageCreateMessageResolver,
    MessageCreateMessagesResolver,
    MessagePaginateMessagesResolver,
    MessageGetMessagesResolver,
    MessageFindMessageByIdResolver,
    MessageFindMessageResolver,
    MessageUpdateMessageByIdResolver,
    MessageUpdateMessagesResolver,
    MessageUpsertMessageResolver,
    MessageDeleteMessageByIdResolver,
    MessageDeleteMessagesResolver,
];

export const MessageMessageApiHandlers = [
    MessageCreateMessageHandler,
    MessageCreateMessagesHandler,
    MessagePaginateMessagesHandler,
    MessageGetMessagesHandler,
    MessageFindMessageByIdHandler,
    MessageFindMessageHandler,
    MessageUpdateMessageByIdHandler,
    MessageUpdateMessagesHandler,
    MessageUpsertMessageHandler,
    MessageDeleteMessageByIdHandler,
    MessageDeleteMessagesHandler,
];

export const MessageMessageApiServices = [
    MessageMessageSeeder,
];
