import { SearchEngineAddFieldsContextEvent, SearchEngineField, SearchEngineIFieldRepository } from '@app/search-engine/field';
import {
    SearchEngineFieldCollectionId,
    SearchEngineFieldCreatedAt,
    SearchEngineFieldDeletedAt,
    SearchEngineFieldId,
    SearchEngineFieldIsNullable,
    SearchEngineFieldName,
    SearchEngineFieldType,
    SearchEngineFieldUpdatedAt,
} from '@app/search-engine/field/domain/value-objects';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class SearchEngineCreateFieldsService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: SearchEngineIFieldRepository,
    ) {}

    async main(
        fields: {
            id: SearchEngineFieldId;
            collectionId: SearchEngineFieldCollectionId;
            name: SearchEngineFieldName;
            type: SearchEngineFieldType;
            isNullable: SearchEngineFieldIsNullable;
        } [],
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const aggregateFields = fields.map(field => SearchEngineField.register(
            field.id,
            field.collectionId,
            field.name,
            field.type,
            field.isNullable,
            new SearchEngineFieldCreatedAt({ currentTimestamp: true }),
            new SearchEngineFieldUpdatedAt({ currentTimestamp: true }),
            null, // deleteAt
        ));

        // insert
        await this.repository.insert(
            aggregateFields,
            {
                insertOptions: cQMetadata?.repositoryOptions,
            },
        );

        // create AddFieldsContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const fieldsRegistered = this.publisher.mergeObjectContext(new SearchEngineAddFieldsContextEvent(aggregateFields));

        fieldsRegistered.created(); // apply event to model events
        fieldsRegistered.commit(); // commit all events of model
    }
}
