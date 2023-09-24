import { CommonDeletedAttachmentFamilyResourceEvent } from '@app/common/attachment-family-resource';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(CommonDeletedAttachmentFamilyResourceEvent)
export class CommonDeletedAttachmentFamilyResourceEventHandler implements IEventHandler<CommonDeletedAttachmentFamilyResourceEvent>
{
    handle(event: CommonDeletedAttachmentFamilyResourceEvent): void
    {
        // console.log('CommonDeletedAttachmentFamilyResourceEvent: ', event);
    }
}
