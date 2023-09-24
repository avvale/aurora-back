import { CommonDeletedAttachmentFamilyResourceEvent } from './common-deleted-attachment-family-resource.event';

export class CommonDeletedAttachmentFamiliesResourcesEvent
{
    constructor(
        public readonly attachmentFamiliesResources: CommonDeletedAttachmentFamilyResourceEvent[],
    ) {}
}
