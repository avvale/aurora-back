import { WhatsappUpdatedWebhookEvent } from './whatsapp-updated-webhook.event';

export class WhatsappUpdatedWebhooksEvent
{
    constructor(
        public readonly webhooks: WhatsappUpdatedWebhookEvent[],
    ) {}
}
