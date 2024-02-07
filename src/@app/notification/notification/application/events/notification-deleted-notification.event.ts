export class NotificationDeletedNotificationEvent
{
    constructor(
        public readonly id: string,
        public readonly tenantId: string,
        public readonly status: string,
        public readonly accountIds: string[],
        public readonly tenantIds: string[],
        public readonly scopes: string[],
        public readonly sendAt: string,
        public readonly isImportant: boolean,
        public readonly subject: string,
        public readonly body: string,
        public readonly attachments: any,
        public readonly totalRecipients: number,
        public readonly reads: number,
        public readonly meta: any,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
    ) {}
}
