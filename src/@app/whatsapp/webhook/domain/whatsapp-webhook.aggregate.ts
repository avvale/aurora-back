/* eslint-disable key-spacing */
import { WhatsappCreatedWebhookEvent, WhatsappDeletedWebhookEvent, WhatsappUpdatedWebhookEvent } from '@app/whatsapp/webhook';
import {
    WhatsappWebhookCreatedAt,
    WhatsappWebhookDeletedAt,
    WhatsappWebhookId,
    WhatsappWebhookPayload,
    WhatsappWebhookUpdatedAt,
} from '@app/whatsapp/webhook/domain/value-objects';
import { LiteralObject, Utils } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class WhatsappWebhook extends AggregateRoot
{
    id: WhatsappWebhookId;
    payload: WhatsappWebhookPayload;
    createdAt: WhatsappWebhookCreatedAt;
    updatedAt: WhatsappWebhookUpdatedAt;
    deletedAt: WhatsappWebhookDeletedAt;

    constructor(
        id: WhatsappWebhookId,
        payload: WhatsappWebhookPayload,
        createdAt: WhatsappWebhookCreatedAt,
        updatedAt: WhatsappWebhookUpdatedAt,
        deletedAt: WhatsappWebhookDeletedAt,
    )
    {
        super();
        this.id = id;
        this.payload = payload;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

    static register(
        id: WhatsappWebhookId,
        payload: WhatsappWebhookPayload,
        createdAt: WhatsappWebhookCreatedAt,
        updatedAt: WhatsappWebhookUpdatedAt,
        deletedAt: WhatsappWebhookDeletedAt,
    ): WhatsappWebhook
    {
        return new WhatsappWebhook(
            id,
            payload,
            createdAt,
            updatedAt,
            deletedAt,
        );
    }

    created(webhook: WhatsappWebhook): void
    {
        this.apply(
            new WhatsappCreatedWebhookEvent(
                webhook.id.value,
                webhook.payload.value,
                webhook.createdAt?.value,
                webhook.updatedAt?.value,
                webhook.deletedAt?.value,
            ),
        );
    }

    updated(webhook: WhatsappWebhook): void
    {
        this.apply(
            new WhatsappUpdatedWebhookEvent(
                webhook.id?.value,
                webhook.payload?.value,
                webhook.createdAt?.value,
                webhook.updatedAt?.value,
                webhook.deletedAt?.value,
            ),
        );
    }

    deleted(webhook: WhatsappWebhook): void
    {
        this.apply(
            new WhatsappDeletedWebhookEvent(
                webhook.id.value,
                webhook.payload.value,
                webhook.createdAt?.value,
                webhook.updatedAt?.value,
                webhook.deletedAt?.value,
            ),
        );
    }

    toDTO(): LiteralObject
    {
        return {
            id: this.id.value,
            payload: this.payload.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
        };
    }

    // function called to get data for repository side effect methods
    toRepository(): LiteralObject
    {
        return {
            id: this.id.value,
            payload: this.payload.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
        };
    }
}
