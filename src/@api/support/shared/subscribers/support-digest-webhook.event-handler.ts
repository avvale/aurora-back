import { ToolsDigestedWebhookEvent } from '@app/tools/webhook';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { head } from 'lodash';

@EventsHandler(ToolsDigestedWebhookEvent)
export class SupportDigestedWebhookEventHandler
    implements IEventHandler<ToolsDigestedWebhookEvent>
{
    handle(payload: ToolsDigestedWebhookEvent): void {
        switch (payload.event.payload.payload.event) {
            case 'taskStatusUpdated':
                console.log(payload.event.payload.headers['x-signature']);
                const taskId = payload.event.payload.payload.task_id;
                const firstHistory = head(
                    payload.event.payload.payload.history_items,
                );

                console.log(firstHistory.after);

                break;
        }
    }
}
