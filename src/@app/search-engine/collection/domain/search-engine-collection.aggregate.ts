/* eslint-disable key-spacing */
import { LiteralObject } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';
import { Utils } from '@aurorajs.dev/core';
import {
    SearchEngineCollectionId,
    SearchEngineCollectionName,
    SearchEngineCollectionAlias,
    SearchEngineCollectionStatus,
    SearchEngineCollectionDocumentsNumber,
    SearchEngineCollectionDefaultSortingField,
    SearchEngineCollectionNumMemoryShards,
    SearchEngineCollectionTimestampCreatedAt,
    SearchEngineCollectionIsEnableNestedFields,
    SearchEngineCollectionCreatedAt,
    SearchEngineCollectionUpdatedAt,
    SearchEngineCollectionDeletedAt,
} from './value-objects';
import { SearchEngineCreatedCollectionEvent } from '../application/events/search-engine-created-collection.event';
import { SearchEngineUpdatedCollectionEvent } from '../application/events/search-engine-updated-collection.event';
import { SearchEngineDeletedCollectionEvent } from '../application/events/search-engine-deleted-collection.event';
import { SearchEngineField } from '@app/search-engine/field';

export class SearchEngineCollection extends AggregateRoot
{
    id: SearchEngineCollectionId;
    name: SearchEngineCollectionName;
    alias: SearchEngineCollectionAlias;
    status: SearchEngineCollectionStatus;
    documentsNumber: SearchEngineCollectionDocumentsNumber;
    defaultSortingField: SearchEngineCollectionDefaultSortingField;
    numMemoryShards: SearchEngineCollectionNumMemoryShards;
    timestampCreatedAt: SearchEngineCollectionTimestampCreatedAt;
    isEnableNestedFields: SearchEngineCollectionIsEnableNestedFields;
    createdAt: SearchEngineCollectionCreatedAt;
    updatedAt: SearchEngineCollectionUpdatedAt;
    deletedAt: SearchEngineCollectionDeletedAt;

    // eager relationship
    fields: SearchEngineField[];

    constructor(
        id: SearchEngineCollectionId,
        name: SearchEngineCollectionName,
        alias: SearchEngineCollectionAlias,
        status: SearchEngineCollectionStatus,
        documentsNumber: SearchEngineCollectionDocumentsNumber,
        defaultSortingField: SearchEngineCollectionDefaultSortingField,
        numMemoryShards: SearchEngineCollectionNumMemoryShards,
        timestampCreatedAt: SearchEngineCollectionTimestampCreatedAt,
        isEnableNestedFields: SearchEngineCollectionIsEnableNestedFields,
        createdAt: SearchEngineCollectionCreatedAt,
        updatedAt: SearchEngineCollectionUpdatedAt,
        deletedAt: SearchEngineCollectionDeletedAt,

        fields?: SearchEngineField[],
    )
    {
        super();
        this.id = id;
        this.name = name;
        this.alias = alias;
        this.status = status;
        this.documentsNumber = documentsNumber;
        this.defaultSortingField = defaultSortingField;
        this.numMemoryShards = numMemoryShards;
        this.timestampCreatedAt = timestampCreatedAt;
        this.isEnableNestedFields = isEnableNestedFields;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;

        // eager relationship
        this.fields = fields;
    }

    static register (
        id: SearchEngineCollectionId,
        name: SearchEngineCollectionName,
        alias: SearchEngineCollectionAlias,
        status: SearchEngineCollectionStatus,
        documentsNumber: SearchEngineCollectionDocumentsNumber,
        defaultSortingField: SearchEngineCollectionDefaultSortingField,
        numMemoryShards: SearchEngineCollectionNumMemoryShards,
        timestampCreatedAt: SearchEngineCollectionTimestampCreatedAt,
        isEnableNestedFields: SearchEngineCollectionIsEnableNestedFields,
        createdAt: SearchEngineCollectionCreatedAt,
        updatedAt: SearchEngineCollectionUpdatedAt,
        deletedAt: SearchEngineCollectionDeletedAt,

        fields?: SearchEngineField[],
    ): SearchEngineCollection
    {
        return new SearchEngineCollection(
            id,
            name,
            alias,
            status,
            documentsNumber,
            defaultSortingField,
            numMemoryShards,
            timestampCreatedAt,
            isEnableNestedFields,
            createdAt,
            updatedAt,
            deletedAt,

            fields,
        );
    }

    created(collection: SearchEngineCollection): void
    {
        this.apply(
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
        );
    }

    updated(collection: SearchEngineCollection): void
    {
        this.apply(
            new SearchEngineUpdatedCollectionEvent(
                collection.id?.value,
                collection.name?.value,
                collection.alias?.value,
                collection.status?.value,
                collection.documentsNumber?.value,
                collection.defaultSortingField?.value,
                collection.numMemoryShards?.value,
                collection.timestampCreatedAt?.value,
                collection.isEnableNestedFields?.value,
                collection.createdAt?.value,
                collection.updatedAt?.value,
                collection.deletedAt?.value,
            ),
        );
    }

    deleted(collection: SearchEngineCollection): void
    {
        this.apply(
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
        );
    }

    toDTO(): LiteralObject
    {
        return {
            id: this.id.value,
            name: this.name.value,
            alias: this.alias?.value,
            status: this.status.value,
            documentsNumber: this.documentsNumber?.value,
            defaultSortingField: this.defaultSortingField?.value,
            numMemoryShards: this.numMemoryShards?.value,
            timestampCreatedAt: this.timestampCreatedAt?.value,
            isEnableNestedFields: this.isEnableNestedFields.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,

            // eager relationship
            fields: this.fields?.map(item => item.toDTO()),
        };
    }

    // function called to get data for repository side effect methods
    toRepository(): LiteralObject
    {
        return {
            id: this.id.value,
            name: this.name.value,
            alias: this.alias?.value,
            status: this.status.value,
            documentsNumber: this.documentsNumber?.value,
            defaultSortingField: this.defaultSortingField?.value,
            numMemoryShards: this.numMemoryShards?.value,
            timestampCreatedAt: this.timestampCreatedAt?.value,
            isEnableNestedFields: this.isEnableNestedFields.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,

            // eager relationship
            fields: this.fields?.map(item => item.toDTO()),
        };
    }
}
