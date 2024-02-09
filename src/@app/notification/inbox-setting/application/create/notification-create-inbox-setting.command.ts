import { CQMetadata } from '@aurorajs.dev/core';

export class NotificationCreateInboxSettingCommand
{
    constructor(
        public readonly payload: {
            id: string;
            accountId: string;
            sort: number;
        },
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
