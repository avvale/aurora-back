import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';

export class CommonFindAttachmentFamilyResourceByIdQuery
{
    constructor(
        public readonly attachmentFamilyId: string,
        public readonly resourceId: string,
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
