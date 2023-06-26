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
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class SearchEngineUpdateFieldByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: SearchEngineIFieldRepository,
    ) {}

    async main(
        payload: {
            id: SearchEngineFieldId;
            collectionId?: SearchEngineFieldCollectionId;
            name?: SearchEngineFieldName;
            type?: SearchEngineFieldType;
            isNullable?: SearchEngineFieldIsNullable;
        },
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const field = SearchEngineField.register(
            payload.id,
            payload.collectionId,
            payload.name,
            payload.type,
            payload.isNullable,
            null, // createdAt
            new SearchEngineFieldUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        // update by id
        await this.repository.updateById(
            field,
            {
                constraint,
                cQMetadata,
                updateByIdOptions: cQMetadata?.repositoryOptions,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const fieldRegister = this.publisher.mergeObjectContext(
            field,
        );

        fieldRegister.updated(field); // apply event to model events
        fieldRegister.commit(); // commit all events of model
    }
}