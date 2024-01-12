import { SearchEngineCollectionMapper } from '@app/search-engine/collection';
import { SearchEngineField, SearchEngineFieldResponse } from '@app/search-engine/field';
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
import { CQMetadata, IMapper, LiteralObject, MapperOptions } from '@aurorajs.dev/core';

export class SearchEngineFieldMapper implements IMapper
{
    constructor(
        public options: MapperOptions = { eagerLoading: true },
    ) {}

    /**
     * Map object to aggregate
     * @param field
     */
    mapModelToAggregate(field: LiteralObject, cQMetadata?: CQMetadata): SearchEngineField
    {
        if (!field) return;

        return this.makeAggregate(field, cQMetadata);
    }

    /**
     * Map array of objects to array aggregates
     * @param fields
     */
    mapModelsToAggregates(fields: LiteralObject[], cQMetadata?: CQMetadata): SearchEngineField[]
    {
        if (!Array.isArray(fields)) return;

        return fields.map(field => this.makeAggregate(field, cQMetadata));
    }

    /**
     * Map aggregate to response
     * @param field
     */
    mapAggregateToResponse(field: SearchEngineField): SearchEngineFieldResponse
    {
        return this.makeResponse(field);
    }

    /**
     * Map array of aggregates to array responses
     * @param fields
     */
    mapAggregatesToResponses(fields: SearchEngineField[]): SearchEngineFieldResponse[]
    {
        if (!Array.isArray(fields)) return;

        return fields.map(field => this.makeResponse(field));
    }

    private makeAggregate(field: LiteralObject, cQMetadata?: CQMetadata): SearchEngineField
    {
        return SearchEngineField.register(
            new SearchEngineFieldId(field.id, { undefinable: true }),
            new SearchEngineFieldCollectionId(field.collectionId, { undefinable: true }),
            new SearchEngineFieldName(field.name, { undefinable: true }),
            new SearchEngineFieldType(field.type, { undefinable: true }),
            new SearchEngineFieldIsNullable(field.isNullable, { undefinable: true }),
            new SearchEngineFieldCreatedAt(field.createdAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new SearchEngineFieldUpdatedAt(field.updatedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new SearchEngineFieldDeletedAt(field.deletedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            this.options.eagerLoading ? new SearchEngineCollectionMapper({ eagerLoading: true }).mapModelToAggregate(field.collection, cQMetadata) : undefined,
        );
    }

    private makeResponse(field: SearchEngineField): SearchEngineFieldResponse
    {
        if (!field) return;

        return new SearchEngineFieldResponse(
            field.id.value,
            field.collectionId.value,
            field.name.value,
            field.type.value,
            field.isNullable.value,
            field.createdAt.value,
            field.updatedAt.value,
            field.deletedAt.value,
            this.options.eagerLoading ? new SearchEngineCollectionMapper({ eagerLoading: true }).mapAggregateToResponse(field.collection) : undefined,
        );
    }
}
