import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { HttpModule } from '@nestjs/axios';
import { AddI18NConstraintService, CoreModule } from '@aurora-ts/core';
import { CqrsConfigModule } from './cqrs-config.module';
import { LoggingAxiosInterceptorService } from '@api/auditing/shared/services/logging.axios-interceptor.service';

@Module({
    imports: [
        CacheModule.register(),
        ConfigModule.forRoot({ isGlobal: true }),
        CoreModule,
        CqrsConfigModule,
        CqrsModule,
        HttpModule,
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
    ],
})
export class SharedModule {}
