import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { GetCollectionsService } from './get-collections.service';
import { SearchEngineICollectionRepository } from '../../domain/search-engine-collection.repository';
import { MockCollectionRepository } from '../../infrastructure/mock/mock-collection.repository';

describe('GetCollectionsService', () =>
{
    let service: GetCollectionsService;
    let repository: SearchEngineICollectionRepository;
    let mockRepository: MockCollectionRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                GetCollectionsService,
                MockCollectionRepository,
                {
                    provide : SearchEngineICollectionRepository,
                    useValue: {
                        get: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(GetCollectionsService);
        repository = module.get(SearchEngineICollectionRepository);
        mockRepository = module.get(MockCollectionRepository);
    });

    describe('main', () =>
    {
        test('GetCollectionsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get collections', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});