import { CommonUpdatedAttachmentFamilyResourceEvent } from '@app/common/attachment-family-resource';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(CommonUpdatedAttachmentFamilyResourceEvent)
export class CommonUpdatedAttachmentFamilyResourceEventHandler implements IEventHandler<CommonUpdatedAttachmentFamilyResourceEvent>
{
    handle(event: CommonUpdatedAttachmentFamilyResourceEvent): void
    {
        // console.log('UpdatedAttachmentFamilyResourceEvent: ', event);
    }
}
