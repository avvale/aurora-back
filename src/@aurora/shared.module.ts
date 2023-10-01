import { AuditingAxiosInterceptorService, AuditingRunnerAuroraImplementationService } from '@api/auditing/shared';
import { CommonGetFallbackLangFromDbService, CommonGetLangsFromDbService } from '@api/common/shared';
import { WhatsappSharedModule } from '@api/whatsapp/whatsapp-shared.module';
import { AuthJwtStrategyRegistryModule, jwtConfig } from '@app/o-auth/shared';
import { CoreFileUploaderService } from '@aurora/modules/file-uploader';
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
        CoreFileUploaderService,
        CoreAddI18nConstraintService,
        AuditingAxiosInterceptorService,
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
        ConfigModule,
        CoreAddI18nConstraintService,
        CoreFileUploaderService,
        CoreGetContentLanguageObjectService,
        CoreGetFallbackLangService,
        CoreGetLangsService,
        CoreGetSearchKeyLangService,
        CqrsConfigModule,
        WhatsappSharedModule,
    ],
})
export class SharedModule {}
