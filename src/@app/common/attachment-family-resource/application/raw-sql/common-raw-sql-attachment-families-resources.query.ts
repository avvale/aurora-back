import { CQMetadata } from '@aurorajs.dev/core';

export class CommonRawSQLAttachmentFamiliesResourcesQuery
{
    constructor(
        public readonly rawSQL?: string,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
