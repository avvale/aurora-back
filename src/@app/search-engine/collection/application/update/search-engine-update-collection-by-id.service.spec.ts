/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus, UnhandledExceptionBus } from '@nestjs/cqrs';

// custom items
import { searchEngineMockCollectionData } from '@app/search-engine/collection/infrastructure/mock/search-engine-mock-collection.data';
import { SearchEngineUpdateCollectionByIdService } from './search-engine-update-collection-by-id.service';
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
} from '../../domain/value-objects';
import { SearchEngineICollectionRepository } from '../../domain/search-engine-collection.repository';
import { SearchEngineMockCollectionRepository } from '../../infrastructure/mock/search-engine-mock-collection.repository';

describe('SearchEngineUpdateCollectionByIdService', () =>
{
    let service: SearchEngineUpdateCollectionByIdService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                SearchEngineUpdateCollectionByIdService,
                SearchEngineMockCollectionRepository,
                {
                    provide : SearchEngineICollectionRepository,
                    useValue: {
                        updateById: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(SearchEngineUpdateCollectionByIdService);
    });

    describe('main', () =>
    {
        test('SearchEngineUpdateCollectionByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a collection and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new SearchEngineCollectionId(searchEngineMockCollectionData[0].id),
                        name: new SearchEngineCollectionName(searchEngineMockCollectionData[0].name),
                        alias: new SearchEngineCollectionAlias(searchEngineMockCollectionData[0].alias),
                        status: new SearchEngineCollectionStatus(searchEngineMockCollectionData[0].status),
                        documentsNumber: new SearchEngineCollectionDocumentsNumber(searchEngineMockCollectionData[0].documentsNumber),
                        defaultSortingField: new SearchEngineCollectionDefaultSortingField(searchEngineMockCollectionData[0].defaultSortingField),
                        numMemoryShards: new SearchEngineCollectionNumMemoryShards(searchEngineMockCollectionData[0].numMemoryShards),
                        timestampCreatedAt: new SearchEngineCollectionTimestampCreatedAt(searchEngineMockCollectionData[0].timestampCreatedAt),
                        isEnableNestedFields: new SearchEngineCollectionIsEnableNestedFields(searchEngineMockCollectionData[0].isEnableNestedFields),
                    },
                    {},
                ),
            ).toBe(undefined);
        });
    });
});
