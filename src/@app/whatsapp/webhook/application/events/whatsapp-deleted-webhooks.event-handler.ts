import { WhatsappDeletedWebhooksEvent } from '@app/whatsapp/webhook';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(WhatsappDeletedWebhooksEvent)
export class WhatsappDeletedWebhooksEventHandler implements IEventHandler<WhatsappDeletedWebhooksEvent>
{
    handle(event: WhatsappDeletedWebhooksEvent): void
    {
        // console.log('DeletedWebhooksEvent: ', event);
    }
}
