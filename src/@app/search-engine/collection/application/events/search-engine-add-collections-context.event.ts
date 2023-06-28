import { AggregateRoot } from '@nestjs/cqrs';
import { SearchEngineCollection } from '../../domain/search-engine-collection.aggregate';
import { SearchEngineCreatedCollectionEvent } from './search-engine-created-collection.event';
import { SearchEngineCreatedCollectionsEvent } from './search-engine-created-collections.event';
import { SearchEngineUpdatedCollectionEvent } from './search-engine-updated-collection.event';
import { SearchEngineUpdatedCollectionsEvent } from './search-engine-updated-collections.event';
import { SearchEngineDeletedCollectionEvent } from './search-engine-deleted-collection.event';
import { SearchEngineDeletedCollectionsEvent } from './search-engine-deleted-collections.event';

export class SearchEngineAddCollectionsContextEvent extends AggregateRoot
{
    constructor(
        public readonly aggregateRoots: SearchEngineCollection[] = [],
    )
    {
        super();
    }

    *[Symbol.iterator]()
    {
        for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
    }

    created(): void
    {
        this.apply(
            new SearchEngineCreatedCollectionsEvent(
                this.aggregateRoots.map(collection =>
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

    updated(): void
    {
        this.apply(
            new SearchEngineUpdatedCollectionsEvent(
                this.aggregateRoots.map(collection =>
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

    deleted(): void
    {
        this.apply(
            new SearchEngineDeletedCollectionsEvent(
                this.aggregateRoots.map(collection =>
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