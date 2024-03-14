import { WhatsappDeletedWebhookEvent } from './whatsapp-deleted-webhook.event';

export class WhatsappDeletedWebhooksEvent
{
    constructor(
        public readonly webhooks: WhatsappDeletedWebhookEvent[],
    ) {}
}
