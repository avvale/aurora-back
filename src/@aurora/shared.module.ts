import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { HttpModule } from '@nestjs/axios';
import { AddI18NConstraintService, AuditingRunner, AuditingRunnerDisabledImplementationService, CoreModule } from '@aurorajs.dev/core';
import { CqrsConfigModule } from './cqrs-config.module';
import { AuthJwtStrategyRegistryModule } from '@app/o-auth/shared/modules/auth-jwt-strategy-registry.module';
import { jwtConfig } from '@app/o-auth/shared/jwt-config';
import { AuditingAxiosInterceptorService } from '@api/auditing/shared/services/auditing-axios-interceptor.service';
import { AuditingRunnerAuroraImplementationService } from '@api/auditing/shared/services/auditing-runner-aurora-implementation.service';
import { WhatsappSharedModule } from '@api/whatsapp/whatsapp-shared.module';

@Module({
    imports: [
        AuthJwtStrategyRegistryModule.forRoot(jwtConfig),
        CacheModule.register(),
        ConfigModule.forRoot({ isGlobal: true }),
        CoreModule,
        CqrsConfigModule,
        CqrsModule,
        HttpModule,
        WhatsappSharedModule,
    ],
    providers: [
        AddI18NConstraintService,
        AuditingAxiosInterceptorService,
        {
            provide : AuditingRunner,
            useClass: AuditingRunnerAuroraImplementationService,
        },
    ],
    exports: [
        AddI18NConstraintService,
        AuditingRunner,
        AuthJwtStrategyRegistryModule,
        CacheModule,
        ConfigModule,
        CqrsConfigModule,
        WhatsappSharedModule,
    ],
})
export class SharedModule {}
