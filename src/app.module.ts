import { AuthenticationDisabledAdapterGuard, AuthenticationGuard, AuthorizationDisabledAdapterGuard, AuthorizationGuard } from '@aurora-ts/core';
import { Module } from '@nestjs/common';
import { CoreModule } from './@aurora/core.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuditingModule } from '@api/auditing/auditing.module';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationPermissionsGuard } from '@api/iam/shared/guards/authorization-permissions.guard';
import { OAuthModule } from '@api/o-auth/o-auth.module';
import { IamModule } from '@api/iam/iam.module';

@Module({
    imports: [
        CoreModule,
        OAuthModule,
        IamModule,
        AuditingModule,
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AppService,
        {
            provide : AuthenticationGuard,
            useClass: AuthenticationJwtGuard,
        },
        {
            provide : AuthorizationGuard,
            useClass: AuthorizationPermissionsGuard,
        },
    ],
})
export class AppModule {}
