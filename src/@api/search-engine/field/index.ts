// controllers
import { SearchEngineCreateFieldController } from './controllers/search-engine-create-field.controller';
import { SearchEngineCreateFieldsController } from './controllers/search-engine-create-fields.controller';
import { SearchEnginePaginateFieldsController } from './controllers/search-engine-paginate-fields.controller';
import { SearchEngineGetFieldsController } from './controllers/search-engine-get-fields.controller';
import { SearchEngineFindFieldByIdController } from './controllers/search-engine-find-field-by-id.controller';
import { SearchEngineFindFieldController } from './controllers/search-engine-find-field.controller';
import { SearchEngineUpdateFieldByIdController } from './controllers/search-engine-update-field-by-id.controller';
import { SearchEngineUpdateFieldsController } from './controllers/search-engine-update-fields.controller';
import { SearchEngineUpsertFieldController } from './controllers/search-engine-upsert-field.controller';
import { SearchEngineDeleteFieldByIdController } from './controllers/search-engine-delete-field-by-id.controller';
import { SearchEngineDeleteFieldsController } from './controllers/search-engine-delete-fields.controller';

// resolvers
import { SearchEngineCreateFieldResolver } from './resolvers/search-engine-create-field.resolver';
import { SearchEngineCreateFieldsResolver } from './resolvers/search-engine-create-fields.resolver';
import { SearchEnginePaginateFieldsResolver } from './resolvers/search-engine-paginate-fields.resolver';
import { SearchEngineGetFieldsResolver } from './resolvers/search-engine-get-fields.resolver';
import { SearchEngineFindFieldByIdResolver } from './resolvers/search-engine-find-field-by-id.resolver';
import { SearchEngineFindFieldResolver } from './resolvers/search-engine-find-field.resolver';
import { SearchEngineUpdateFieldByIdResolver } from './resolvers/search-engine-update-field-by-id.resolver';
import { SearchEngineUpdateFieldsResolver } from './resolvers/search-engine-update-fields.resolver';
import { SearchEngineUpsertFieldResolver } from './resolvers/search-engine-upsert-field.resolver';
import { SearchEngineDeleteFieldByIdResolver } from './resolvers/search-engine-delete-field-by-id.resolver';
import { SearchEngineDeleteFieldsResolver } from './resolvers/search-engine-delete-fields.resolver';

// handlers
import { SearchEngineCreateFieldHandler } from './handlers/search-engine-create-field.handler';
import { SearchEngineCreateFieldsHandler } from './handlers/search-engine-create-fields.handler';
import { SearchEnginePaginateFieldsHandler } from './handlers/search-engine-paginate-fields.handler';
import { SearchEngineGetFieldsHandler } from './handlers/search-engine-get-fields.handler';
import { SearchEngineFindFieldByIdHandler } from './handlers/search-engine-find-field-by-id.handler';
import { SearchEngineFindFieldHandler } from './handlers/search-engine-find-field.handler';
import { SearchEngineUpdateFieldByIdHandler } from './handlers/search-engine-update-field-by-id.handler';
import { SearchEngineUpdateFieldsHandler } from './handlers/search-engine-update-fields.handler';
import { SearchEngineUpsertFieldHandler } from './handlers/search-engine-upsert-field.handler';
import { SearchEngineDeleteFieldByIdHandler } from './handlers/search-engine-delete-field-by-id.handler';
import { SearchEngineDeleteFieldsHandler } from './handlers/search-engine-delete-fields.handler';

// seeder
import { SearchEngineFieldSeeder } from './seeder/search-engine-field.seeder';

export const SearchEngineFieldControllers = [
    SearchEngineCreateFieldController,
    SearchEngineCreateFieldsController,
    SearchEnginePaginateFieldsController,
    SearchEngineGetFieldsController,
    SearchEngineFindFieldByIdController,
    SearchEngineFindFieldController,
    SearchEngineUpdateFieldByIdController,
    SearchEngineUpdateFieldsController,
    SearchEngineUpsertFieldController,
    SearchEngineDeleteFieldByIdController,
    SearchEngineDeleteFieldsController,
];

export const SearchEngineFieldResolvers = [
    SearchEngineCreateFieldResolver,
    SearchEngineCreateFieldsResolver,
    SearchEnginePaginateFieldsResolver,
    SearchEngineGetFieldsResolver,
    SearchEngineFindFieldByIdResolver,
    SearchEngineFindFieldResolver,
    SearchEngineUpdateFieldByIdResolver,
    SearchEngineUpdateFieldsResolver,
    SearchEngineUpsertFieldResolver,
    SearchEngineDeleteFieldByIdResolver,
    SearchEngineDeleteFieldsResolver,
];

export const SearchEngineFieldApiHandlers = [
    SearchEngineCreateFieldHandler,
    SearchEngineCreateFieldsHandler,
    SearchEnginePaginateFieldsHandler,
    SearchEngineGetFieldsHandler,
    SearchEngineFindFieldByIdHandler,
    SearchEngineFindFieldHandler,
    SearchEngineUpdateFieldByIdHandler,
    SearchEngineUpdateFieldsHandler,
    SearchEngineUpsertFieldHandler,
    SearchEngineDeleteFieldByIdHandler,
    SearchEngineDeleteFieldsHandler,
];

export const SearchEngineFieldServices = [
    SearchEngineFieldSeeder,
];