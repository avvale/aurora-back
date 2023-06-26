import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
import {
    SearchEngineCollectionId,
    SearchEngineCollectionName,
    SearchEngineCollectionAlias,
    SearchEngineCollectionDocumentsNumber,
    SearchEngineCollectionDefaultSortingField,
    SearchEngineCollectionNumMemoryShards,
    SearchEngineCollectionTimestampCreatedAt,
    SearchEngineCollectionIsEnableNestedFields,
    SearchEngineCollectionCreatedAt,
    SearchEngineCollectionUpdatedAt,
    SearchEngineCollectionDeletedAt,
} from '../../domain/value-objects';
import { SearchEngineICollectionRepository } from '../../domain/search-engine-collection.repository';
import { SearchEngineCollection } from '../../domain/search-engine-collection.aggregate';
import { SearchEngineAddCollectionsContextEvent } from '../events/search-engine-add-collections-context.event';

@Injectable()
export class SearchEngineUpdateCollectionsService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: SearchEngineICollectionRepository,
    ) {}

    async main(
        payload: {
            id?: SearchEngineCollectionId;
            name?: SearchEngineCollectionName;
            alias?: SearchEngineCollectionAlias;
            documentsNumber?: SearchEngineCollectionDocumentsNumber;
            defaultSortingField?: SearchEngineCollectionDefaultSortingField;
            numMemoryShards?: SearchEngineCollectionNumMemoryShards;
            timestampCreatedAt?: SearchEngineCollectionTimestampCreatedAt;
            isEnableNestedFields?: SearchEngineCollectionIsEnableNestedFields;
        },
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const collection = SearchEngineCollection.register(
            payload.id,
            payload.name,
            payload.alias,
            payload.documentsNumber,
            payload.defaultSortingField,
            payload.numMemoryShards,
            payload.timestampCreatedAt,
            payload.isEnableNestedFields,
            null, // createdAt
            new SearchEngineCollectionUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );


        // update
        await this.repository.update(
            collection,
            {
                queryStatement,
                constraint,
                cQMetadata,
                updateOptions: cQMetadata?.repositoryOptions,
            },
        );

        // get objects to delete
        const collections = await this.repository.get(
            {
                queryStatement,
                constraint,
                cQMetadata,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const collectionsRegister = this.publisher.mergeObjectContext(
            new SearchEngineAddCollectionsContextEvent(collections),
        );

        collectionsRegister.updated(); // apply event to model events
        collectionsRegister.commit(); // commit all events of model
    }
}