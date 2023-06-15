import { CommonLangHandlers, CommonLangServices, CommonLangModel, ILangRepository, SequelizeLangRepository, LangSagas } from './lang';
import { CommonCountryHandlers, CommonCountryServices, CommonCountryModel, CommonCountryI18nModel, CommonICountryRepository, CommonSequelizeCountryRepository, CommonICountryI18nRepository, CommonSequelizeCountryI18nRepository, CommonCountrySagas } from './country';

export const CommonHandlers = [
    ...CommonLangHandlers,
    ...CommonCountryHandlers
];
export const CommonServices = [
    ...CommonLangServices,
    ...CommonCountryServices
];
export const CommonModels = [
    CommonLangModel,
    CommonCountryModel,
    CommonCountryI18nModel
];
export const CommonRepositories = [
    {
        provide : ILangRepository,
        useClass: SequelizeLangRepository
    },
    {
        provide : CommonICountryI18nRepository,
        useClass: CommonSequelizeCountryI18nRepository
    },
    {
        provide : CommonICountryRepository,
        useClass: CommonSequelizeCountryRepository
    }
];
export const CommonSagas = [
    LangSagas,
    CommonCountrySagas
];

