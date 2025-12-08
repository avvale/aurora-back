import { SupportUpdateIssuesCommand } from '@app/support/issue';
import {
    ToolsDigestedWebhookEvent,
    ToolsFindWebhookQuery,
} from '@app/tools/webhook';
import { Crypt, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { BadRequestException } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { head } from 'lodash';

@EventsHandler(ToolsDigestedWebhookEvent)
export class SupportDigestedWebhookEventHandler
    implements IEventHandler<ToolsDigestedWebhookEvent> {
    constructor(
        private readonly queryBus: IQueryBus,
        private readonly commandBus: ICommandBus,
    ) { }

    async handle(payload: ToolsDigestedWebhookEvent): Promise<void> {
        switch (payload.event.payload.payload.event) {
            case 'taskStatusUpdated':
                // set headers to lowercase
                const lowercasedHeaders = Object.fromEntries(
                    Object.entries(payload.event.payload.headers).map(
                        ([key, value]) => [key.toLowerCase(), value],
                    ),
                );

                // get webhook by external id
                const webhook = await this.queryBus.ask(
                    new ToolsFindWebhookQuery({
                        where: {
                            externalId:
                                payload.event.payload.payload.webhook_id,
                        },
                    }),
                );

                if (!webhook) {
                    throw new BadRequestException(
                        `Webhook with external id ${payload.event.payload.payload.webhook_id} not found`,
                    );
                }

                const signature = Crypt.signature(
                    webhook.secret,
                    JSON.stringify(payload.event.payload.payload),
                );

                if (signature !== lowercasedHeaders['x-signature']) {
                    throw new BadRequestException(
                        `Invalid signature for webhook with external id ${payload.event.payload.payload.webhook_id}`,
                    );
                }

                const firstHistory = head(
                    payload.event.payload.payload.history_items,
                );

                void this.commandBus.dispatch(
                    new SupportUpdateIssuesCommand(
                        {
                            externalStatus: firstHistory.after.status,
                            externalColorStatus: firstHistory.after.color,
                        },
                        {
                            where: {
                                externalId: payload.event.payload.payload.task_id,
                            },
                        },
                    ),
                );

                break;
        }
    }
}
