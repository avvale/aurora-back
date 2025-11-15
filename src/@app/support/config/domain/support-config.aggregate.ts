/* eslint-disable key-spacing */
import {
    SupportCreatedConfigEvent,
    SupportDeletedConfigEvent,
    SupportUpdatedConfigEvent,
} from '@app/support/config';
import {
    SupportConfigApiKey,
    SupportConfigCreatedAt,
    SupportConfigDeletedAt,
    SupportConfigId,
    SupportConfigListId,
    SupportConfigRowId,
    SupportConfigUpdatedAt,
} from '@app/support/config/domain/value-objects';
import { CQMetadata, LiteralObject } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class SupportConfig extends AggregateRoot {
    id: SupportConfigId;
    rowId: SupportConfigRowId;
    apiKey: SupportConfigApiKey;
    listId: SupportConfigListId;
    createdAt: SupportConfigCreatedAt;
    updatedAt: SupportConfigUpdatedAt;
    deletedAt: SupportConfigDeletedAt;

    constructor(
        id: SupportConfigId,
        rowId: SupportConfigRowId,
        apiKey: SupportConfigApiKey,
        listId: SupportConfigListId,
        createdAt: SupportConfigCreatedAt,
        updatedAt: SupportConfigUpdatedAt,
        deletedAt: SupportConfigDeletedAt,
    ) {
        super();
        this.id = id;
        this.rowId = rowId;
        this.apiKey = apiKey;
        this.listId = listId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }

    static register(
        id: SupportConfigId,
        rowId: SupportConfigRowId,
        apiKey: SupportConfigApiKey,
        listId: SupportConfigListId,
        createdAt: SupportConfigCreatedAt,
        updatedAt: SupportConfigUpdatedAt,
        deletedAt: SupportConfigDeletedAt,
    ): SupportConfig {
        return new SupportConfig(
            id,
            rowId,
            apiKey,
            listId,
            createdAt,
            updatedAt,
            deletedAt,
        );
    }

    created(event: { payload: SupportConfig; cQMetadata?: CQMetadata }): void {
        this.apply(
            new SupportCreatedConfigEvent({
                payload: {
                    id: event.payload.id.value,
                    apiKey: event.payload.apiKey?.value,
                    listId: event.payload.listId?.value,
                    createdAt: event.payload.createdAt?.value,
                    updatedAt: event.payload.updatedAt?.value,
                    deletedAt: event.payload.deletedAt?.value,
                },
                cQMetadata: event.cQMetadata,
            }),
        );
    }

    updated(event: { payload: SupportConfig; cQMetadata?: CQMetadata }): void {
        this.apply(
            new SupportUpdatedConfigEvent({
                payload: {
                    id: event.payload.id?.value,
                    apiKey: event.payload.apiKey?.value,
                    listId: event.payload.listId?.value,
                    createdAt: event.payload.createdAt?.value,
                    updatedAt: event.payload.updatedAt?.value,
                    deletedAt: event.payload.deletedAt?.value,
                },
                cQMetadata: event.cQMetadata,
            }),
        );
    }

    deleted(event: { payload: SupportConfig; cQMetadata?: CQMetadata }): void {
        this.apply(
            new SupportDeletedConfigEvent({
                payload: {
                    id: event.payload.id.value,
                    rowId: event.payload.rowId.value,
                    apiKey: event.payload.apiKey?.value,
                    listId: event.payload.listId?.value,
                    createdAt: event.payload.createdAt?.value,
                    updatedAt: event.payload.updatedAt?.value,
                    deletedAt: event.payload.deletedAt?.value,
                },
                cQMetadata: event.cQMetadata,
            }),
        );
    }

    toDTO(): LiteralObject {
        return {
            id: this.id.value,
            rowId: this.rowId.value,
            apiKey: this.apiKey?.value,
            listId: this.listId?.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
        };
    }

    // function called to get data for repository side effect methods
    toRepository(): LiteralObject {
        return {
            id: this.id.value,
            apiKey: this.apiKey?.value,
            listId: this.listId?.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
        };
    }
}
