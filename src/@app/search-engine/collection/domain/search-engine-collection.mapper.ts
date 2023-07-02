import { IMapper, LiteralObject, MapperOptions, CQMetadata } from '@aurorajs.dev/core';
import { SearchEngineCollection } from './search-engine-collection.aggregate';
import { SearchEngineCollectionResponse } from './search-engine-collection.response';
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
import { SearchEngineFieldMapper } from '@app/search-engine/field';

export class SearchEngineCollectionMapper implements IMapper
{
    constructor(
        public options: MapperOptions = { eagerLoading: true },
    ) {}

    /**
     * Map object to aggregate
     * @param collection
     */
    mapModelToAggregate(collection: LiteralObject, cQMetadata?: CQMetadata): SearchEngineCollection
    {
        if (!collection) return;

        return this.makeAggregate(collection, cQMetadata);
    }

    /**
     * Map array of objects to array aggregates
     * @param collections
     */
    mapModelsToAggregates(collections: LiteralObject[], cQMetadata?: CQMetadata): SearchEngineCollection[]
    {
        if (!Array.isArray(collections)) return;

        return collections.map(collection => this.makeAggregate(collection, cQMetadata));
    }

    /**
     * Map aggregate to response
     * @param collection
     */
    mapAggregateToResponse(collection: SearchEngineCollection): SearchEngineCollectionResponse
    {
        return this.makeResponse(collection);
    }

    /**
     * Map array of aggregates to array responses
     * @param collections
     */
    mapAggregatesToResponses(collections: SearchEngineCollection[]): SearchEngineCollectionResponse[]
    {
        if (!Array.isArray(collections)) return;

        return collections.map(collection => this.makeResponse(collection));
    }

    private makeAggregate(collection: LiteralObject, cQMetadata?: CQMetadata): SearchEngineCollection
    {
        return SearchEngineCollection.register(
            new SearchEngineCollectionId(collection.id, { undefinable: true }),
            new SearchEngineCollectionName(collection.name, { undefinable: true }),
            new SearchEngineCollectionAlias(collection.alias, { undefinable: true }),
            new SearchEngineCollectionStatus(collection.status, { undefinable: true }),
            new SearchEngineCollectionDocumentsNumber(collection.documentsNumber, { undefinable: true }),
            new SearchEngineCollectionDefaultSortingField(collection.defaultSortingField, { undefinable: true }),
            new SearchEngineCollectionNumMemoryShards(collection.numMemoryShards, { undefinable: true }),
            new SearchEngineCollectionTimestampCreatedAt(collection.timestampCreatedAt, { undefinable: true }),
            new SearchEngineCollectionIsEnableNestedFields(collection.isEnableNestedFields, { undefinable: true }),
            new SearchEngineCollectionCreatedAt(collection.createdAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new SearchEngineCollectionUpdatedAt(collection.updatedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new SearchEngineCollectionDeletedAt(collection.deletedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            this.options.eagerLoading ? new SearchEngineFieldMapper({ eagerLoading: true }).mapModelsToAggregates(collection.fields, cQMetadata) : undefined,
        );
    }

    private makeResponse(collection: SearchEngineCollection): SearchEngineCollectionResponse
    {
        if (!collection) return;

        return new SearchEngineCollectionResponse(
            collection.id.value,
            collection.name.value,
            collection.alias.value,
            collection.status.value,
            collection.documentsNumber.value,
            collection.defaultSortingField.value,
            collection.numMemoryShards.value,
            collection.timestampCreatedAt.value,
            collection.isEnableNestedFields.value,
            collection.createdAt.value,
            collection.updatedAt.value,
            collection.deletedAt.value,
            this.options.eagerLoading ? new SearchEngineFieldMapper({ eagerLoading: true }).mapAggregatesToResponses(collection.fields) : undefined,
        );
    }
}