import { CommonResourceHandlers, CommonResourceServices, CommonResourceModel, CommonIResourceRepository, CommonSequelizeResourceRepository, CommonResourceSagas } from './resource';

/**
 * @aurora-generated
 * @source cliter/common
 */
export const CommonHandlers = [
    ...CommonResourceHandlers
];
export const CommonServices = [
    ...CommonResourceServices
];
export const CommonModels = [
    CommonResourceModel
];
export const CommonRepositories = [
    {
        provide : CommonIResourceRepository,
        useClass: CommonSequelizeResourceRepository,
    }
];
export const CommonSagas = [
    CommonResourceSagas
];
