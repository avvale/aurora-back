import { CommonUpdatedAttachmentFamilyResourceEvent } from './common-updated-attachment-family-resource.event';

export class CommonUpdatedAttachmentFamiliesResourcesEvent
{
    constructor(
        public readonly attachmentFamiliesResources: CommonUpdatedAttachmentFamilyResourceEvent[],
    ) {}
}
