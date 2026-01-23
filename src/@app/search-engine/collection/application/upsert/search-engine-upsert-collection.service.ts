import {
  SearchEngineCollection,
  SearchEngineICollectionRepository,
} from '@app/search-engine/collection';
import {
  SearchEngineCollectionAlias,
  SearchEngineCollectionCreatedAt,
  SearchEngineCollectionDefaultSortingField,
  SearchEngineCollectionDocumentsNumber,
  SearchEngineCollectionId,
  SearchEngineCollectionIsEnableNestedFields,
  SearchEngineCollectionName,
  SearchEngineCollectionNumMemoryShards,
  SearchEngineCollectionStatus,
  SearchEngineCollectionTimestampCreatedAt,
  SearchEngineCollectionUpdatedAt,
} from '@app/search-engine/collection/domain/value-objects';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class SearchEngineUpsertCollectionService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: SearchEngineICollectionRepository,
  ) {}

  async main(
    payload: {
      id: SearchEngineCollectionId;
      name: SearchEngineCollectionName;
      alias: SearchEngineCollectionAlias;
      status: SearchEngineCollectionStatus;
      documentsNumber: SearchEngineCollectionDocumentsNumber;
      defaultSortingField: SearchEngineCollectionDefaultSortingField;
      numMemoryShards: SearchEngineCollectionNumMemoryShards;
      timestampCreatedAt: SearchEngineCollectionTimestampCreatedAt;
      isEnableNestedFields: SearchEngineCollectionIsEnableNestedFields;
    },
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // upsert aggregate with factory pattern
    const collection = SearchEngineCollection.register(
      payload.id,
      payload.name,
      payload.alias,
      payload.status,
      payload.documentsNumber,
      payload.defaultSortingField,
      payload.numMemoryShards,
      payload.timestampCreatedAt,
      payload.isEnableNestedFields,
      new SearchEngineCollectionCreatedAt({ currentTimestamp: true }),
      new SearchEngineCollectionUpdatedAt({ currentTimestamp: true }),
      null, // deletedAt
    );

    await this.repository.upsert(collection, {
      upsertOptions: cQMetadata?.repositoryOptions,
    });

    // merge EventBus methods with object returned by the repository, to be able to apply and commit events
    const collectionRegister = this.publisher.mergeObjectContext(collection);

    collectionRegister.created(collection); // apply event to model events
    collectionRegister.commit(); // commit all events of model
  }
}
