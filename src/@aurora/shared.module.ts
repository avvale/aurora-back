import {
    AuditingAxiosInterceptorService,
    AuditingRunnerAuroraImplementationService,
} from '@api/auditing/shared';
import {
    CommonAttachmentsService,
    CommonGetFallbackLangFromDbService,
    CommonGetLangsFromDbService,
} from '@api/common/shared';
import {
    StorageAccountFileManagerService,
    StorageAccountLocalFileManagerService,
} from '@api/storage-account/file-manager';
import { AuthJwtStrategyRegistryModule } from '@app/o-auth/shared';
import {
    StorageAccountLocalSharedAccessSignatureService,
    StorageAccountSharedAccessSignatureService,
} from '@app/storage-account/shared-access-signature';
import {
    AuditingRunner,
    AuroraMetadataModule,
    CoreAddI18nConstraintService,
    CoreGetContentLanguageObjectService,
    CoreGetFallbackLangService,
    CoreGetLangsService,
    CoreGetSearchKeyLangService,
    CoreModule,
} from '@aurorajs.dev/core';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { SentryModule } from './modules';

@Module({
    imports: [
        AuroraMetadataModule,
        AuthJwtStrategyRegistryModule.forRoot(),
        CacheModule.register({ isGlobal: true, ttl: 0 }),
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ['../.env', '.env'],
        }),
        CoreModule,
        CqrsModule,
        HttpModule,
        SentryModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                dsn: configService.get('SENTRY_DSN'),
                environment: configService.get('SENTRY_ENVIRONMENT'),
                release:
                    configService.get('SENTRY_PROJECT') +
                    '@' +
                    process.env.npm_package_version,
            }),
        }),
    ],
    providers: [
        AuditingAxiosInterceptorService,
        CommonAttachmentsService,
        CoreAddI18nConstraintService,
        CoreGetContentLanguageObjectService,
        CoreGetSearchKeyLangService,
        {
            provide: AuditingRunner,
            useClass: AuditingRunnerAuroraImplementationService,
        },
        {
            provide: CoreGetLangsService,
            useClass: CommonGetLangsFromDbService,
        },
        {
            provide: CoreGetFallbackLangService,
            useClass: CommonGetFallbackLangFromDbService,
        },
        {
            provide: StorageAccountFileManagerService,
            useClass: StorageAccountLocalFileManagerService,
        },
        {
            provide: StorageAccountSharedAccessSignatureService,
            useClass: StorageAccountLocalSharedAccessSignatureService,
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
        HttpModule,
        SentryModule,
        StorageAccountFileManagerService,
        StorageAccountSharedAccessSignatureService,
    ],
})
export class SharedModule {}
