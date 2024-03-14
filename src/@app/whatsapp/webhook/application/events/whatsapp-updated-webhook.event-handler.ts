import { WhatsappUpdatedWebhookEvent } from '@app/whatsapp/webhook';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(WhatsappUpdatedWebhookEvent)
export class WhatsappUpdatedWebhookEventHandler implements IEventHandler<WhatsappUpdatedWebhookEvent>
{
    handle(event: WhatsappUpdatedWebhookEvent): void
    {
        // console.log('UpdatedWebhookEvent: ', event);
    }
}
