import { SearchEngineCollection, searchEngineMockCollectionData } from '@app/search-engine/collection';
import {
    SearchEngineCollectionAlias,
    SearchEngineCollectionCreatedAt,
    SearchEngineCollectionDefaultSortingField,
    SearchEngineCollectionDeletedAt,
    SearchEngineCollectionDocumentsNumber,
    SearchEngineCollectionId,
    SearchEngineCollectionIsEnableNestedFields,
    SearchEngineCollectionName,
    SearchEngineCollectionNumMemoryShards,
    SearchEngineCollectionStatus,
    SearchEngineCollectionTimestampCreatedAt,
    SearchEngineCollectionUpdatedAt,
} from '@app/search-engine/collection/domain/value-objects';
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class SearchEngineMockCollectionSeeder extends MockSeeder<SearchEngineCollection>
{
    public collectionSource: SearchEngineCollection[];

    constructor()
    {
        super();
        this._createMock();
    }

    private _createMock(): void
    {
        this.collectionSource = [];

        for (const collection of _.orderBy(searchEngineMockCollectionData, ['id']))
        {
            this.collectionSource.push(
                SearchEngineCollection.register(
                    new SearchEngineCollectionId(collection.id),
                    new SearchEngineCollectionName(collection.name),
                    new SearchEngineCollectionAlias(collection.alias),
                    new SearchEngineCollectionStatus(collection.status),
                    new SearchEngineCollectionDocumentsNumber(collection.documentsNumber),
                    new SearchEngineCollectionDefaultSortingField(collection.defaultSortingField),
                    new SearchEngineCollectionNumMemoryShards(collection.numMemoryShards),
                    new SearchEngineCollectionTimestampCreatedAt(collection.timestampCreatedAt),
                    new SearchEngineCollectionIsEnableNestedFields(collection.isEnableNestedFields),
                    new SearchEngineCollectionCreatedAt({ currentTimestamp: true }),
                    new SearchEngineCollectionUpdatedAt({ currentTimestamp: true }),
                    new SearchEngineCollectionDeletedAt(null),
                ),
            );
        }
    }
}
