import { WhatsappIWebhookRepository, WhatsappWebhook, WhatsappWebhookMapper, WhatsappWebhookModel } from '@app/whatsapp/webhook';
import { AuditingRunner, ICriteria, SequelizeRepository } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class WhatsappSequelizeWebhookRepository extends SequelizeRepository<WhatsappWebhook, WhatsappWebhookModel> implements WhatsappIWebhookRepository
{
    public readonly aggregateName: string = 'WhatsappWebhook';
    public readonly mapper: WhatsappWebhookMapper = new WhatsappWebhookMapper();

    constructor(
        @InjectModel(WhatsappWebhookModel)
        public readonly repository: typeof WhatsappWebhookModel,
        public readonly criteria: ICriteria,
        public readonly auditingRunner: AuditingRunner,
    )
    {
        super();
    }
}
