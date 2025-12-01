/* eslint-disable key-spacing */
import { ToolsDigestedWebhookEvent } from '@app/tools/webhook';
import { ToolsWebhookPayload as ToolsWebhookPayloadValueObject } from '@app/tools/webhook/domain/value-objects';
import { LiteralObject } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class ToolsWebhookPayload extends AggregateRoot {
    payload: ToolsWebhookPayloadValueObject;

    constructor(payload: ToolsWebhookPayloadValueObject) {
        super();
        this.payload = payload;
    }

    static register(
        payload: ToolsWebhookPayloadValueObject,
    ): ToolsWebhookPayload {
        return new ToolsWebhookPayload(payload);
    }

    digested(event: { payload: ToolsWebhookPayload }): void {
        this.apply(
            new ToolsDigestedWebhookEvent({
                payload: {
                    payload: event.payload.payload.value,
                },
            }),
        );
    }

    toDTO(): LiteralObject {
        return {
            payload: this.payload.value,
        };
    }

    // function called to get data for repository side effect methods
    toRepository(): LiteralObject {
        return {
            payload: this.payload.value,
        };
    }
}
