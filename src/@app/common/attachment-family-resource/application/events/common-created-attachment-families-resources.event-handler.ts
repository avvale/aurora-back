import { CommonCreatedAttachmentFamiliesResourcesEvent } from '@app/common/attachment-family-resource';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(CommonCreatedAttachmentFamiliesResourcesEvent)
export class CommonCreatedAttachmentFamiliesResourcesEventHandler implements IEventHandler<CommonCreatedAttachmentFamiliesResourcesEvent>
{
    handle(event: CommonCreatedAttachmentFamiliesResourcesEvent): void
    {
        // console.log('CreatedAttachmentFamiliesResourcesEvent: ', event);
    }
}
