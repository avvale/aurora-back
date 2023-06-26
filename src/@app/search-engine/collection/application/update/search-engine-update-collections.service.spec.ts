/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';
import { SearchEngineUpdateCollectionsService } from './search-engine-update-collections.service';
import {
    SearchEngineCollectionId,
    SearchEngineCollectionName,
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
import { MockCollectionRepository } from '../../infrastructure/mock/mock-collection.repository';

describe('UpdateCollectionsService', () =>
{
    let service: UpdateCollectionsService;
    let repository: SearchEngineICollectionRepository;
    let mockRepository: MockCollectionRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UpdateCollectionsService,
                MockCollectionRepository,
                {
                    provide : SearchEngineICollectionRepository,
                    useValue: {
                        update: () => { /**/ },
                        get   : () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(UpdateCollectionsService);
        repository = module.get(SearchEngineICollectionRepository);
        mockRepository = module.get(MockCollectionRepository);
    });

    describe('main', () =>
    {
        test('UpdateCollectionsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a collections and emit event', async () =>
        {
            expect(await service.main(
                {
                    id: new SearchEngineCollectionId(collections[0].id),
                    name: new SearchEngineCollectionName(collections[0].name),
                    documentsNumber: new SearchEngineCollectionDocumentsNumber(collections[0].documentsNumber),
                    defaultSortingField: new SearchEngineCollectionDefaultSortingField(collections[0].defaultSortingField),
                    numMemoryShards: new SearchEngineCollectionNumMemoryShards(collections[0].numMemoryShards),
                    timestampCreatedAt: new SearchEngineCollectionTimestampCreatedAt(collections[0].timestampCreatedAt),
                    isEnableNestedFields: new SearchEngineCollectionIsEnableNestedFields(collections[0].isEnableNestedFields),
                },
            )).toBe(undefined);
        });
    });
});