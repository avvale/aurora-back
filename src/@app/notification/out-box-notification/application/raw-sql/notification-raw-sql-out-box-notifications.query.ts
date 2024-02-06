import { CQMetadata } from '@aurorajs.dev/core';

export class NotificationRawSQLOutBoxNotificationsQuery
{
    constructor(
        public readonly rawSQL?: string,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
