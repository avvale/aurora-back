import { CQMetadata } from '@aurorajs.dev/core';

export class NotificationRawSQLInboxesQuery
{
    constructor(
        public readonly rawSQL?: string,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
