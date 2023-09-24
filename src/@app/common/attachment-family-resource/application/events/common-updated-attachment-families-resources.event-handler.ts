import { CommonUpdatedAttachmentFamiliesResourcesEvent } from '@app/common/attachment-family-resource';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(CommonUpdatedAttachmentFamiliesResourcesEvent)
export class CommonUpdatedAttachmentFamiliesResourcesEventHandler implements IEventHandler<CommonUpdatedAttachmentFamiliesResourcesEvent>
{
    handle(event: CommonUpdatedAttachmentFamiliesResourcesEvent): void
    {
        // console.log('CommonUpdatedAttachmentFamiliesResourcesEvent: ', event);
    }
}
