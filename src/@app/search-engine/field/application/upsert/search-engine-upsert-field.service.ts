import { SearchEngineField } from '../../domain/search-engine-field.aggregate';
import { SearchEngineIFieldRepository } from '../../domain/search-engine-field.repository';
import {
    SearchEngineFieldCollectionId,
    SearchEngineFieldCreatedAt,
    SearchEngineFieldDeletedAt,
    SearchEngineFieldId,
    SearchEngineFieldIsNullable,
    SearchEngineFieldName,
    SearchEngineFieldType,
    SearchEngineFieldUpdatedAt,
} from '../../domain/value-objects';
import { CQMetadata, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class SearchEngineUpsertFieldService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: SearchEngineIFieldRepository,
    ) {}

    async main(
        payload: {
            id: SearchEngineFieldId;
            collectionId: SearchEngineFieldCollectionId;
            name: SearchEngineFieldName;
            type: SearchEngineFieldType;
            isNullable: SearchEngineFieldIsNullable;
        },
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // upsert aggregate with factory pattern
        const field = SearchEngineField.register(
            payload.id,
            payload.collectionId,
            payload.name,
            payload.type,
            payload.isNullable,
            new SearchEngineFieldCreatedAt({ currentTimestamp: true }),
            new SearchEngineFieldUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        await this.repository
            .upsert(
                field,
                {
                    upsertOptions: cQMetadata?.repositoryOptions,
                },
            );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const fieldRegister = this.publisher.mergeObjectContext(
            field,
        );

        fieldRegister.created(field); // apply event to model events
        fieldRegister.commit(); // commit all events of model
    }
}