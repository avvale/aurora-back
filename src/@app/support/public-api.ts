/* eslint-disable comma-dangle */
import { SupportIssueHandlers, SupportIssueServices, SupportIssueModel, SupportIIssueRepository, SupportSequelizeIssueRepository, SupportIssueSagas } from './issue';

export const SupportHandlers = [
    ...SupportIssueHandlers
];
export const SupportServices = [
    ...SupportIssueServices
];
export const SupportModels = [
    SupportIssueModel
];
export const SupportRepositories = [
    {
        provide : SupportIIssueRepository,
        useClass: SupportSequelizeIssueRepository,
    }
];
export const SupportSagas = [
    SupportIssueSagas
];