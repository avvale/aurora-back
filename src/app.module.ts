import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// modules
import { AuditingModule } from '@api/auditing/auditing.module';
import { CommonModule } from '@api/common/common.module';
import { IamModule } from '@api/iam/iam.module';
import { MessageModule } from '@api/message/message.module';
import { MsEntraIdModule } from '@api/ms-entra-id/ms-entra-id.module';
import { OAuthModule } from '@api/o-auth/o-auth.module';
import { QueueManagerModule } from '@api/queue-manager/queue-manager.module';
import { SearchEngineModule } from '@api/search-engine/search-engine.module';
import { SharedModule } from '@api/shared/shared.module';
import { StorageAccountModule } from '@api/storage-account/storage-account.module';
import { SupportModule } from '@api/support/support.module';
import { ToolsModule } from '@api/tools/tools.module';
import { WhatsappModule } from '@api/whatsapp/whatsapp.module';
import { CoreModule } from '@aurora/core.module';
import { RootModule, ServerStaticModule } from '@aurora/modules';
import { ScheduleModule } from '@nestjs/schedule';

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
        // McpModule,
        // GraphQLAIModule,
        SupportModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
