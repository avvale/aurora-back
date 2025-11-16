/* eslint-disable comma-dangle */
import {
    SupportIIssueRepository,
    SupportIssueHandlers,
    SupportIssueModel,
    SupportIssueSagas,
    SupportIssueServices,
    SupportSequelizeIssueRepository,
} from './issue';

export const SupportHandlers = [...SupportIssueHandlers];
export const SupportServices = [...SupportIssueServices];
export const SupportModels = [SupportIssueModel];
export const SupportRepositories = [
    {
        provide: SupportIIssueRepository,
        useClass: SupportSequelizeIssueRepository,
    },
];
export const SupportSagas = [SupportIssueSagas];
