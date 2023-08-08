import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus, UnhandledExceptionBus } from '@nestjs/cqrs';

// custom items
import { SearchEngineFindCollectionService } from './search-engine-find-collection.service';
import { SearchEngineICollectionRepository } from '../../domain/search-engine-collection.repository';
import { SearchEngineMockCollectionRepository } from '../../infrastructure/mock/search-engine-mock-collection.repository';

describe('SearchEngineFindCollectionService', () =>
{
    let service: SearchEngineFindCollectionService;
    let repository: SearchEngineICollectionRepository;
    let mockRepository: SearchEngineMockCollectionRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                SearchEngineFindCollectionService,
                SearchEngineMockCollectionRepository,
                {
                    provide : SearchEngineICollectionRepository,
                    useValue: {
                        find: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(SearchEngineFindCollectionService);
        repository = module.get(SearchEngineICollectionRepository);
        mockRepository = module.get(SearchEngineMockCollectionRepository);
    });

    describe('main', () =>
    {
        test('SearchEngineFindCollectionService should be defined', () =>
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
