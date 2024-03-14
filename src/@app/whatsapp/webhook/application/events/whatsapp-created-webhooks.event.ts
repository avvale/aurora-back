import { WhatsappCreatedWebhookEvent } from './whatsapp-created-webhook.event';

export class WhatsappCreatedWebhooksEvent
{
    constructor(
        public readonly webhooks: WhatsappCreatedWebhookEvent[],
    ) {}
}
