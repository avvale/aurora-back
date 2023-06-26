import { SearchEngineCollection } from '../../domain/search-engine-collection.aggregate';
import { SearchEngineICollectionRepository } from '../../domain/search-engine-collection.repository';
import {
    SearchEngineCollectionCreatedAt,
    SearchEngineCollectionDefaultSortingField,
    SearchEngineCollectionDeletedAt,
    SearchEngineCollectionDocumentsNumber,
    SearchEngineCollectionId,
    SearchEngineCollectionIsEnableNestedFields,
    SearchEngineCollectionName,
    SearchEngineCollectionNumMemoryShards,
    SearchEngineCollectionTimestampCreatedAt,
    SearchEngineCollectionUpdatedAt,
} from '../../domain/value-objects';
import { SearchEngineAddCollectionsContextEvent } from '../events/search-engine-add-collections-context.event';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class SearchEngineCreateCollectionsService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: SearchEngineICollectionRepository,
    ) {}

    async main(
        collections: {
            id: SearchEngineCollectionId;
            name: SearchEngineCollectionName;
            documentsNumber: SearchEngineCollectionDocumentsNumber;
            defaultSortingField: SearchEngineCollectionDefaultSortingField;
            numMemoryShards: SearchEngineCollectionNumMemoryShards;
            timestampCreatedAt: SearchEngineCollectionTimestampCreatedAt;
            isEnableNestedFields: SearchEngineCollectionIsEnableNestedFields;
        } [],
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const aggregateCollections = collections.map(collection => SearchEngineCollection.register(
            collection.id,
            collection.name,
            collection.documentsNumber,
            collection.defaultSortingField,
            collection.numMemoryShards,
            collection.timestampCreatedAt,
            collection.isEnableNestedFields,
            new SearchEngineCollectionCreatedAt({ currentTimestamp: true }),
            new SearchEngineCollectionUpdatedAt({ currentTimestamp: true }),
            null, // deleteAt
        ));

        // insert
        await this.repository.insert(
            aggregateCollections,
            {
                insertOptions: cQMetadata?.repositoryOptions,
            },
        );

        // create AddCollectionsContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const collectionsRegistered = this.publisher.mergeObjectContext(new SearchEngineAddCollectionsContextEvent(aggregateCollections));

        collectionsRegistered.created(); // apply event to model events
        collectionsRegistered.commit(); // commit all events of model
    }
}