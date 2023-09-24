import { CommonDeletedAttachmentFamiliesResourcesEvent } from '@app/common/attachment-family-resource';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(CommonDeletedAttachmentFamiliesResourcesEvent)
export class CommonDeletedAttachmentFamiliesResourcesEventHandler implements IEventHandler<CommonDeletedAttachmentFamiliesResourcesEvent>
{
    handle(event: CommonDeletedAttachmentFamiliesResourcesEvent): void
    {
        // console.log('DeletedAttachmentFamiliesResourcesEvent: ', event);
    }
}
