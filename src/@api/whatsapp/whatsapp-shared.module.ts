import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WhatsappConnectorService } from './message/services/whatsapp-connector.service';

@Module({
    imports: [
        HttpModule,
    ],
    providers: [
        WhatsappConnectorService,
    ],
    exports: [
        WhatsappConnectorService,
    ],
})
export class WhatsappSharedModule {}
