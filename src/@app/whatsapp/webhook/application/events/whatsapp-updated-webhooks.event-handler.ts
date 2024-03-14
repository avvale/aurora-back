import { WhatsappUpdatedWebhooksEvent } from '@app/whatsapp/webhook';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(WhatsappUpdatedWebhooksEvent)
export class WhatsappUpdatedWebhooksEventHandler implements IEventHandler<WhatsappUpdatedWebhooksEvent>
{
    handle(event: WhatsappUpdatedWebhooksEvent): void
    {
        // console.log('WhatsappUpdatedWebhooksEvent: ', event);
    }
}
