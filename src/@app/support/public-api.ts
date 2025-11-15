/* eslint-disable comma-dangle */
import { SupportIssueHandlers, SupportIssueServices, SupportIssueModel, SupportIIssueRepository, SupportSequelizeIssueRepository, SupportIssueSagas } from './issue';
import { SupportConfigHandlers, SupportConfigServices, SupportConfigModel, SupportIConfigRepository, SupportSequelizeConfigRepository, SupportConfigSagas } from './config';

export const SupportHandlers = [
    ...SupportIssueHandlers,
    ...SupportConfigHandlers
];
export const SupportServices = [
    ...SupportIssueServices,
    ...SupportConfigServices
];
export const SupportModels = [
    SupportIssueModel,
    SupportConfigModel
];
export const SupportRepositories = [
    {
        provide : SupportIIssueRepository,
        useClass: SupportSequelizeIssueRepository,
    },
    {
        provide : SupportIConfigRepository,
        useClass: SupportSequelizeConfigRepository,
    }
];
export const SupportSagas = [
    SupportIssueSagas,
    SupportConfigSagas
];