import { AuthenticationDisabledAdapterGuard, AuthenticationGuard, AuthorizationDisabledAdapterGuard, AuthorizationGuard } from '@aurora-ts/core';
import { Module } from '@nestjs/common';
import { CoreModule } from './@aurora/core.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuditingModule } from '@api/auditing/auditing.module';

@Module({
    imports: [
        CoreModule,
        AuditingModule,
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AppService,
        {
            provide : AuthenticationGuard,
            useClass: AuthenticationDisabledAdapterGuard,
        },
        {
            provide : AuthorizationGuard,
            useClass: AuthorizationDisabledAdapterGuard,
        },
    ],
})
export class AppModule {}
