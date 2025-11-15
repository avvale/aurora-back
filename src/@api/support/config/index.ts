// export DTOs
export { SupportConfigDto } from './dto/support-config.dto';
export { SupportCreateConfigDto } from './dto/support-create-config.dto';
export { SupportUpdateConfigByIdDto } from './dto/support-update-config-by-id.dto';
export { SupportUpdateConfigsDto } from './dto/support-update-configs.dto';

// export handlers
export { SupportCreateConfigHandler } from './handlers/support-create-config.handler';
export { SupportDeleteConfigByIdHandler } from './handlers/support-delete-config-by-id.handler';
export { SupportFindConfigByIdHandler } from './handlers/support-find-config-by-id.handler';
export { SupportFindConfigHandler } from './handlers/support-find-config.handler';
export { SupportGetConfigsHandler } from './handlers/support-get-configs.handler';
export { SupportPaginateConfigsHandler } from './handlers/support-paginate-configs.handler';
export { SupportUpdateConfigByIdHandler } from './handlers/support-update-config-by-id.handler';

// export controllers
export { SupportCreateConfigController } from './controllers/support-create-config.controller';
export { SupportDeleteConfigByIdController } from './controllers/support-delete-config-by-id.controller';
export { SupportFindConfigByIdController } from './controllers/support-find-config-by-id.controller';
export { SupportFindConfigController } from './controllers/support-find-config.controller';
export { SupportGetConfigsController } from './controllers/support-get-configs.controller';
export { SupportPaginateConfigsController } from './controllers/support-paginate-configs.controller';
export { SupportUpdateConfigByIdController } from './controllers/support-update-config-by-id.controller';

// export resolvers
export { SupportCreateConfigResolver } from './resolvers/support-create-config.resolver';
export { SupportDeleteConfigByIdResolver } from './resolvers/support-delete-config-by-id.resolver';
export { SupportFindConfigByIdResolver } from './resolvers/support-find-config-by-id.resolver';
export { SupportFindConfigResolver } from './resolvers/support-find-config.resolver';
export { SupportGetConfigsResolver } from './resolvers/support-get-configs.resolver';
export { SupportPaginateConfigsResolver } from './resolvers/support-paginate-configs.resolver';
export { SupportUpdateConfigByIdResolver } from './resolvers/support-update-config-by-id.resolver';

// export additionalApis
export { SupportListConfigController } from './controllers/support-list-config.controller';
export { SupportListConfigHandler } from './handlers/support-list-config.handler';
export { SupportListConfigResolver } from './resolvers/support-list-config.resolver';

// import controllers
import { SupportCreateConfigController } from './controllers/support-create-config.controller';
import { SupportDeleteConfigByIdController } from './controllers/support-delete-config-by-id.controller';
import { SupportFindConfigByIdController } from './controllers/support-find-config-by-id.controller';
import { SupportFindConfigController } from './controllers/support-find-config.controller';
import { SupportGetConfigsController } from './controllers/support-get-configs.controller';
import { SupportPaginateConfigsController } from './controllers/support-paginate-configs.controller';
import { SupportUpdateConfigByIdController } from './controllers/support-update-config-by-id.controller';

// import resolvers
import { SupportCreateConfigResolver } from './resolvers/support-create-config.resolver';
import { SupportDeleteConfigByIdResolver } from './resolvers/support-delete-config-by-id.resolver';
import { SupportFindConfigByIdResolver } from './resolvers/support-find-config-by-id.resolver';
import { SupportFindConfigResolver } from './resolvers/support-find-config.resolver';
import { SupportGetConfigsResolver } from './resolvers/support-get-configs.resolver';
import { SupportPaginateConfigsResolver } from './resolvers/support-paginate-configs.resolver';
import { SupportUpdateConfigByIdResolver } from './resolvers/support-update-config-by-id.resolver';

// import handlers
import { SupportCreateConfigHandler } from './handlers/support-create-config.handler';
import { SupportDeleteConfigByIdHandler } from './handlers/support-delete-config-by-id.handler';
import { SupportFindConfigByIdHandler } from './handlers/support-find-config-by-id.handler';
import { SupportFindConfigHandler } from './handlers/support-find-config.handler';
import { SupportGetConfigsHandler } from './handlers/support-get-configs.handler';
import { SupportPaginateConfigsHandler } from './handlers/support-paginate-configs.handler';
import { SupportUpdateConfigByIdHandler } from './handlers/support-update-config-by-id.handler';

// import seeder
import { SupportConfigSeeder } from './seeder/support-config.seeder';

// import additionalApis
import { SupportListConfigController } from './controllers/support-list-config.controller';
import { SupportListConfigHandler } from './handlers/support-list-config.handler';
import { SupportListConfigResolver } from './resolvers/support-list-config.resolver';

export const SupportConfigApiControllers = [
    SupportCreateConfigController,
    SupportPaginateConfigsController,
    SupportGetConfigsController,
    SupportFindConfigByIdController,
    SupportFindConfigController,
    SupportUpdateConfigByIdController,
    SupportDeleteConfigByIdController,

    // additionalApis
    SupportListConfigController,
];

export const SupportConfigApiResolvers = [
    SupportCreateConfigResolver,
    SupportPaginateConfigsResolver,
    SupportGetConfigsResolver,
    SupportFindConfigByIdResolver,
    SupportFindConfigResolver,
    SupportUpdateConfigByIdResolver,
    SupportDeleteConfigByIdResolver,

    // additionalApis
    SupportListConfigResolver,
];

export const SupportConfigApiHandlers = [
    SupportCreateConfigHandler,
    SupportPaginateConfigsHandler,
    SupportGetConfigsHandler,
    SupportFindConfigByIdHandler,
    SupportFindConfigHandler,
    SupportUpdateConfigByIdHandler,
    SupportDeleteConfigByIdHandler,

    // additionalApis
    SupportListConfigHandler,
];

export const SupportConfigApiServices = [SupportConfigSeeder];
