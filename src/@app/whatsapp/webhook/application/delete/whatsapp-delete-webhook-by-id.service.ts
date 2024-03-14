import { WhatsappIWebhookRepository } from '@app/whatsapp/webhook';
import { WhatsappWebhookId } from '@app/whatsapp/webhook/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class WhatsappDeleteWebhookByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: WhatsappIWebhookRepository,
    ) {}

    async main(
        id: WhatsappWebhookId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get object to delete
        const webhook = await this.repository
            .findById(
                id,
                {
                    constraint,
                    cQMetadata,
                },
            );

        // it is not necessary to pass the constraint in the delete, if the object
        // is not found in the findById, an exception will be thrown.
        await this.repository
            .deleteById(
                webhook.id,
                {
                    deleteOptions: cQMetadata?.repositoryOptions,
                    cQMetadata,
                },
            );

        // insert EventBus in object, to be able to apply and commit events
        const webhookRegister = this.publisher.mergeObjectContext(webhook);

        webhookRegister.deleted(webhook); // apply event to model events
        webhookRegister.commit(); // commit all events of model
    }
}
