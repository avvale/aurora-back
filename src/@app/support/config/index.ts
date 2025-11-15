// export commands
export { SupportCreateConfigCommand } from './application/create/support-create-config.command';
export { SupportDeleteConfigByIdCommand } from './application/delete/support-delete-config-by-id.command';
export { SupportUpdateConfigByIdCommand } from './application/update/support-update-config-by-id.command';

// export queries
export { SupportFindConfigByIdQuery } from './application/find/support-find-config-by-id.query';
export { SupportFindConfigQuery } from './application/find/support-find-config.query';
export { SupportGetConfigsQuery } from './application/get/support-get-configs.query';
export { SupportPaginateConfigsQuery } from './application/paginate/support-paginate-configs.query';

// export mocks
export { supportMockConfigData } from './infrastructure/mock/support-mock-config.data';
export { SupportMockConfigRepository } from './infrastructure/mock/support-mock-config.repository';
export { SupportMockConfigSeeder } from './infrastructure/mock/support-mock-config.seeder';

// export events
export { SupportAddConfigsContextEvent } from './application/events/support-add-configs-context.event';
export { SupportCreatedConfigEvent } from './application/events/support-created-config.event';
export { SupportCreatedConfigsEvent } from './application/events/support-created-configs.event';
export { SupportDeletedConfigEvent } from './application/events/support-deleted-config.event';
export { SupportUpdatedConfigEvent } from './application/events/support-updated-config.event';

// export command handlers
// can not export application command handlers, because Nest can't resolve dependencies

// export command services
// can not export application services, because Nest can't resolve dependencies

// domain
export { SupportConfig } from './domain/support-config.aggregate';
export { SupportConfigMapper } from './domain/support-config.mapper';
export { SupportIConfigRepository } from './domain/support-config.repository';
export { SupportConfigResponse } from './domain/support-config.response';

// infrastructure
export { SupportConfigModel } from './infrastructure/sequelize/support-sequelize-config.model';
export { SupportSequelizeConfigRepository } from './infrastructure/sequelize/support-sequelize-config.repository';

// sagas
export { SupportConfigSagas } from './application/sagas/support-config.sagas';

// command handlers
import { SupportCreateConfigCommandHandler } from './application/create/support-create-config.command-handler';
import { SupportDeleteConfigByIdCommandHandler } from './application/delete/support-delete-config-by-id.command-handler';
import { SupportUpdateConfigByIdCommandHandler } from './application/update/support-update-config-by-id.command-handler';

// query handlers
import { SupportFindConfigByIdQueryHandler } from './application/find/support-find-config-by-id.query-handler';
import { SupportFindConfigQueryHandler } from './application/find/support-find-config.query-handler';
import { SupportGetConfigsQueryHandler } from './application/get/support-get-configs.query-handler';
import { SupportPaginateConfigsQueryHandler } from './application/paginate/support-paginate-configs.query-handler';

// event handlers
import { SupportCreatedConfigEventHandler } from './application/events/support-created-config.event-handler';
import { SupportCreatedConfigsEventHandler } from './application/events/support-created-configs.event-handler';
import { SupportDeletedConfigEventHandler } from './application/events/support-deleted-config.event-handler';
import { SupportUpdatedConfigEventHandler } from './application/events/support-updated-config.event-handler';

// services
import { SupportCreateConfigService } from './application/create/support-create-config.service';
import { SupportDeleteConfigByIdService } from './application/delete/support-delete-config-by-id.service';
import { SupportFindConfigByIdService } from './application/find/support-find-config-by-id.service';
import { SupportFindConfigService } from './application/find/support-find-config.service';
import { SupportGetConfigsService } from './application/get/support-get-configs.service';
import { SupportPaginateConfigsService } from './application/paginate/support-paginate-configs.service';
import { SupportUpdateConfigByIdService } from './application/update/support-update-config-by-id.service';

export const SupportConfigHandlers = [
    // commands
    SupportCreateConfigCommandHandler,
    SupportUpdateConfigByIdCommandHandler,
    SupportDeleteConfigByIdCommandHandler,

    // queries
    SupportPaginateConfigsQueryHandler,
    SupportGetConfigsQueryHandler,
    SupportFindConfigQueryHandler,
    SupportFindConfigByIdQueryHandler,

    // events
    SupportCreatedConfigEventHandler,
    SupportCreatedConfigsEventHandler,
    SupportUpdatedConfigEventHandler,
    SupportDeletedConfigEventHandler,
];

export const SupportConfigServices = [
    SupportCreateConfigService,
    SupportPaginateConfigsService,
    SupportGetConfigsService,
    SupportFindConfigService,
    SupportFindConfigByIdService,
    SupportUpdateConfigByIdService,
    SupportDeleteConfigByIdService,
];
