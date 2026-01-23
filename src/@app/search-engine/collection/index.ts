// export commands
export { SearchEngineCreateCollectionCommand } from './application/create/search-engine-create-collection.command';
export { SearchEngineCreateCollectionsCommand } from './application/create/search-engine-create-collections.command';
export { SearchEngineDeleteCollectionByIdCommand } from './application/delete/search-engine-delete-collection-by-id.command';
export { SearchEngineDeleteCollectionsCommand } from './application/delete/search-engine-delete-collections.command';
export { SearchEngineUpdateCollectionByIdCommand } from './application/update/search-engine-update-collection-by-id.command';
export { SearchEngineUpdateCollectionsCommand } from './application/update/search-engine-update-collections.command';
export { SearchEngineUpsertCollectionCommand } from './application/upsert/search-engine-upsert-collection.command';

// export queries
export { SearchEngineFindCollectionByIdQuery } from './application/find/search-engine-find-collection-by-id.query';
export { SearchEngineFindCollectionQuery } from './application/find/search-engine-find-collection.query';
export { SearchEngineGetCollectionsQuery } from './application/get/search-engine-get-collections.query';
export { SearchEnginePaginateCollectionsQuery } from './application/paginate/search-engine-paginate-collections.query';
export { SearchEngineRawSQLCollectionsQuery } from './application/raw-sql/search-engine-raw-sql-collections.query';

// export mocks
export { searchEngineMockCollectionData } from './infrastructure/mock/search-engine-mock-collection.data';
export { SearchEngineMockCollectionRepository } from './infrastructure/mock/search-engine-mock-collection.repository';
export { SearchEngineMockCollectionSeeder } from './infrastructure/mock/search-engine-mock-collection.seeder';

// export events
export { SearchEngineAddCollectionsContextEvent } from './application/events/search-engine-add-collections-context.event';
export { SearchEngineCreatedCollectionEvent } from './application/events/search-engine-created-collection.event';
export { SearchEngineCreatedCollectionsEvent } from './application/events/search-engine-created-collections.event';
export { SearchEngineDeletedCollectionEvent } from './application/events/search-engine-deleted-collection.event';
export { SearchEngineDeletedCollectionsEvent } from './application/events/search-engine-deleted-collections.event';
export { SearchEngineUpdatedCollectionEvent } from './application/events/search-engine-updated-collection.event';
export { SearchEngineUpdatedCollectionsEvent } from './application/events/search-engine-updated-collections.event';

// export command handlers
// can not export application command handlers, because Nest can't resolve dependencies

// export command services
// can not export application services, because Nest can't resolve dependencies

// domain
export { SearchEngineCollection } from './domain/search-engine-collection.aggregate';
export { SearchEngineCollectionMapper } from './domain/search-engine-collection.mapper';
export { SearchEngineICollectionRepository } from './domain/search-engine-collection.repository';
export { SearchEngineCollectionResponse } from './domain/search-engine-collection.response';

// infrastructure
export { SearchEngineCollectionModel } from './infrastructure/sequelize/search-engine-sequelize-collection.model';
export { SearchEngineSequelizeCollectionRepository } from './infrastructure/sequelize/search-engine-sequelize-collection.repository';

// sagas
export { SearchEngineCollectionSagas } from './application/sagas/search-engine-collection.sagas';

// command handlers
import { SearchEngineCreateCollectionCommandHandler } from './application/create/search-engine-create-collection.command-handler';
import { SearchEngineCreateCollectionsCommandHandler } from './application/create/search-engine-create-collections.command-handler';
import { SearchEngineDeleteCollectionByIdCommandHandler } from './application/delete/search-engine-delete-collection-by-id.command-handler';
import { SearchEngineDeleteCollectionsCommandHandler } from './application/delete/search-engine-delete-collections.command-handler';
import { SearchEngineUpdateCollectionByIdCommandHandler } from './application/update/search-engine-update-collection-by-id.command-handler';
import { SearchEngineUpdateCollectionsCommandHandler } from './application/update/search-engine-update-collections.command-handler';
import { SearchEngineUpsertCollectionCommandHandler } from './application/upsert/search-engine-upsert-collection.command-handler';

// query handlers
import { SearchEngineFindCollectionByIdQueryHandler } from './application/find/search-engine-find-collection-by-id.query-handler';
import { SearchEngineFindCollectionQueryHandler } from './application/find/search-engine-find-collection.query-handler';
import { SearchEngineGetCollectionsQueryHandler } from './application/get/search-engine-get-collections.query-handler';
import { SearchEnginePaginateCollectionsQueryHandler } from './application/paginate/search-engine-paginate-collections.query-handler';
import { SearchEngineRawSQLCollectionsQueryHandler } from './application/raw-sql/search-engine-raw-sql-collections.query-handler';

// event handlers
import { SearchEngineCreatedCollectionEventHandler } from './application/events/search-engine-created-collection.event-handler';
import { SearchEngineCreatedCollectionsEventHandler } from './application/events/search-engine-created-collections.event-handler';
import { SearchEngineDeletedCollectionEventHandler } from './application/events/search-engine-deleted-collection.event-handler';
import { SearchEngineDeletedCollectionsEventHandler } from './application/events/search-engine-deleted-collections.event-handler';
import { SearchEngineUpdatedCollectionEventHandler } from './application/events/search-engine-updated-collection.event-handler';
import { SearchEngineUpdatedCollectionsEventHandler } from './application/events/search-engine-updated-collections.event-handler';

// services
import { SearchEngineCreateCollectionService } from './application/create/search-engine-create-collection.service';
import { SearchEngineCreateCollectionsService } from './application/create/search-engine-create-collections.service';
import { SearchEngineDeleteCollectionByIdService } from './application/delete/search-engine-delete-collection-by-id.service';
import { SearchEngineDeleteCollectionsService } from './application/delete/search-engine-delete-collections.service';
import { SearchEngineFindCollectionByIdService } from './application/find/search-engine-find-collection-by-id.service';
import { SearchEngineFindCollectionService } from './application/find/search-engine-find-collection.service';
import { SearchEngineGetCollectionsService } from './application/get/search-engine-get-collections.service';
import { SearchEnginePaginateCollectionsService } from './application/paginate/search-engine-paginate-collections.service';
import { SearchEngineRawSQLCollectionsService } from './application/raw-sql/search-engine-raw-sql-collections.service';
import { SearchEngineUpdateCollectionByIdService } from './application/update/search-engine-update-collection-by-id.service';
import { SearchEngineUpdateCollectionsService } from './application/update/search-engine-update-collections.service';
import { SearchEngineUpsertCollectionService } from './application/upsert/search-engine-upsert-collection.service';

export const SearchEngineCollectionHandlers = [
  // commands
  SearchEngineCreateCollectionCommandHandler,
  SearchEngineCreateCollectionsCommandHandler,
  SearchEngineUpdateCollectionByIdCommandHandler,
  SearchEngineUpdateCollectionsCommandHandler,
  SearchEngineUpsertCollectionCommandHandler,
  SearchEngineDeleteCollectionByIdCommandHandler,
  SearchEngineDeleteCollectionsCommandHandler,

  // queries
  SearchEnginePaginateCollectionsQueryHandler,
  SearchEngineGetCollectionsQueryHandler,
  SearchEngineFindCollectionQueryHandler,
  SearchEngineFindCollectionByIdQueryHandler,
  SearchEngineRawSQLCollectionsQueryHandler,

  // events
  SearchEngineCreatedCollectionEventHandler,
  SearchEngineCreatedCollectionsEventHandler,
  SearchEngineUpdatedCollectionEventHandler,
  SearchEngineUpdatedCollectionsEventHandler,
  SearchEngineDeletedCollectionEventHandler,
  SearchEngineDeletedCollectionsEventHandler,
];

export const SearchEngineCollectionServices = [
  SearchEngineCreateCollectionService,
  SearchEngineCreateCollectionsService,
  SearchEnginePaginateCollectionsService,
  SearchEngineGetCollectionsService,
  SearchEngineFindCollectionService,
  SearchEngineFindCollectionByIdService,
  SearchEngineRawSQLCollectionsService,
  SearchEngineUpdateCollectionByIdService,
  SearchEngineUpdateCollectionsService,
  SearchEngineUpsertCollectionService,
  SearchEngineDeleteCollectionByIdService,
  SearchEngineDeleteCollectionsService,
];
