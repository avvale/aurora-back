import { CommonCreatedAttachmentFamilyResourceEvent } from '@app/common/attachment-family-resource';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(CommonCreatedAttachmentFamilyResourceEvent)
export class CommonCreatedAttachmentFamilyResourceEventHandler implements IEventHandler<CommonCreatedAttachmentFamilyResourceEvent>
{
    handle(event: CommonCreatedAttachmentFamilyResourceEvent): void
    {
        // console.log('CommonCreatedAttachmentFamilyResourceEvent: ', event);
    }
}
