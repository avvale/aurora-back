import { AuditingAxiosInterceptorService, AuditingRunnerAuroraImplementationService } from '@api/auditing/shared';
import { CommonAttachmentsService, CommonGetFallbackLangFromDbService, CommonGetLangsFromDbService } from '@api/common/shared';
import { WhatsappSharedModule } from '@api/whatsapp/whatsapp-shared.module';
import { AuthJwtStrategyRegistryModule, jwtConfig } from '@app/o-auth/shared';
import { CoreGetFallbackLangFromJsonService, CoreGetLangsFromJsonService } from '@aurora/modules/lang';
import { AuditingRunner, AuditingRunnerDisabledImplementationService, AuroraMetadataModule, CoreAddI18nConstraintService, CoreGetContentLanguageObjectService, CoreGetFallbackLangService, CoreGetLangsService, CoreGetSearchKeyLangService, CoreModule } from '@aurorajs.dev/core';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { CqrsConfigModule } from './cqrs-config.module';

@Module({
    imports: [
        AuroraMetadataModule,
        AuthJwtStrategyRegistryModule.forRoot(jwtConfig),
        CacheModule.register({ isGlobal: true, ttl: 0 }),
        ConfigModule.forRoot({ isGlobal: true }),
        CoreModule,
        CqrsConfigModule,
        CqrsModule,
        HttpModule,
        WhatsappSharedModule,
    ],
    providers: [
        AuditingAxiosInterceptorService,
        CommonAttachmentsService,
        CoreAddI18nConstraintService,
        CoreGetContentLanguageObjectService,
        CoreGetSearchKeyLangService,
        {
            provide : AuditingRunner,
            useClass: AuditingRunnerAuroraImplementationService,
        },
        {
            provide : CoreGetLangsService,
            useClass: CommonGetLangsFromDbService,
        },
        {
            provide : CoreGetFallbackLangService,
            useClass: CommonGetFallbackLangFromDbService,
        },
    ],
    exports: [
        AuditingRunner,
        AuroraMetadataModule,
        AuthJwtStrategyRegistryModule,
        CacheModule,
        CommonAttachmentsService,
        ConfigModule,
        CoreAddI18nConstraintService,
        CoreGetContentLanguageObjectService,
        CoreGetFallbackLangService,
        CoreGetLangsService,
        CoreGetSearchKeyLangService,
        CqrsConfigModule,
        WhatsappSharedModule,
    ],
})
export class SharedModule {}
