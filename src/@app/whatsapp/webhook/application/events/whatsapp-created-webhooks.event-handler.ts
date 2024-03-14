import { WhatsappCreatedWebhooksEvent } from '@app/whatsapp/webhook';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(WhatsappCreatedWebhooksEvent)
export class WhatsappCreatedWebhooksEventHandler implements IEventHandler<WhatsappCreatedWebhooksEvent>
{
    handle(event: WhatsappCreatedWebhooksEvent): void
    {
        // console.log('CreatedWebhooksEvent: ', event);
    }
}
