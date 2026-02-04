import { CommonResourceHandlers, CommonResourceServices, CommonResourceModel, CommonIResourceRepository, CommonSequelizeResourceRepository, CommonResourceSagas } from './resource';
import { CommonLangHandlers, CommonLangServices, CommonLangModel, CommonILangRepository, CommonSequelizeLangRepository, CommonLangSagas } from './lang';

/**
 * @aurora-generated
 * @source cliter/common
 */
export const CommonHandlers = [
    ...CommonResourceHandlers,
    ...CommonLangHandlers
];
export const CommonServices = [
    ...CommonResourceServices,
    ...CommonLangServices
];
export const CommonModels = [
    CommonResourceModel,
    CommonLangModel
];
export const CommonRepositories = [
    {
        provide : CommonIResourceRepository,
        useClass: CommonSequelizeResourceRepository,
    },
    {
        provide : CommonILangRepository,
        useClass: CommonSequelizeLangRepository,
    }
];
export const CommonSagas = [
    CommonResourceSagas,
    CommonLangSagas
];
