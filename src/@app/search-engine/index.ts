import { SearchEngineCollectionHandlers, SearchEngineCollectionServices, SearchEngineCollectionModel, SearchEngineICollectionRepository, SearchEngineSequelizeCollectionRepository, SearchEngineCollectionSagas } from './collection';
import { SearchEngineFieldHandlers, SearchEngineFieldServices, SearchEngineFieldModel, SearchEngineIFieldRepository, SearchEngineSequelizeFieldRepository, SearchEngineFieldSagas } from './field';

export const SearchEngineHandlers = [
    ...SearchEngineCollectionHandlers,
    ...SearchEngineFieldHandlers
];
export const SearchEngineServices = [
    ...SearchEngineCollectionServices,
    ...SearchEngineFieldServices
];
export const SearchEngineModels = [
    SearchEngineCollectionModel,
    SearchEngineFieldModel
];
export const SearchEngineRepositories = [
    {
        provide : SearchEngineICollectionRepository,
        useClass: SearchEngineSequelizeCollectionRepository
    },
    {
        provide : SearchEngineIFieldRepository,
        useClass: SearchEngineSequelizeFieldRepository
    }
];
export const SearchEngineSagas = [
    SearchEngineCollectionSagas,
    SearchEngineFieldSagas
];
