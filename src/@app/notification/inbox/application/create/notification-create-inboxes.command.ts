import { CQMetadata } from '@aurorajs.dev/core';

export class NotificationCreateInboxesCommand
{
    constructor(
        public readonly payload: {
            id: string;
            tenantIds?: string[];
            notificationId: string;
            sort: number;
            accountId: string;
            accountCode?: string;
            isImportant: boolean;
            subject: string;
            body: string;
            attachments?: any;
            isRead: boolean;
            isReadAtLeastOnce: boolean;
            meta?: any;
        } [],
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
