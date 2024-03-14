import { WhatsappUpdatedAndIncrementedWebhookEvent } from './whatsapp-updated-and-incremented-webhook.event';

export class WhatsappUpdatedAndIncrementedWebhooksEvent
{
    constructor(
        public readonly webhooks: WhatsappUpdatedAndIncrementedWebhookEvent[],
    ) {}
}
