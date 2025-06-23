/* eslint-disable comma-dangle */
import { ToolsKeyValueHandlers, ToolsKeyValueServices, ToolsKeyValueModel, ToolsIKeyValueRepository, ToolsSequelizeKeyValueRepository, ToolsKeyValueSagas } from './key-value';
import { ToolsProcedureHandlers, ToolsProcedureServices, ToolsProcedureModel, ToolsIProcedureRepository, ToolsSequelizeProcedureRepository, ToolsProcedureSagas } from './procedure';

export const ToolsHandlers = [
    ...ToolsKeyValueHandlers,
    ...ToolsProcedureHandlers
];
export const ToolsServices = [
    ...ToolsKeyValueServices,
    ...ToolsProcedureServices
];
export const ToolsModels = [
    ToolsKeyValueModel,
    ToolsProcedureModel
];
export const ToolsRepositories = [
    {
        provide : ToolsIKeyValueRepository,
        useClass: ToolsSequelizeKeyValueRepository,
    },
    {
        provide : ToolsIProcedureRepository,
        useClass: ToolsSequelizeProcedureRepository,
    }
];
export const ToolsSagas = [
    ToolsKeyValueSagas,
    ToolsProcedureSagas
];