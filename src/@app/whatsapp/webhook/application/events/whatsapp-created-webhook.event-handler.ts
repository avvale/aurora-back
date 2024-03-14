import { WhatsappCreatedWebhookEvent } from '@app/whatsapp/webhook';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(WhatsappCreatedWebhookEvent)
export class WhatsappCreatedWebhookEventHandler implements IEventHandler<WhatsappCreatedWebhookEvent>
{
    handle(event: WhatsappCreatedWebhookEvent): void
    {
        // console.log('WhatsappCreatedWebhookEvent: ', event);
    }
}
