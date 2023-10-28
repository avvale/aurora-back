import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// modules
import { ScheduleModule } from '@nestjs/schedule';
import { CoreModule } from './@aurora/core.module';
import { AuditingModule } from '@api/auditing/auditing.module';
import { OAuthModule } from '@api/o-auth/o-auth.module';
import { IamModule } from '@api/iam/iam.module';
import { QueueManagerModule } from '@api/queue-manager/queue-manager.module';
import { AzureAdModule } from '@api/azure-ad/azure-ad.module';
import { CommonModule } from '@api/common/common.module';
import { SearchEngineModule } from '@api/search-engine/search-engine.module';
import { ServerStaticModule } from '@aurora/modules';

@Module({
    imports: [
        AuditingModule,
        AzureAdModule,
        CommonModule,
        CoreModule,
        IamModule,
        OAuthModule,
        QueueManagerModule,
        ScheduleModule.forRoot(),
        SearchEngineModule,
        ServerStaticModule,
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AppService,
    ],
})
export class AppModule {}
