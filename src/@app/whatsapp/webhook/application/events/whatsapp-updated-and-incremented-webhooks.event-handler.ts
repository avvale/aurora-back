import { WhatsappUpdatedAndIncrementedWebhooksEvent } from '@app/whatsapp/webhook';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(WhatsappUpdatedAndIncrementedWebhooksEvent)
export class WhatsappUpdatedAndIncrementedWebhooksEventHandler implements IEventHandler<WhatsappUpdatedAndIncrementedWebhooksEvent>
{
    handle(event: WhatsappUpdatedAndIncrementedWebhooksEvent): void
    {
        // console.log('WhatsappUpdatedAndIncrementedWebhooksEvent: ', event);
    }
}
