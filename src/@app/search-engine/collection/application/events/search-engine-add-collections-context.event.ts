import {
  SearchEngineCollection,
  SearchEngineCreatedCollectionEvent,
  SearchEngineCreatedCollectionsEvent,
  SearchEngineDeletedCollectionEvent,
  SearchEngineDeletedCollectionsEvent,
  SearchEngineUpdatedCollectionEvent,
  SearchEngineUpdatedCollectionsEvent,
} from '@app/search-engine/collection';
import { AggregateRoot } from '@nestjs/cqrs';

export class SearchEngineAddCollectionsContextEvent extends AggregateRoot {
  constructor(public readonly aggregateRoots: SearchEngineCollection[] = []) {
    super();
  }

  *[Symbol.iterator]() {
    for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
  }

  created(): void {
    this.apply(
      new SearchEngineCreatedCollectionsEvent(
        this.aggregateRoots.map(
          (collection) =>
            new SearchEngineCreatedCollectionEvent(
              collection.id.value,
              collection.name.value,
              collection.alias?.value,
              collection.status.value,
              collection.documentsNumber?.value,
              collection.defaultSortingField?.value,
              collection.numMemoryShards?.value,
              collection.timestampCreatedAt?.value,
              collection.isEnableNestedFields.value,
              collection.createdAt?.value,
              collection.updatedAt?.value,
              collection.deletedAt?.value,
            ),
        ),
      ),
    );
  }

  updated(): void {
    this.apply(
      new SearchEngineUpdatedCollectionsEvent(
        this.aggregateRoots.map(
          (collection) =>
            new SearchEngineUpdatedCollectionEvent(
              collection.id.value,
              collection.name.value,
              collection.alias?.value,
              collection.status.value,
              collection.documentsNumber?.value,
              collection.defaultSortingField?.value,
              collection.numMemoryShards?.value,
              collection.timestampCreatedAt?.value,
              collection.isEnableNestedFields.value,
              collection.createdAt?.value,
              collection.updatedAt?.value,
              collection.deletedAt?.value,
            ),
        ),
      ),
    );
  }

  deleted(): void {
    this.apply(
      new SearchEngineDeletedCollectionsEvent(
        this.aggregateRoots.map(
          (collection) =>
            new SearchEngineDeletedCollectionEvent(
              collection.id.value,
              collection.name.value,
              collection.alias?.value,
              collection.status.value,
              collection.documentsNumber?.value,
              collection.defaultSortingField?.value,
              collection.numMemoryShards?.value,
              collection.timestampCreatedAt?.value,
              collection.isEnableNestedFields.value,
              collection.createdAt?.value,
              collection.updatedAt?.value,
              collection.deletedAt?.value,
            ),
        ),
      ),
    );
  }
}
