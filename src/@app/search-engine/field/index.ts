// export commands
export { SearchEngineCreateFieldCommand } from './application/create/search-engine-create-field.command';
export { SearchEngineCreateFieldsCommand } from './application/create/search-engine-create-fields.command';
export { SearchEngineUpdateFieldByIdCommand } from './application/update/search-engine-update-field-by-id.command';
export { SearchEngineUpdateFieldsCommand } from './application/update/search-engine-update-fields.command';
export { SearchEngineUpsertFieldCommand } from './application/upsert/search-engine-upsert-field.command';
export { SearchEngineDeleteFieldByIdCommand } from './application/delete/search-engine-delete-field-by-id.command';
export { SearchEngineDeleteFieldsCommand } from './application/delete/search-engine-delete-fields.command';

// export queries
export { SearchEnginePaginateFieldsQuery } from './application/paginate/search-engine-paginate-fields.query';
export { SearchEngineGetFieldsQuery } from './application/get/search-engine-get-fields.query';
export { SearchEngineFindFieldQuery } from './application/find/search-engine-find-field.query';
export { SearchEngineFindFieldByIdQuery } from './application/find/search-engine-find-field-by-id.query';
export { SearchEngineRawSQLFieldsQuery } from './application/raw-sql/search-engine-raw-sql-fields.query';

// export mocks
export { searchEngineMockFieldData } from './infrastructure/mock/search-engine-mock-field.data';
export { SearchEngineMockFieldSeeder } from './infrastructure/mock/search-engine-mock-field.seeder';
export { SearchEngineMockFieldRepository } from './infrastructure/mock/search-engine-mock-field.repository';

// export events
export { SearchEngineAddFieldsContextEvent } from './application/events/search-engine-add-fields-context.event';
export { SearchEngineCreatedFieldsEvent } from './application/events/search-engine-created-fields.event';
export { SearchEngineCreatedFieldEvent } from './application/events/search-engine-created-field.event';
export { SearchEngineDeletedFieldsEvent } from './application/events/search-engine-deleted-fields.event';
export { SearchEngineDeletedFieldEvent } from './application/events/search-engine-deleted-field.event';
export { SearchEngineUpdatedFieldsEvent } from './application/events/search-engine-updated-fields.event';
export { SearchEngineUpdatedFieldEvent } from './application/events/search-engine-updated-field.event';

// export command handlers
// can not export application command handlers, because Nest can't resolve dependencies

// export command services
// can not export application services, because Nest can't resolve dependencies

// domain
export { SearchEngineField } from './domain/search-engine-field.aggregate';
export { SearchEngineFieldMapper } from './domain/search-engine-field.mapper';
export { SearchEngineIFieldRepository } from './domain/search-engine-field.repository';
export { SearchEngineFieldResponse } from './domain/search-engine-field.response';

// infrastructure
export { SearchEngineFieldModel } from './infrastructure/sequelize/search-engine-sequelize-field.model';
export { SearchEngineSequelizeFieldRepository } from './infrastructure/sequelize/search-engine-sequelize-field.repository';

// sagas
export { SearchEngineFieldSagas } from './application/sagas/search-engine-field.sagas';

// command handlers
import { SearchEngineCreateFieldCommandHandler } from './application/create/search-engine-create-field.command-handler';
import { SearchEngineCreateFieldsCommandHandler } from './application/create/search-engine-create-fields.command-handler';
import { SearchEngineUpdateFieldByIdCommandHandler } from './application/update/search-engine-update-field-by-id.command-handler';
import { SearchEngineUpdateFieldsCommandHandler } from './application/update/search-engine-update-fields.command-handler';
import { SearchEngineUpsertFieldCommandHandler } from './application/upsert/search-engine-upsert-field.command-handler';
import { SearchEngineDeleteFieldByIdCommandHandler } from './application/delete/search-engine-delete-field-by-id.command-handler';
import { SearchEngineDeleteFieldsCommandHandler } from './application/delete/search-engine-delete-fields.command-handler';

// query handlers
import { SearchEnginePaginateFieldsQueryHandler } from './application/paginate/search-engine-paginate-fields.query-handler';
import { SearchEngineGetFieldsQueryHandler } from './application/get/search-engine-get-fields.query-handler';
import { SearchEngineFindFieldQueryHandler } from './application/find/search-engine-find-field.query-handler';
import { SearchEngineFindFieldByIdQueryHandler } from './application/find/search-engine-find-field-by-id.query-handler';
import { SearchEngineRawSQLFieldsQueryHandler } from './application/raw-sql/search-engine-raw-sql-fields.query-handler';

// event handlers
import { SearchEngineCreatedFieldEventHandler } from './application/events/search-engine-created-field.event-handler';
import { SearchEngineCreatedFieldsEventHandler } from './application/events/search-engine-created-fields.event-handler';
import { SearchEngineUpdatedFieldEventHandler } from './application/events/search-engine-updated-field.event-handler';
import { SearchEngineUpdatedFieldsEventHandler } from './application/events/search-engine-updated-fields.event-handler';
import { SearchEngineDeletedFieldEventHandler } from './application/events/search-engine-deleted-field.event-handler';
import { SearchEngineDeletedFieldsEventHandler } from './application/events/search-engine-deleted-fields.event-handler';

// services
import { SearchEngineCreateFieldService } from './application/create/search-engine-create-field.service';
import { SearchEngineCreateFieldsService } from './application/create/search-engine-create-fields.service';
import { SearchEnginePaginateFieldsService } from './application/paginate/search-engine-paginate-fields.service';
import { SearchEngineGetFieldsService } from './application/get/search-engine-get-fields.service';
import { SearchEngineFindFieldService } from './application/find/search-engine-find-field.service';
import { SearchEngineFindFieldByIdService } from './application/find/search-engine-find-field-by-id.service';
import { SearchEngineRawSQLFieldsService } from './application/raw-sql/search-engine-raw-sql-fields.service';
import { SearchEngineUpdateFieldByIdService } from './application/update/search-engine-update-field-by-id.service';
import { SearchEngineUpdateFieldsService } from './application/update/search-engine-update-fields.service';
import { SearchEngineUpsertFieldService } from './application/upsert/search-engine-upsert-field.service';
import { SearchEngineDeleteFieldByIdService } from './application/delete/search-engine-delete-field-by-id.service';
import { SearchEngineDeleteFieldsService } from './application/delete/search-engine-delete-fields.service';

export const SearchEngineFieldHandlers = [
    // commands
    SearchEngineCreateFieldCommandHandler,
    SearchEngineCreateFieldsCommandHandler,
    SearchEngineUpdateFieldByIdCommandHandler,
    SearchEngineUpdateFieldsCommandHandler,
    SearchEngineUpsertFieldCommandHandler,
    SearchEngineDeleteFieldByIdCommandHandler,
    SearchEngineDeleteFieldsCommandHandler,

    // queries
    SearchEnginePaginateFieldsQueryHandler,
    SearchEngineGetFieldsQueryHandler,
    SearchEngineFindFieldQueryHandler,
    SearchEngineFindFieldByIdQueryHandler,
    SearchEngineRawSQLFieldsQueryHandler,

    // events
    SearchEngineCreatedFieldEventHandler,
    SearchEngineCreatedFieldsEventHandler,
    SearchEngineUpdatedFieldEventHandler,
    SearchEngineUpdatedFieldsEventHandler,
    SearchEngineDeletedFieldEventHandler,
    SearchEngineDeletedFieldsEventHandler,
];

export const SearchEngineFieldServices = [
    SearchEngineCreateFieldService,
    SearchEngineCreateFieldsService,
    SearchEnginePaginateFieldsService,
    SearchEngineGetFieldsService,
    SearchEngineFindFieldService,
    SearchEngineFindFieldByIdService,
    SearchEngineRawSQLFieldsService,
    SearchEngineUpdateFieldByIdService,
    SearchEngineUpdateFieldsService,
    SearchEngineUpsertFieldService,
    SearchEngineDeleteFieldByIdService,
    SearchEngineDeleteFieldsService,
];