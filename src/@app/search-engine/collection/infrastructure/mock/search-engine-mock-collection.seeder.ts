import { Injectable } from '@nestjs/common';
import { MockSeeder } from '@aurorajs.dev/core';
import {
    SearchEngineCollectionId,
    SearchEngineCollectionName,
    SearchEngineCollectionAlias,
    SearchEngineCollectionDocumentsNumber,
    SearchEngineCollectionDefaultSortingField,
    SearchEngineCollectionNumMemoryShards,
    SearchEngineCollectionTimestampCreatedAt,
    SearchEngineCollectionIsEnableNestedFields,
    SearchEngineCollectionCreatedAt,
    SearchEngineCollectionUpdatedAt,
    SearchEngineCollectionDeletedAt,
} from '../../domain/value-objects';
import { SearchEngineCollection } from '../../domain/search-engine-collection.aggregate';
import { searchEngineCollections } from './search-engine-mock-collection.data';
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

        for (const collection of _.orderBy(searchEngineCollections, ['id']))
        {
            this.collectionSource.push(
                SearchEngineCollection.register(
                    new SearchEngineCollectionId(collection.id),
                    new SearchEngineCollectionName(collection.name),
                    new SearchEngineCollectionAlias(collection.alias),
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