import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { HttpModule } from '@nestjs/axios';
import { AddI18NConstraintService, CoreModule } from '@aurora-ts/core';
import { CqrsConfigModule } from './cqrs-config.module';
import { LoggingAxiosInterceptorService } from '@api/auditing/shared/services/logging.axios-interceptor.service';
import { AuthModule } from '../@app/o-auth/shared/modules/auth.module';
import { jwtConfig } from '../@app/o-auth/shared/jwt-config';

@Module({
    imports: [
        CacheModule.register(),
        ConfigModule.forRoot({ isGlobal: true }),
        CoreModule,
        CqrsConfigModule,
        CqrsModule,
        HttpModule,
        AuthModule.forRoot(jwtConfig)
    ],
    providers: [
        AddI18NConstraintService,
        LoggingAxiosInterceptorService,
    ],
    exports: [
        AddI18NConstraintService,
        CacheModule,
        ConfigModule,
        CqrsConfigModule,
        AuthModule
    ],
})
export class SharedModule {}
