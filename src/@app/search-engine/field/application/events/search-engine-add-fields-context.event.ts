import { AggregateRoot } from '@nestjs/cqrs';
import { SearchEngineField } from '../../domain/search-engine-field.aggregate';
import { SearchEngineCreatedFieldEvent } from './search-engine-created-field.event';
import { SearchEngineCreatedFieldsEvent } from './search-engine-created-fields.event';
import { SearchEngineUpdatedFieldEvent } from './search-engine-updated-field.event';
import { SearchEngineUpdatedFieldsEvent } from './search-engine-updated-fields.event';
import { SearchEngineDeletedFieldEvent } from './search-engine-deleted-field.event';
import { SearchEngineDeletedFieldsEvent } from './search-engine-deleted-fields.event';

export class SearchEngineAddFieldsContextEvent extends AggregateRoot
{
    constructor(
        public readonly aggregateRoots: SearchEngineField[] = [],
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
            new SearchEngineCreatedFieldsEvent(
                this.aggregateRoots.map(field =>
                    new SearchEngineCreatedFieldEvent(
                        field.id.value,
                        field.collectionId.value,
                        field.name.value,
                        field.type.value,
                        field.isNullable.value,
                        field.createdAt?.value,
                        field.updatedAt?.value,
                        field.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updated(): void
    {
        this.apply(
            new SearchEngineUpdatedFieldsEvent(
                this.aggregateRoots.map(field =>
                    new SearchEngineUpdatedFieldEvent(
                        field.id.value,
                        field.collectionId.value,
                        field.name.value,
                        field.type.value,
                        field.isNullable.value,
                        field.createdAt?.value,
                        field.updatedAt?.value,
                        field.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    deleted(): void
    {
        this.apply(
            new SearchEngineDeletedFieldsEvent(
                this.aggregateRoots.map(field =>
                    new SearchEngineDeletedFieldEvent(
                        field.id.value,
                        field.collectionId.value,
                        field.name.value,
                        field.type.value,
                        field.isNullable.value,
                        field.createdAt?.value,
                        field.updatedAt?.value,
                        field.deletedAt?.value,
                    ),
                ),
            ),
        );
    }
}
