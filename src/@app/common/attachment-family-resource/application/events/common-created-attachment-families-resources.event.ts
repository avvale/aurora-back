import { CommonCreatedAttachmentFamilyResourceEvent } from './common-created-attachment-family-resource.event';

export class CommonCreatedAttachmentFamiliesResourcesEvent
{
    constructor(
        public readonly attachmentFamiliesResources: CommonCreatedAttachmentFamilyResourceEvent[],
    ) {}
}
