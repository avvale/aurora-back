import { SearchEngineICollectionRepository, SearchEngineMockCollectionRepository } from '@app/search-engine/collection';
import { SearchEnginePaginateCollectionsService } from '@app/search-engine/collection/application/paginate/search-engine-paginate-collections.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEnginePaginateCollectionsService', () =>
{
    let service: SearchEnginePaginateCollectionsService;
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
                SearchEnginePaginateCollectionsService,
                SearchEngineMockCollectionRepository,
                {
                    provide : SearchEngineICollectionRepository,
                    useValue: {
                        paginate: (queryStatement, constraints) => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(SearchEnginePaginateCollectionsService);
        repository = module.get(SearchEngineICollectionRepository);
        mockRepository = module.get(SearchEngineMockCollectionRepository);
    });

    describe('main', () =>
    {
        test('SearchEnginePaginateCollectionsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should paginate collections', async () =>
        {
            jest.spyOn(repository, 'paginate').mockImplementation(() => new Promise(resolve => resolve({
                total: mockRepository.collectionSource.slice(0,10).length,
                count: mockRepository.collectionSource.slice(0,10).length,
                rows : mockRepository.collectionSource.slice(0,10),
            })));
            expect(await service.main({
                offset: 0,
                limit : 10
            })).toStrictEqual({
                total: mockRepository.collectionSource.slice(0,10).length,
                count: mockRepository.collectionSource.slice(0,10).length,
                rows : mockRepository.collectionSource.slice(0,10),
            });
        });
    });
});
