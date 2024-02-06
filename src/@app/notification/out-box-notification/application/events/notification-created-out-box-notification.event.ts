export class NotificationCreatedOutBoxNotificationEvent
{
    constructor(
        public readonly id: string,
        public readonly sort: number,
        public readonly tenantId: string,
        public readonly accountIds: string[],
        public readonly accountTenantOperator: string,
        public readonly tenantIds: string[],
        public readonly scopes: string[],
        public readonly isImportant: boolean,
        public readonly subject: string,
        public readonly body: string,
        public readonly attachments: any,
        public readonly meta: any,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
    ) {}
}
