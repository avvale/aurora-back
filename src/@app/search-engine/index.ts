import {
  SearchEngineCollectionHandlers,
  SearchEngineCollectionModel,
  SearchEngineCollectionSagas,
  SearchEngineCollectionServices,
  SearchEngineICollectionRepository,
  SearchEngineSequelizeCollectionRepository,
} from './collection';
import {
  SearchEngineFieldHandlers,
  SearchEngineFieldModel,
  SearchEngineFieldSagas,
  SearchEngineFieldServices,
  SearchEngineIFieldRepository,
  SearchEngineSequelizeFieldRepository,
} from './field';

export * from './collection';
export * from './field';

export const SearchEngineHandlers = [
  ...SearchEngineCollectionHandlers,
  ...SearchEngineFieldHandlers,
];
export const SearchEngineServices = [
  ...SearchEngineCollectionServices,
  ...SearchEngineFieldServices,
];
export const SearchEngineModels = [
  SearchEngineCollectionModel,
  SearchEngineFieldModel,
];
export const SearchEngineRepositories = [
  {
    provide: SearchEngineICollectionRepository,
    useClass: SearchEngineSequelizeCollectionRepository,
  },
  {
    provide: SearchEngineIFieldRepository,
    useClass: SearchEngineSequelizeFieldRepository,
  },
];
export const SearchEngineSagas = [
  SearchEngineCollectionSagas,
  SearchEngineFieldSagas,
];
