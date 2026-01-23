import {
  SearchEngineAddCollectionsContextEvent,
  SearchEngineCollection,
  SearchEngineICollectionRepository,
} from '@app/search-engine/collection';
import {
  SearchEngineCollectionAlias,
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
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class SearchEngineUpdateCollectionsService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: SearchEngineICollectionRepository,
  ) {}

  async main(
    payload: {
      id?: SearchEngineCollectionId;
      name?: SearchEngineCollectionName;
      alias?: SearchEngineCollectionAlias;
      status?: SearchEngineCollectionStatus;
      documentsNumber?: SearchEngineCollectionDocumentsNumber;
      defaultSortingField?: SearchEngineCollectionDefaultSortingField;
      numMemoryShards?: SearchEngineCollectionNumMemoryShards;
      timestampCreatedAt?: SearchEngineCollectionTimestampCreatedAt;
      isEnableNestedFields?: SearchEngineCollectionIsEnableNestedFields;
    },
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // create aggregate with factory pattern
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
      null, // createdAt
      new SearchEngineCollectionUpdatedAt({ currentTimestamp: true }),
      null, // deletedAt
    );

    // update
    await this.repository.update(collection, {
      queryStatement,
      constraint,
      cQMetadata,
      updateOptions: cQMetadata?.repositoryOptions,
    });

    // get objects to delete
    const collections = await this.repository.get({
      queryStatement,
      constraint,
      cQMetadata,
    });

    // merge EventBus methods with object returned by the repository, to be able to apply and commit events
    const collectionsRegister = this.publisher.mergeObjectContext(
      new SearchEngineAddCollectionsContextEvent(collections),
    );

    collectionsRegister.updated(); // apply event to model events
    collectionsRegister.commit(); // commit all events of model
  }
}
