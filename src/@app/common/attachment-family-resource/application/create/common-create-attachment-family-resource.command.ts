import { CQMetadata } from '@aurorajs.dev/core';

export class CommonCreateAttachmentFamilyResourceCommand
{
    constructor(
        public readonly payload: {
            attachmentFamilyId: string;
            resourceId: string;
        },
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
