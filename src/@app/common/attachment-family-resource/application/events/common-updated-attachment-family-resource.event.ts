export class CommonUpdatedAttachmentFamilyResourceEvent
{
    constructor(
        public readonly attachmentFamilyId: string,
        public readonly resourceId: string,
    ) {}
}
