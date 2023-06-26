import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { RawSQLCollectionsService } from './raw-sql-collections.service';
import { SearchEngineICollectionRepository } from '../../domain/search-engine-collection.repository';
import { MockCollectionRepository } from '../../infrastructure/mock/mock-collection.repository';

describe('RawSQLCollectionsService', () =>
{
    let service: RawSQLCollectionsService;
    let repository: SearchEngineICollectionRepository;
    let mockRepository: MockCollectionRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                RawSQLCollectionsService,
                MockCollectionRepository,
                {
                    provide : SearchEngineICollectionRepository,
                    useValue: {
                        rawSQL: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service         = module.get(RawSQLCollectionsService);
        repository      = module.get(SearchEngineICollectionRepository);
        mockRepository  = module.get(MockCollectionRepository);
    });

    describe('main', () =>
    {
        test('RawSQLCollectionsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get collections', async () =>
        {
            jest.spyOn(repository, 'rawSQL').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});