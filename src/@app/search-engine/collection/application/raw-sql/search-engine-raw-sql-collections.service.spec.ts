import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus, UnhandledExceptionBus } from '@nestjs/cqrs';

// custom items
import { SearchEngineRawSQLCollectionsService } from './search-engine-raw-sql-collections.service';
import { SearchEngineICollectionRepository } from '../../domain/search-engine-collection.repository';
import { SearchEngineMockCollectionRepository } from '../../infrastructure/mock/search-engine-mock-collection.repository';

describe('SearchEngineRawSQLCollectionsService ', () =>
{
    let service: SearchEngineRawSQLCollectionsService ;
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
                SearchEngineRawSQLCollectionsService ,
                SearchEngineMockCollectionRepository,
                {
                    provide : SearchEngineICollectionRepository,
                    useValue: {
                        rawSQL: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service         = module.get(SearchEngineRawSQLCollectionsService );
        repository      = module.get(SearchEngineICollectionRepository);
        mockRepository  = module.get(SearchEngineMockCollectionRepository);
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
