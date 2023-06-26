// controllers
import { SearchEngineCreateCollectionController } from './controllers/search-engine-create-collection.controller';
import { SearchEngineCreateCollectionsController } from './controllers/search-engine-create-collections.controller';
import { SearchEnginePaginateCollectionsController } from './controllers/search-engine-paginate-collections.controller';
import { SearchEngineGetCollectionsController } from './controllers/search-engine-get-collections.controller';
import { SearchEngineFindCollectionByIdController } from './controllers/search-engine-find-collection-by-id.controller';
import { SearchEngineFindCollectionController } from './controllers/search-engine-find-collection.controller';
import { SearchEngineUpdateCollectionByIdController } from './controllers/search-engine-update-collection-by-id.controller';
import { SearchEngineUpdateCollectionsController } from './controllers/search-engine-update-collections.controller';
import { SearchEngineUpsertCollectionController } from './controllers/search-engine-upsert-collection.controller';
import { SearchEngineDeleteCollectionByIdController } from './controllers/search-engine-delete-collection-by-id.controller';
import { SearchEngineDeleteCollectionsController } from './controllers/search-engine-delete-collections.controller';

// resolvers
import { SearchEngineCreateCollectionResolver } from './resolvers/search-engine-create-collection.resolver';
import { SearchEngineCreateCollectionsResolver } from './resolvers/search-engine-create-collections.resolver';
import { SearchEnginePaginateCollectionsResolver } from './resolvers/search-engine-paginate-collections.resolver';
import { SearchEngineGetCollectionsResolver } from './resolvers/search-engine-get-collections.resolver';
import { SearchEngineFindCollectionByIdResolver } from './resolvers/search-engine-find-collection-by-id.resolver';
import { SearchEngineFindCollectionResolver } from './resolvers/search-engine-find-collection.resolver';
import { SearchEngineUpdateCollectionByIdResolver } from './resolvers/search-engine-update-collection-by-id.resolver';
import { SearchEngineUpdateCollectionsResolver } from './resolvers/search-engine-update-collections.resolver';
import { SearchEngineUpsertCollectionResolver } from './resolvers/search-engine-upsert-collection.resolver';
import { SearchEngineDeleteCollectionByIdResolver } from './resolvers/search-engine-delete-collection-by-id.resolver';
import { SearchEngineDeleteCollectionsResolver } from './resolvers/search-engine-delete-collections.resolver';

// handlers
import { SearchEngineCreateCollectionHandler } from './handlers/search-engine-create-collection.handler';
import { SearchEngineCreateCollectionsHandler } from './handlers/search-engine-create-collections.handler';
import { SearchEnginePaginateCollectionsHandler } from './handlers/search-engine-paginate-collections.handler';
import { SearchEngineGetCollectionsHandler } from './handlers/search-engine-get-collections.handler';
import { SearchEngineFindCollectionByIdHandler } from './handlers/search-engine-find-collection-by-id.handler';
import { SearchEngineFindCollectionHandler } from './handlers/search-engine-find-collection.handler';
import { SearchEngineUpdateCollectionByIdHandler } from './handlers/search-engine-update-collection-by-id.handler';
import { SearchEngineUpdateCollectionsHandler } from './handlers/search-engine-update-collections.handler';
import { SearchEngineUpsertCollectionHandler } from './handlers/search-engine-upsert-collection.handler';
import { SearchEngineDeleteCollectionByIdHandler } from './handlers/search-engine-delete-collection-by-id.handler';
import { SearchEngineDeleteCollectionsHandler } from './handlers/search-engine-delete-collections.handler';

// seeder
import { SearchEngineCollectionSeeder } from './seeder/search-engine-collection.seeder';

export const SearchEngineCollectionControllers = [
    SearchEngineCreateCollectionController,
    SearchEngineCreateCollectionsController,
    SearchEnginePaginateCollectionsController,
    SearchEngineGetCollectionsController,
    SearchEngineFindCollectionByIdController,
    SearchEngineFindCollectionController,
    SearchEngineUpdateCollectionByIdController,
    SearchEngineUpdateCollectionsController,
    SearchEngineUpsertCollectionController,
    SearchEngineDeleteCollectionByIdController,
    SearchEngineDeleteCollectionsController,
];

export const SearchEngineCollectionResolvers = [
    SearchEngineCreateCollectionResolver,
    SearchEngineCreateCollectionsResolver,
    SearchEnginePaginateCollectionsResolver,
    SearchEngineGetCollectionsResolver,
    SearchEngineFindCollectionByIdResolver,
    SearchEngineFindCollectionResolver,
    SearchEngineUpdateCollectionByIdResolver,
    SearchEngineUpdateCollectionsResolver,
    SearchEngineUpsertCollectionResolver,
    SearchEngineDeleteCollectionByIdResolver,
    SearchEngineDeleteCollectionsResolver,
];

export const SearchEngineCollectionApiHandlers = [
    SearchEngineCreateCollectionHandler,
    SearchEngineCreateCollectionsHandler,
    SearchEnginePaginateCollectionsHandler,
    SearchEngineGetCollectionsHandler,
    SearchEngineFindCollectionByIdHandler,
    SearchEngineFindCollectionHandler,
    SearchEngineUpdateCollectionByIdHandler,
    SearchEngineUpdateCollectionsHandler,
    SearchEngineUpsertCollectionHandler,
    SearchEngineDeleteCollectionByIdHandler,
    SearchEngineDeleteCollectionsHandler,
];

export const SearchEngineCollectionServices = [
    SearchEngineCollectionSeeder,
];