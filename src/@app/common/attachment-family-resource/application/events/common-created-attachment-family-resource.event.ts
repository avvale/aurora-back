export class CommonCreatedAttachmentFamilyResourceEvent
{
    constructor(
        public readonly attachmentFamilyId: string,
        public readonly resourceId: string,
    ) {}
}
