/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineICollectionRepository, searchEngineMockCollectionData, SearchEngineMockCollectionRepository } from '@app/search-engine/collection';
import { SearchEngineUpdateCollectionByIdService } from '@app/search-engine/collection/application/update/search-engine-update-collection-by-id.service';
import {
    SearchEngineCollectionAlias,
    SearchEngineCollectionDefaultSortingField,
    SearchEngineCollectionDocumentsNumber,
    SearchEngineCollectionId,
    SearchEngineCollectionIsEnableNestedFields,
    SearchEngineCollectionName,
    SearchEngineCollectionNumMemoryShards,
    SearchEngineCollectionStatus,
    SearchEngineCollectionTimestampCreatedAt,
} from '@app/search-engine/collection/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

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
