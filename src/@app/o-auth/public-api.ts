/* eslint-disable comma-dangle */
import { OAuthScopeHandlers, OAuthScopeServices, OAuthScopeModel, OAuthIScopeRepository, OAuthSequelizeScopeRepository, OAuthScopeSagas } from './scope';

export const OAuthHandlers = [
    ...OAuthScopeHandlers
];
export const OAuthServices = [
    ...OAuthScopeServices
];
export const OAuthModels = [
    OAuthScopeModel
];
export const OAuthRepositories = [
    {
        provide : OAuthIScopeRepository,
        useClass: OAuthSequelizeScopeRepository,
    }
];
export const OAuthSagas = [
    OAuthScopeSagas
];
