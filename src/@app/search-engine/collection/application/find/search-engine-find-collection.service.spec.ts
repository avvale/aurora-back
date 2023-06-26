import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { FindCollectionService } from './search-engine-find-collection.service';
import { SearchEngineICollectionRepository } from '../../domain/search-engine-collection.repository';
import { MockCollectionRepository } from '../../infrastructure/mock/mock-collection.repository';

describe('FindCollectionService', () =>
{
    let service: FindCollectionService;
    let repository: SearchEngineICollectionRepository;
    let mockRepository: MockCollectionRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                FindCollectionService,
                MockCollectionRepository,
                {
                    provide : SearchEngineICollectionRepository,
                    useValue: {
                        find: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(FindCollectionService);
        repository = module.get(SearchEngineICollectionRepository);
        mockRepository = module.get(MockCollectionRepository);
    });

    describe('main', () =>
    {
        test('FindCollectionService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find collection', async () =>
        {
            jest.spyOn(repository, 'find').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main()).toBe(mockRepository.collectionSource[0]);
        });
    });
});