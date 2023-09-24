// export commands
export { CommonCreateAttachmentFamilyResourceCommand } from './application/create/common-create-attachment-family-resource.command';
export { CommonCreateAttachmentFamiliesResourcesCommand } from './application/create/common-create-attachment-families-resources.command';
export { CommonUpdateAttachmentFamilyResourceByIdCommand } from './application/update/common-update-attachment-family-resource-by-id.command';
export { CommonUpdateAttachmentFamiliesResourcesCommand } from './application/update/common-update-attachment-families-resources.command';
export { CommonUpsertAttachmentFamilyResourceCommand } from './application/upsert/common-upsert-attachment-family-resource.command';
export { CommonDeleteAttachmentFamilyResourceByIdCommand } from './application/delete/common-delete-attachment-family-resource-by-id.command';
export { CommonDeleteAttachmentFamiliesResourcesCommand } from './application/delete/common-delete-attachment-families-resources.command';

// export queries
export { CommonPaginateAttachmentFamiliesResourcesQuery } from './application/paginate/common-paginate-attachment-families-resources.query';
export { CommonGetAttachmentFamiliesResourcesQuery } from './application/get/common-get-attachment-families-resources.query';
export { CommonFindAttachmentFamilyResourceQuery } from './application/find/common-find-attachment-family-resource.query';
export { CommonFindAttachmentFamilyResourceByIdQuery } from './application/find/common-find-attachment-family-resource-by-id.query';
export { CommonRawSQLAttachmentFamiliesResourcesQuery } from './application/raw-sql/common-raw-sql-attachment-families-resources.query';

// export mocks
export { commonMockAttachmentFamilyResourceData } from './infrastructure/mock/common-mock-attachment-family-resource.data';
export { CommonMockAttachmentFamilyResourceSeeder } from './infrastructure/mock/common-mock-attachment-family-resource.seeder';
export { CommonMockAttachmentFamilyResourceRepository } from './infrastructure/mock/common-mock-attachment-family-resource.repository';

// export events
export { CommonAddAttachmentFamiliesResourcesContextEvent } from './application/events/common-add-attachment-families-resources-context.event';
export { CommonCreatedAttachmentFamiliesResourcesEvent } from './application/events/common-created-attachment-families-resources.event';
export { CommonCreatedAttachmentFamilyResourceEvent } from './application/events/common-created-attachment-family-resource.event';
export { CommonDeletedAttachmentFamiliesResourcesEvent } from './application/events/common-deleted-attachment-families-resources.event';
export { CommonDeletedAttachmentFamilyResourceEvent } from './application/events/common-deleted-attachment-family-resource.event';
export { CommonUpdatedAttachmentFamiliesResourcesEvent } from './application/events/common-updated-attachment-families-resources.event';
export { CommonUpdatedAttachmentFamilyResourceEvent } from './application/events/common-updated-attachment-family-resource.event';

// export command handlers
// can not export application command handlers, because Nest can't resolve dependencies

// export command services
// can not export application services, because Nest can't resolve dependencies

// domain
export { CommonAttachmentFamilyResource } from './domain/common-attachment-family-resource.aggregate';
export { CommonAttachmentFamilyResourceMapper } from './domain/common-attachment-family-resource.mapper';
export { CommonIAttachmentFamilyResourceRepository } from './domain/common-attachment-family-resource.repository';
export { CommonAttachmentFamilyResourceResponse } from './domain/common-attachment-family-resource.response';

// infrastructure
export { CommonAttachmentFamilyResourceModel } from './infrastructure/sequelize/common-sequelize-attachment-family-resource.model';
export { CommonSequelizeAttachmentFamilyResourceRepository } from './infrastructure/sequelize/common-sequelize-attachment-family-resource.repository';

// sagas
export { CommonAttachmentFamilyResourceSagas } from './application/sagas/common-attachment-family-resource.sagas';

// command handlers
import { CommonCreateAttachmentFamilyResourceCommandHandler } from './application/create/common-create-attachment-family-resource.command-handler';
import { CommonCreateAttachmentFamiliesResourcesCommandHandler } from './application/create/common-create-attachment-families-resources.command-handler';
import { CommonUpdateAttachmentFamilyResourceByIdCommandHandler } from './application/update/common-update-attachment-family-resource-by-id.command-handler';
import { CommonUpdateAttachmentFamiliesResourcesCommandHandler } from './application/update/common-update-attachment-families-resources.command-handler';
import { CommonUpsertAttachmentFamilyResourceCommandHandler } from './application/upsert/common-upsert-attachment-family-resource.command-handler';
import { CommonDeleteAttachmentFamilyResourceByIdCommandHandler } from './application/delete/common-delete-attachment-family-resource-by-id.command-handler';
import { CommonDeleteAttachmentFamiliesResourcesCommandHandler } from './application/delete/common-delete-attachment-families-resources.command-handler';

// query handlers
import { CommonPaginateAttachmentFamiliesResourcesQueryHandler } from './application/paginate/common-paginate-attachment-families-resources.query-handler';
import { CommonGetAttachmentFamiliesResourcesQueryHandler } from './application/get/common-get-attachment-families-resources.query-handler';
import { CommonFindAttachmentFamilyResourceQueryHandler } from './application/find/common-find-attachment-family-resource.query-handler';
import { CommonFindAttachmentFamilyResourceByIdQueryHandler } from './application/find/common-find-attachment-family-resource-by-id.query-handler';
import { CommonRawSQLAttachmentFamiliesResourcesQueryHandler } from './application/raw-sql/common-raw-sql-attachment-families-resources.query-handler';

// event handlers
import { CommonCreatedAttachmentFamilyResourceEventHandler } from './application/events/common-created-attachment-family-resource.event-handler';
import { CommonCreatedAttachmentFamiliesResourcesEventHandler } from './application/events/common-created-attachment-families-resources.event-handler';
import { CommonUpdatedAttachmentFamilyResourceEventHandler } from './application/events/common-updated-attachment-family-resource.event-handler';
import { CommonUpdatedAttachmentFamiliesResourcesEventHandler } from './application/events/common-updated-attachment-families-resources.event-handler';
import { CommonDeletedAttachmentFamilyResourceEventHandler } from './application/events/common-deleted-attachment-family-resource.event-handler';
import { CommonDeletedAttachmentFamiliesResourcesEventHandler } from './application/events/common-deleted-attachment-families-resources.event-handler';

// services
import { CommonCreateAttachmentFamilyResourceService } from './application/create/common-create-attachment-family-resource.service';
import { CommonCreateAttachmentFamiliesResourcesService } from './application/create/common-create-attachment-families-resources.service';
import { CommonPaginateAttachmentFamiliesResourcesService } from './application/paginate/common-paginate-attachment-families-resources.service';
import { CommonGetAttachmentFamiliesResourcesService } from './application/get/common-get-attachment-families-resources.service';
import { CommonFindAttachmentFamilyResourceService } from './application/find/common-find-attachment-family-resource.service';
import { CommonFindAttachmentFamilyResourceByIdService } from './application/find/common-find-attachment-family-resource-by-id.service';
import { CommonRawSQLAttachmentFamiliesResourcesService } from './application/raw-sql/common-raw-sql-attachment-families-resources.service';
import { CommonUpdateAttachmentFamilyResourceByIdService } from './application/update/common-update-attachment-family-resource-by-id.service';
import { CommonUpdateAttachmentFamiliesResourcesService } from './application/update/common-update-attachment-families-resources.service';
import { CommonUpsertAttachmentFamilyResourceService } from './application/upsert/common-upsert-attachment-family-resource.service';
import { CommonDeleteAttachmentFamilyResourceByIdService } from './application/delete/common-delete-attachment-family-resource-by-id.service';
import { CommonDeleteAttachmentFamiliesResourcesService } from './application/delete/common-delete-attachment-families-resources.service';

export const CommonAttachmentFamilyResourceHandlers = [
    // commands
    CommonCreateAttachmentFamilyResourceCommandHandler,
    CommonCreateAttachmentFamiliesResourcesCommandHandler,
    CommonUpdateAttachmentFamilyResourceByIdCommandHandler,
    CommonUpdateAttachmentFamiliesResourcesCommandHandler,
    CommonUpsertAttachmentFamilyResourceCommandHandler,
    CommonDeleteAttachmentFamilyResourceByIdCommandHandler,
    CommonDeleteAttachmentFamiliesResourcesCommandHandler,

    // queries
    CommonPaginateAttachmentFamiliesResourcesQueryHandler,
    CommonGetAttachmentFamiliesResourcesQueryHandler,
    CommonFindAttachmentFamilyResourceQueryHandler,
    CommonFindAttachmentFamilyResourceByIdQueryHandler,
    CommonRawSQLAttachmentFamiliesResourcesQueryHandler,

    // events
    CommonCreatedAttachmentFamilyResourceEventHandler,
    CommonCreatedAttachmentFamiliesResourcesEventHandler,
    CommonUpdatedAttachmentFamilyResourceEventHandler,
    CommonUpdatedAttachmentFamiliesResourcesEventHandler,
    CommonDeletedAttachmentFamilyResourceEventHandler,
    CommonDeletedAttachmentFamiliesResourcesEventHandler,
];

export const CommonAttachmentFamilyResourceServices = [
    CommonCreateAttachmentFamilyResourceService,
    CommonCreateAttachmentFamiliesResourcesService,
    CommonPaginateAttachmentFamiliesResourcesService,
    CommonGetAttachmentFamiliesResourcesService,
    CommonFindAttachmentFamilyResourceService,
    CommonFindAttachmentFamilyResourceByIdService,
    CommonRawSQLAttachmentFamiliesResourcesService,
    CommonUpdateAttachmentFamilyResourceByIdService,
    CommonUpdateAttachmentFamiliesResourcesService,
    CommonUpsertAttachmentFamilyResourceService,
    CommonDeleteAttachmentFamilyResourceByIdService,
    CommonDeleteAttachmentFamiliesResourcesService,
];