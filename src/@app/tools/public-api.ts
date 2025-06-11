/* eslint-disable comma-dangle */
import { ToolsKeyValueHandlers, ToolsKeyValueServices, ToolsKeyValueModel, ToolsIKeyValueRepository, ToolsSequelizeKeyValueRepository, ToolsKeyValueSagas } from './key-value';

export const ToolsHandlers = [
    ...ToolsKeyValueHandlers
];
export const ToolsServices = [
    ...ToolsKeyValueServices
];
export const ToolsModels = [
    ToolsKeyValueModel
];
export const ToolsRepositories = [
    {
        provide : ToolsIKeyValueRepository,
        useClass: ToolsSequelizeKeyValueRepository,
    }
];
export const ToolsSagas = [
    ToolsKeyValueSagas
];