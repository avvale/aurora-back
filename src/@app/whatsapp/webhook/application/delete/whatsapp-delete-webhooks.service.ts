import { WhatsappAddWebhooksContextEvent, WhatsappIWebhookRepository } from '@app/whatsapp/webhook';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class WhatsappDeleteWebhooksService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: WhatsappIWebhookRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get objects to delete
        const webhooks = await this.repository.get({
            queryStatement,
            constraint,
            cQMetadata,
        });

        if (webhooks.length === 0) return;

        await this.repository.delete({
            queryStatement,
            constraint,
            cQMetadata,
            deleteOptions: cQMetadata?.repositoryOptions,
        });

        // create AddWebhooksContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const webhooksRegistered = this.publisher.mergeObjectContext(
            new WhatsappAddWebhooksContextEvent(webhooks),
        );

        webhooksRegistered.deleted(); // apply event to model events
        webhooksRegistered.commit(); // commit all events of model
    }
}
