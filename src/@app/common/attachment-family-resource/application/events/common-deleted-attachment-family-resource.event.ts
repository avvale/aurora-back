export class CommonDeletedAttachmentFamilyResourceEvent
{
    constructor(
        public readonly attachmentFamilyId: string,
        public readonly resourceId: string,
    ) {}
}
