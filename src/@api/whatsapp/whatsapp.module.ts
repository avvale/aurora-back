import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SharedModule } from '@aurora/shared.module';
import { WhatsappSeeder } from './whatsapp.seeder';
import { WhatsappModels, WhatsappHandlers, WhatsappServices, WhatsappRepositories, WhatsappSagas } from '../../@app/whatsapp';
import { WhatsappWebhookApiControllers, WhatsappWebhookApiResolvers, WhatsappWebhookApiHandlers, WhatsappWebhookApiServices } from './webhook';

@Module({
    imports: [
        SharedModule,
        SequelizeModule.forFeature([
                ...WhatsappModels
            ])
    ],
    controllers: [
        ...WhatsappWebhookApiControllers
    ],
    providers: [
        WhatsappSeeder,
        ...WhatsappHandlers,
        ...WhatsappServices,
        ...WhatsappRepositories,
        ...WhatsappSagas,
        ...WhatsappWebhookApiResolvers,
        ...WhatsappWebhookApiHandlers,
        ...WhatsappWebhookApiServices
    ],
})
export class WhatsappModule {}
