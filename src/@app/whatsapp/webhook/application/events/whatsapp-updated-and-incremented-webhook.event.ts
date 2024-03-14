export class WhatsappUpdatedAndIncrementedWebhookEvent
{
    constructor(
        public readonly id: string,
        public readonly payload: any,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
    ) {}
}
