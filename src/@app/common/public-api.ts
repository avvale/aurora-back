import { CommonResourceHandlers, CommonResourceServices, CommonResourceModel, CommonIResourceRepository, CommonSequelizeResourceRepository, CommonResourceSagas } from './resource';
import { CommonLangHandlers, CommonLangServices, CommonLangModel, CommonILangRepository, CommonSequelizeLangRepository, CommonLangSagas } from './lang';
import { CommonCountryHandlers, CommonCountryServices, CommonCountryModel, CommonICountryRepository, CommonSequelizeCountryRepository, CommonCountrySagas, CommonCountryI18nModel, CommonICountryI18nRepository, CommonSequelizeCountryI18nRepository } from './country';

/**
 * @aurora-generated
 * @source cliter/common
 */
export const CommonHandlers = [
    ...CommonResourceHandlers,
    ...CommonLangHandlers,
    ...CommonCountryHandlers
];
export const CommonServices = [
    ...CommonResourceServices,
    ...CommonLangServices,
    ...CommonCountryServices
];
export const CommonModels = [
    CommonResourceModel,
    CommonLangModel,
    CommonCountryModel,
    CommonCountryI18nModel
];
export const CommonRepositories = [
    {
        provide : CommonIResourceRepository,
        useClass: CommonSequelizeResourceRepository,
    },
    {
        provide : CommonILangRepository,
        useClass: CommonSequelizeLangRepository,
    },
    {
        provide : CommonICountryRepository,
        useClass: CommonSequelizeCountryRepository,
    },
    {
        provide : CommonICountryI18nRepository,
        useClass: CommonSequelizeCountryI18nRepository
    }
];
export const CommonSagas = [
    CommonResourceSagas,
    CommonLangSagas,
    CommonCountrySagas
];
