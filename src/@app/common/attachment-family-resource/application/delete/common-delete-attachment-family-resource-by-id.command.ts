import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';

export class CommonDeleteAttachmentFamilyResourceByIdCommand
{
    constructor(
        public readonly attachmentFamilyId: string,
        public readonly resourceId: string,
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
