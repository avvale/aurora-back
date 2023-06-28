/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';
import { CreateCollectionService } from './create-collection.service';
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
import { MockCollectionRepository } from '../../infrastructure/mock/mock-collection.repository';

describe('SearchEngineCreateCollectionService', () =>

{
    let service: CreateCollectionService;
    let repository: SearchEngineICollectionRepository;
    let mockRepository: MockCollectionRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                CreateCollectionService,
                MockCollectionRepository,
                {
                    provide : SearchEngineICollectionRepository,
                    useValue: {
                        create: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(CreateCollectionService);
        repository = module.get(SearchEngineICollectionRepository);
        mockRepository = module.get(MockCollectionRepository);
    });

    describe('main', () =>
    {
        test('CreateCollectionService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create a collection and emit event', async () =>
        {
            expect(await service.main(
                {
                    id: new SearchEngineCollectionId(collections[0].id),
                    name: new SearchEngineCollectionName(collections[0].name),
                    alias: new SearchEngineCollectionAlias(collections[0].alias),
                    status: new SearchEngineCollectionStatus(collections[0].status),
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