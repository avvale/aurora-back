export class ToolsDigestedWebhookEvent {
    constructor(
        public readonly event: {
            payload: {
                payload: any;
            };
        },
    ) {}
}
