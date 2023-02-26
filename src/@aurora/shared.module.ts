import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { HttpModule } from '@nestjs/axios';
import { AddI18NConstraintService, AuditingRunner, AuditingRunnerDisabledImplementationService, CoreModule } from '@aurora-ts/core';
import { CqrsConfigModule } from './cqrs-config.module';
import { AuditingAxiosInterceptorService } from '@api/auditing/shared/services/auditing-axios-interceptor.service';
import { AuthJwtStrategyRegistryModule } from '@app/o-auth/shared/modules/auth-jwt-strategy-registry.module';
import { jwtConfig } from '@app/o-auth/shared/jwt-config';
import { AuditingRunnerAuroraImplementationService } from '@api/auditing/shared/services/auditing-runner-aurora-implementation.service';

@Module({
    imports: [
        AuthJwtStrategyRegistryModule.forRoot(jwtConfig),
        CacheModule.register(),
        ConfigModule.forRoot({ isGlobal: true }),
        CoreModule,
        CqrsConfigModule,
        CqrsModule,
        HttpModule,
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
        AuthJwtStrategyRegistryModule,
        CacheModule,
        ConfigModule,
        CqrsConfigModule,
        AuditingRunner,
    ],
})
export class SharedModule {}
