import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
import {
    SearchEngineFieldId,
    SearchEngineFieldCollectionId,
    SearchEngineFieldName,
    SearchEngineFieldType,
    SearchEngineFieldIsNullable,
    SearchEngineFieldCreatedAt,
    SearchEngineFieldUpdatedAt,
    SearchEngineFieldDeletedAt,
} from '../../domain/value-objects';
import { SearchEngineIFieldRepository } from '../../domain/search-engine-field.repository';
import { SearchEngineField } from '../../domain/search-engine-field.aggregate';
import { SearchEngineAddFieldsContextEvent } from '../events/search-engine-add-fields-context.event';

@Injectable()
export class SearchEngineUpdateFieldsService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: SearchEngineIFieldRepository,
    ) {}

    async main(
        payload: {
            id?: SearchEngineFieldId;
            collectionId?: SearchEngineFieldCollectionId;
            name?: SearchEngineFieldName;
            type?: SearchEngineFieldType;
            isNullable?: SearchEngineFieldIsNullable;
        },
        queryStatement?: QueryStatement,
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


        // update
        await this.repository.update(
            field,
            {
                queryStatement,
                constraint,
                cQMetadata,
                updateOptions: cQMetadata?.repositoryOptions,
            },
        );

        // get objects to delete
        const fields = await this.repository.get(
            {
                queryStatement,
                constraint,
                cQMetadata,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const fieldsRegister = this.publisher.mergeObjectContext(
            new SearchEngineAddFieldsContextEvent(fields),
        );

        fieldsRegister.updated(); // apply event to model events
        fieldsRegister.commit(); // commit all events of model
    }
}
