import { CommonResourceHandlers, CommonResourceServices, CommonResourceModel, CommonIResourceRepository, CommonSequelizeResourceRepository, CommonResourceSagas } from './resource';
import { CommonLangHandlers, CommonLangServices, CommonLangModel, CommonILangRepository, CommonSequelizeLangRepository, CommonLangSagas } from './lang';
import { CommonCountryHandlers, CommonCountryServices, CommonCountryModel, CommonICountryRepository, CommonSequelizeCountryRepository, CommonCountrySagas, CommonCountryI18nModel, CommonICountryI18nRepository, CommonSequelizeCountryI18nRepository } from './country';
import { CommonAdministrativeAreaLevel1Handlers, CommonAdministrativeAreaLevel1Services, CommonAdministrativeAreaLevel1Model, CommonIAdministrativeAreaLevel1Repository, CommonSequelizeAdministrativeAreaLevel1Repository, CommonAdministrativeAreaLevel1Sagas } from './administrative-area-level-1';

/**
 * @aurora-generated
 * @source cliter/common
 */
export const CommonHandlers = [
    ...CommonResourceHandlers,
    ...CommonLangHandlers,
    ...CommonCountryHandlers,
    ...CommonAdministrativeAreaLevel1Handlers
];
export const CommonServices = [
    ...CommonResourceServices,
    ...CommonLangServices,
    ...CommonCountryServices,
    ...CommonAdministrativeAreaLevel1Services
];
export const CommonModels = [
    CommonResourceModel,
    CommonLangModel,
    CommonCountryModel,
    CommonCountryI18nModel,
    CommonAdministrativeAreaLevel1Model
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
    },
    {
        provide : CommonIAdministrativeAreaLevel1Repository,
        useClass: CommonSequelizeAdministrativeAreaLevel1Repository,
    }
];
export const CommonSagas = [
    CommonResourceSagas,
    CommonLangSagas,
    CommonCountrySagas,
    CommonAdministrativeAreaLevel1Sagas
];
