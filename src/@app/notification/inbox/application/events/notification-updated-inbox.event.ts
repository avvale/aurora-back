export class NotificationUpdatedInboxEvent
{
    constructor(
        public readonly id: string,
        public readonly tenantIds: string[],
        public readonly notificationId: string,
        public readonly sort: number,
        public readonly accountId: string,
        public readonly accountCode: string,
        public readonly isImportant: boolean,
        public readonly subject: string,
        public readonly body: string,
        public readonly attachments: any,
        public readonly isRead: boolean,
        public readonly isReadAtLeastOnce: boolean,
        public readonly meta: any,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
    ) {}
}
