import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class CommonUpdateAttachmentFamilyResourceByIdCommand
{
    constructor(
        public readonly payload: {
            attachmentFamilyId: string;
            resourceId: string;
        },
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
