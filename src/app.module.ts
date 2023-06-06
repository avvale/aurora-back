import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CoreModule } from './@aurora/core.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuditingModule } from '@api/auditing/auditing.module';
import { OAuthModule } from '@api/o-auth/o-auth.module';
import { IamModule } from '@api/iam/iam.module';
import { QueueManagerModule } from '@api/queue-manager/queue-manager.module';
import { AzureAdModule } from '@api/azure-ad/azure-ad.module';
import { CommonModule } from '@api/common/common.module';

@Module({
    imports: [
        CoreModule,
        ScheduleModule.forRoot(),
        OAuthModule,
        IamModule,
        AuditingModule,
        QueueManagerModule,
        AzureAdModule,
        CommonModule
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AppService,
    ],
})
export class AppModule {}
