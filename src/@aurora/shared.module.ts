import { AuditingAxiosInterceptorService } from '@api/auditing/shared/services/auditing-axios-interceptor.service';
import { AuditingRunnerAuroraImplementationService } from '@api/auditing/shared/services/auditing-runner-aurora-implementation.service';
import { WhatsappSharedModule } from '@api/whatsapp/whatsapp-shared.module';
import { jwtConfig } from '@app/o-auth/shared/jwt-config';
import { AuthJwtStrategyRegistryModule } from '@app/o-auth/shared/modules/auth-jwt-strategy-registry.module';
import { CoreGetLangsFromJsonService } from '@aurora/modules/lang';
import { AddI18nConstraintService, AuditingRunner, AuditingRunnerDisabledImplementationService, CoreGetLangsService, CoreModule } from '@aurorajs.dev/core';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { CqrsConfigModule } from './cqrs-config.module';
import { CommonGetLangsFromDbService } from '@api/common/shared';

@Module({
    imports: [
        AuthJwtStrategyRegistryModule.forRoot(jwtConfig),
        CacheModule.register({ isGlobal: true }),
        ConfigModule.forRoot({ isGlobal: true }),
        CoreModule,
        CqrsConfigModule,
        CqrsModule,
        HttpModule,
        WhatsappSharedModule,
    ],
    providers: [
        AddI18nConstraintService,
        AuditingAxiosInterceptorService,
        {
            provide : AuditingRunner,
            useClass: AuditingRunnerAuroraImplementationService,
        },
        {
            provide : CoreGetLangsService,
            useClass: CommonGetLangsFromDbService,
        },
    ],
    exports: [
        AddI18nConstraintService,
        AuditingRunner,
        AuthJwtStrategyRegistryModule,
        CacheModule,
        ConfigModule,
        CoreGetLangsService,
        CqrsConfigModule,
        WhatsappSharedModule,
    ],
})
export class SharedModule {}
