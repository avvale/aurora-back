import { WhatsappDeletedWebhookEvent } from '@app/whatsapp/webhook';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(WhatsappDeletedWebhookEvent)
export class WhatsappDeletedWebhookEventHandler implements IEventHandler<WhatsappDeletedWebhookEvent>
{
    handle(event: WhatsappDeletedWebhookEvent): void
    {
        // console.log('WhatsappDeletedWebhookEvent: ', event);
    }
}
