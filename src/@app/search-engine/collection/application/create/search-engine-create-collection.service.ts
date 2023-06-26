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
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class SearchEngineCreateCollectionService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: SearchEngineICollectionRepository,
    ) {}

    async main(
        payload: {
            id: SearchEngineCollectionId;
            name: SearchEngineCollectionName;
            documentsNumber: SearchEngineCollectionDocumentsNumber;
            defaultSortingField: SearchEngineCollectionDefaultSortingField;
            numMemoryShards: SearchEngineCollectionNumMemoryShards;
            timestampCreatedAt: SearchEngineCollectionTimestampCreatedAt;
            isEnableNestedFields: SearchEngineCollectionIsEnableNestedFields;
        },
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const collection = SearchEngineCollection.register(
            payload.id,
            payload.name,
            payload.documentsNumber,
            payload.defaultSortingField,
            payload.numMemoryShards,
            payload.timestampCreatedAt,
            payload.isEnableNestedFields,
            new SearchEngineCollectionCreatedAt({ currentTimestamp: true }),
            new SearchEngineCollectionUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        await this.repository.create(
            collection,
            {
                createOptions: cQMetadata?.repositoryOptions,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const collectionRegister = this.publisher.mergeObjectContext(
            collection,
        );

        collectionRegister.created(collection); // apply event to model events
        collectionRegister.commit(); // commit all events of model
    }
}