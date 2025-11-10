/* eslint-disable comma-dangle */
import { OAuthScopeHandlers, OAuthScopeServices, OAuthScopeModel, OAuthIScopeRepository, OAuthSequelizeScopeRepository, OAuthScopeSagas } from './scope';
import { OAuthRefreshTokenHandlers, OAuthRefreshTokenServices, OAuthRefreshTokenModel, OAuthIRefreshTokenRepository, OAuthSequelizeRefreshTokenRepository, OAuthRefreshTokenSagas } from './refresh-token';

export const OAuthHandlers = [
    ...OAuthScopeHandlers,
    ...OAuthRefreshTokenHandlers
];
export const OAuthServices = [
    ...OAuthScopeServices,
    ...OAuthRefreshTokenServices
];
export const OAuthModels = [
    OAuthScopeModel,
    OAuthRefreshTokenModel
];
export const OAuthRepositories = [
    {
        provide : OAuthIScopeRepository,
        useClass: OAuthSequelizeScopeRepository,
    },
    {
        provide : OAuthIRefreshTokenRepository,
        useClass: OAuthSequelizeRefreshTokenRepository,
    }
];
export const OAuthSagas = [
    OAuthScopeSagas,
    OAuthRefreshTokenSagas
];
