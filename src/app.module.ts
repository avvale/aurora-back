import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// modules
import { ScheduleModule } from '@nestjs/schedule';
import { CoreModule } from '@aurora/core.module';
import { AuditingModule } from '@api/auditing/auditing.module';
import { OAuthModule } from '@api/o-auth/o-auth.module';
import { IamModule } from '@api/iam/iam.module';
import { MsEntraIdModule } from '@api/ms-entra-id/ms-entra-id.module';
import { QueueManagerModule } from '@api/queue-manager/queue-manager.module';
import { CommonModule } from '@api/common/common.module';
import { SearchEngineModule } from '@api/search-engine/search-engine.module';
import { StorageAccountModule } from '@api/storage-account/storage-account.module';
import { RootModule, ServerStaticModule } from '@aurora/modules';
import { ToolsModule } from '@api/tools/tools.module';
import { MessageModule } from '@api/message/message.module';
import { WhatsappModule } from '@api/whatsapp/whatsapp.module';
import { SharedModule } from '@api/shared/shared.module';

@Module({
    imports: [
        RootModule,
        AuditingModule,
        CommonModule,
        CoreModule,
        IamModule,
        MsEntraIdModule,
        OAuthModule,
        QueueManagerModule,
        ScheduleModule.forRoot(),
        SearchEngineModule,
        ServerStaticModule,
        StorageAccountModule,
        ToolsModule,
        MessageModule,
        WhatsappModule,
        SharedModule,
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AppService,
    ],
})
export class AppModule {}
