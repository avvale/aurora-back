/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus, UnhandledExceptionBus } from '@nestjs/cqrs';

// custom items
import { SearchEngineCreateCollectionsService } from './search-engine-create-collections.service';
import { SearchEngineICollectionRepository } from '../../domain/search-engine-collection.repository';
import { SearchEngineMockCollectionRepository } from '../../infrastructure/mock/search-engine-mock-collection.repository';

describe('SearchEngineCreateCollectionsService', () =>
{
    let service: SearchEngineCreateCollectionsService;
    let mockRepository: SearchEngineMockCollectionRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                SearchEngineCreateCollectionsService,
                SearchEngineMockCollectionRepository,
                {
                    provide : SearchEngineICollectionRepository,
                    useValue: {
                        insert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(SearchEngineCreateCollectionsService);
        mockRepository = module.get(SearchEngineMockCollectionRepository);
    });

    describe('main', () =>
    {
        test('CreateCollectionsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create collections and emit event', async () =>
        {
            expect(
                await service.main(
                    mockRepository.collectionSource,
                ),
            )
                .toBe(undefined);
        });
    });
});
