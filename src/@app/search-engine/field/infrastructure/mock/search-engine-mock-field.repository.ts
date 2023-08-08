import { Injectable } from '@nestjs/common';
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { SearchEngineIFieldRepository } from '@app/search-engine/field/domain/search-engine-field.repository';
import {
    SearchEngineFieldId,
    SearchEngineFieldCollectionId,
    SearchEngineFieldName,
    SearchEngineFieldType,
    SearchEngineFieldIsNullable,
    SearchEngineFieldCreatedAt,
    SearchEngineFieldUpdatedAt,
    SearchEngineFieldDeletedAt,
} from '@app/search-engine/field/domain/value-objects';
import { SearchEngineField } from '../../domain/search-engine-field.aggregate';
import { searchEngineMockFieldData } from './search-engine-mock-field.data';

@Injectable()
export class SearchEngineMockFieldRepository extends MockRepository<SearchEngineField> implements SearchEngineIFieldRepository
{
    public readonly repository: any;
    public readonly aggregateName: string = 'SearchEngineField';
    public collectionSource: SearchEngineField[];
    public deletedAtInstance: SearchEngineFieldDeletedAt = new SearchEngineFieldDeletedAt(null);

    constructor()
    {
        super();
        this.createSourceMockData();
    }

    public reset(): void
    {
        this.createSourceMockData();
    }

    private createSourceMockData(): void
    {
        this.collectionSource = [];
        const now = Utils.nowTimestamp();

        for (const itemCollection of <any[]>searchEngineMockFieldData)
        {
            itemCollection['createdAt'] = now;
            itemCollection['updatedAt'] = now;
            itemCollection['deletedAt'] = null;

            this.collectionSource.push(SearchEngineField.register(
                new SearchEngineFieldId(itemCollection.id),
                new SearchEngineFieldCollectionId(itemCollection.collectionId),
                new SearchEngineFieldName(itemCollection.name),
                new SearchEngineFieldType(itemCollection.type),
                new SearchEngineFieldIsNullable(itemCollection.isNullable),
                new SearchEngineFieldCreatedAt(itemCollection.createdAt),
                new SearchEngineFieldUpdatedAt(itemCollection.updatedAt),
                new SearchEngineFieldDeletedAt(itemCollection.deletedAt),
            ));
        }
    }
}
