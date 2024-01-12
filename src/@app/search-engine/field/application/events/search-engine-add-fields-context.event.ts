import { SearchEngineCreatedFieldEvent, SearchEngineCreatedFieldsEvent, SearchEngineDeletedFieldEvent, SearchEngineDeletedFieldsEvent, SearchEngineField, SearchEngineUpdatedFieldEvent, SearchEngineUpdatedFieldsEvent } from '@app/search-engine/field';
import { AggregateRoot } from '@nestjs/cqrs';

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
