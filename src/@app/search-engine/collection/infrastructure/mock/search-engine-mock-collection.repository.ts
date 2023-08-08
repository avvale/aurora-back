import { Injectable } from '@nestjs/common';
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { SearchEngineICollectionRepository } from '@app/search-engine/collection/domain/search-engine-collection.repository';
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
} from '@app/search-engine/collection/domain/value-objects';
import { SearchEngineCollection } from '../../domain/search-engine-collection.aggregate';
import { searchEngineMockCollectionData } from './search-engine-mock-collection.data';

@Injectable()
export class SearchEngineMockCollectionRepository extends MockRepository<SearchEngineCollection> implements SearchEngineICollectionRepository
{
    public readonly repository: any;
    public readonly aggregateName: string = 'SearchEngineCollection';
    public collectionSource: SearchEngineCollection[];
    public deletedAtInstance: SearchEngineCollectionDeletedAt = new SearchEngineCollectionDeletedAt(null);

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

        for (const itemCollection of <any[]>searchEngineMockCollectionData)
        {
            itemCollection['createdAt'] = now;
            itemCollection['updatedAt'] = now;
            itemCollection['deletedAt'] = null;

            this.collectionSource.push(SearchEngineCollection.register(
                new SearchEngineCollectionId(itemCollection.id),
                new SearchEngineCollectionName(itemCollection.name),
                new SearchEngineCollectionAlias(itemCollection.alias),
                new SearchEngineCollectionStatus(itemCollection.status),
                new SearchEngineCollectionDocumentsNumber(itemCollection.documentsNumber),
                new SearchEngineCollectionDefaultSortingField(itemCollection.defaultSortingField),
                new SearchEngineCollectionNumMemoryShards(itemCollection.numMemoryShards),
                new SearchEngineCollectionTimestampCreatedAt(itemCollection.timestampCreatedAt),
                new SearchEngineCollectionIsEnableNestedFields(itemCollection.isEnableNestedFields),
                new SearchEngineCollectionCreatedAt(itemCollection.createdAt),
                new SearchEngineCollectionUpdatedAt(itemCollection.updatedAt),
                new SearchEngineCollectionDeletedAt(itemCollection.deletedAt),
            ));
        }
    }
}
