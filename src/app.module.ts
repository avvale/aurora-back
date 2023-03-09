import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CoreModule } from './@aurora/core.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuditingModule } from '@api/auditing/auditing.module';
import { OAuthModule } from '@api/o-auth/o-auth.module';
import { IamModule } from '@api/iam/iam.module';
import { BullModule } from '@nestjs/bull';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        BullModule.forRootAsync({
            imports   : [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                redis: {
                    host    : configService.get('REDIS_HOST'),
                    port    : +configService.get('REDIS_PORT'),
                    password: configService.get('REDIS_PASSWORD'),
                },
                defaultJobOptions: {
                    // removes the job when it successfully completes.
                    // A number specifies the amount of jobs to keep.
                    // Default behavior is to keep the job in the completed set.
                    removeOnComplete: 100,
                },
            }),
            inject: [ConfigService],
        }),
        CoreModule,
        ScheduleModule.forRoot(),
        OAuthModule,
        IamModule,
        AuditingModule,
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AppService,
    ],
})
export class AppModule {}
