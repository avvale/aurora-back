import { AuditingAxiosInterceptorService, AuditingRunnerAuroraImplementationService } from '@api/auditing/shared';
import { CommonGetLangsFromDbService } from '@api/common/shared';
import { WhatsappSharedModule } from '@api/whatsapp/whatsapp-shared.module';
import { AuthJwtStrategyRegistryModule, jwtConfig } from '@app/o-auth/shared';
import { CoreGetLangsFromJsonService } from '@aurora/modules/lang';
import { AddI18nConstraintService, AuditingRunner, AuditingRunnerDisabledImplementationService, CoreGetLangsService, CoreModule } from '@aurorajs.dev/core';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { CqrsConfigModule } from './cqrs-config.module';

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
