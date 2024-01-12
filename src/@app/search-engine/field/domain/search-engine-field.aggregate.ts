/* eslint-disable key-spacing */
import { SearchEngineCollection } from '@app/search-engine/collection';
import { SearchEngineCreatedFieldEvent, SearchEngineDeletedFieldEvent, SearchEngineUpdatedFieldEvent } from '@app/search-engine/field';
import {
    SearchEngineFieldCollectionId,
    SearchEngineFieldCreatedAt,
    SearchEngineFieldDeletedAt,
    SearchEngineFieldId,
    SearchEngineFieldIsNullable,
    SearchEngineFieldName,
    SearchEngineFieldType,
    SearchEngineFieldUpdatedAt,
} from '@app/search-engine/field/domain/value-objects';
import { LiteralObject, Utils } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class SearchEngineField extends AggregateRoot
{
    id: SearchEngineFieldId;
    collectionId: SearchEngineFieldCollectionId;
    name: SearchEngineFieldName;
    type: SearchEngineFieldType;
    isNullable: SearchEngineFieldIsNullable;
    createdAt: SearchEngineFieldCreatedAt;
    updatedAt: SearchEngineFieldUpdatedAt;
    deletedAt: SearchEngineFieldDeletedAt;
    collection: SearchEngineCollection;

    constructor(
        id: SearchEngineFieldId,
        collectionId: SearchEngineFieldCollectionId,
        name: SearchEngineFieldName,
        type: SearchEngineFieldType,
        isNullable: SearchEngineFieldIsNullable,
        createdAt: SearchEngineFieldCreatedAt,
        updatedAt: SearchEngineFieldUpdatedAt,
        deletedAt: SearchEngineFieldDeletedAt,
        collection?: SearchEngineCollection,
    )
    {
        super();
        this.id = id;
        this.collectionId = collectionId;
        this.name = name;
        this.type = type;
        this.isNullable = isNullable;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
        this.collection = collection;
    }

    static register(
        id: SearchEngineFieldId,
        collectionId: SearchEngineFieldCollectionId,
        name: SearchEngineFieldName,
        type: SearchEngineFieldType,
        isNullable: SearchEngineFieldIsNullable,
        createdAt: SearchEngineFieldCreatedAt,
        updatedAt: SearchEngineFieldUpdatedAt,
        deletedAt: SearchEngineFieldDeletedAt,
        collection?: SearchEngineCollection,
    ): SearchEngineField
    {
        return new SearchEngineField(
            id,
            collectionId,
            name,
            type,
            isNullable,
            createdAt,
            updatedAt,
            deletedAt,
            collection,
        );
    }

    created(field: SearchEngineField): void
    {
        this.apply(
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
        );
    }

    updated(field: SearchEngineField): void
    {
        this.apply(
            new SearchEngineUpdatedFieldEvent(
                field.id?.value,
                field.collectionId?.value,
                field.name?.value,
                field.type?.value,
                field.isNullable?.value,
                field.createdAt?.value,
                field.updatedAt?.value,
                field.deletedAt?.value,
            ),
        );
    }

    deleted(field: SearchEngineField): void
    {
        this.apply(
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
        );
    }

    toDTO(): LiteralObject
    {
        return {
            id: this.id.value,
            collectionId: this.collectionId.value,
            name: this.name.value,
            type: this.type.value,
            isNullable: this.isNullable.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
            collection: this.collection?.toDTO(),
        };
    }

    // function called to get data for repository side effect methods
    toRepository(): LiteralObject
    {
        return {
            id: this.id.value,
            collectionId: this.collectionId.value,
            name: this.name.value,
            type: this.type.value,
            isNullable: this.isNullable.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
            collection: this.collection?.toDTO(),
        };
    }
}
