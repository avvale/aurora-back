import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SharedModule } from '@aurora/shared.module';
import { OAuthSeeder } from './o-auth.seeder';
import { OAuthModels, OAuthHandlers, OAuthServices, OAuthRepositories, OAuthSagas } from '@app/o-auth';
import { OAuthApplicationControllers, OAuthApplicationResolvers, OAuthApplicationApiHandlers, OAuthApplicationServices } from './application';
import { OAuthClientControllers, OAuthClientResolvers, OAuthClientApiHandlers, OAuthClientServices } from './client';
import { OAuthAccessTokenApiHandlers, OAuthAccessTokenApiControllers, OAuthAccessTokenApiResolvers, OAuthAccessTokenApiServices } from './access-token';
import { OAuthRefreshTokenControllers, OAuthRefreshTokenResolvers, OAuthRefreshTokenApiHandlers, OAuthRefreshTokenServices } from './refresh-token';
import { OAuthCredentialControllers, OAuthCredentialResolvers, OAuthCredentialApiHandlers } from './credential';
import { OAuthScopeControllers, OAuthScopeResolvers, OAuthScopeApiHandlers, OAuthScopeServices } from './scope';
import { IamCreatePermissionsFromRolesService } from '@app/iam/permission-role/application/services/iam-create-permissions-from-roles.service';

@Module({
    imports: [
        SharedModule,
        SequelizeModule.forFeature([
            ...OAuthModels,
        ]),
    ],
    controllers: [
        ...OAuthApplicationControllers,
        ...OAuthClientControllers,
        ...OAuthAccessTokenApiControllers,
        ...OAuthRefreshTokenControllers,
        ...OAuthCredentialControllers,
        ...OAuthScopeControllers,
    ],
    providers: [
        OAuthSeeder,
        ...OAuthHandlers,
        ...OAuthServices,
        ...OAuthRepositories,
        ...OAuthSagas,
        ...OAuthApplicationResolvers,
        ...OAuthApplicationApiHandlers,
        ...OAuthClientResolvers,
        ...OAuthClientApiHandlers,
        ...OAuthScopeApiHandlers,
        ...OAuthAccessTokenApiHandlers,
        ...OAuthRefreshTokenResolvers,
        ...OAuthRefreshTokenApiHandlers,
        ...OAuthCredentialResolvers,
        ...OAuthCredentialApiHandlers,
        ...OAuthScopeResolvers,

        // ---- customizations ----
        IamCreatePermissionsFromRolesService,
        ...OAuthAccessTokenApiServices,
        ...OAuthApplicationServices,
        ...OAuthClientServices,
        ...OAuthRefreshTokenServices,
        ...OAuthScopeServices,
        ...OAuthAccessTokenApiResolvers,
    ],
})
export class OAuthModule {}
