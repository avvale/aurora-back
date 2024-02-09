import { CQMetadata } from '@aurorajs.dev/core';

export class NotificationRawSQLOutboxesQuery
{
    constructor(
        public readonly rawSQL?: string,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
