/* eslint-disable comma-dangle */
import { OAuthScopeHandlers, OAuthScopeServices, OAuthScopeModel, OAuthIScopeRepository, OAuthSequelizeScopeRepository, OAuthScopeSagas } from './scope';
import { OAuthRefreshTokenHandlers, OAuthRefreshTokenServices, OAuthRefreshTokenModel, OAuthIRefreshTokenRepository, OAuthSequelizeRefreshTokenRepository, OAuthRefreshTokenSagas } from './refresh-token';
import { OAuthClientHandlers, OAuthClientServices, OAuthClientModel, OAuthIClientRepository, OAuthSequelizeClientRepository, OAuthClientSagas } from './client';
import { OAuthApplicationClientHandlers, OAuthApplicationClientServices, OAuthApplicationClientModel, OAuthIApplicationClientRepository, OAuthSequelizeApplicationClientRepository, OAuthApplicationClientSagas } from './application-client';

export const OAuthHandlers = [
    ...OAuthScopeHandlers,
    ...OAuthRefreshTokenHandlers,
    ...OAuthClientHandlers,
    ...OAuthApplicationClientHandlers
];
export const OAuthServices = [
    ...OAuthScopeServices,
    ...OAuthRefreshTokenServices,
    ...OAuthClientServices,
    ...OAuthApplicationClientServices
];
export const OAuthModels = [
    OAuthScopeModel,
    OAuthRefreshTokenModel,
    OAuthClientModel,
    OAuthApplicationClientModel
];
export const OAuthRepositories = [
    {
        provide : OAuthIScopeRepository,
        useClass: OAuthSequelizeScopeRepository,
    },
    {
        provide : OAuthIRefreshTokenRepository,
        useClass: OAuthSequelizeRefreshTokenRepository,
    },
    {
        provide : OAuthIClientRepository,
        useClass: OAuthSequelizeClientRepository,
    },
    {
        provide : OAuthIApplicationClientRepository,
        useClass: OAuthSequelizeApplicationClientRepository,
    }
];
export const OAuthSagas = [
    OAuthScopeSagas,
    OAuthRefreshTokenSagas,
    OAuthClientSagas,
    OAuthApplicationClientSagas
];
