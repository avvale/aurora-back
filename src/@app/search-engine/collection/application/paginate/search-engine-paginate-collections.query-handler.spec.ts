import { Test, TestingModule } from '@nestjs/testing';
import { PaginationResponse } from '@aurorajs.dev/core';

// custom items
import { SearchEnginePaginateCollectionsQueryHandler } from './search-engine-paginate-collections.query-handler';
import { SearchEngineMockCollectionRepository } from '@app/search-engine/collection/infrastructure/mock/search-engine-mock-collection.repository';
import { SearchEngineICollectionRepository } from '@app/search-engine/collection/domain/search-engine-collection.repository';
import { SearchEngineCollectionMapper } from '@app/search-engine/collection/domain/search-engine-collection.mapper';
import { SearchEnginePaginateCollectionsQuery } from './search-engine-paginate-collections.query';
import { SearchEnginePaginateCollectionsService } from './search-engine-paginate-collections.service';

describe('SearchEnginePaginateCollectionsQueryHandler', () =>
{
    let queryHandler: SearchEnginePaginateCollectionsQueryHandler;
    let service: SearchEnginePaginateCollectionsService;
    let repository: SearchEngineMockCollectionRepository;
    let mapper: SearchEngineCollectionMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEnginePaginateCollectionsQueryHandler,
                {
                    provide : SearchEngineICollectionRepository,
                    useClass: SearchEngineMockCollectionRepository,
                },
                {
                    provide : SearchEnginePaginateCollectionsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<SearchEnginePaginateCollectionsQueryHandler>(SearchEnginePaginateCollectionsQueryHandler);
        service = module.get<SearchEnginePaginateCollectionsService>(SearchEnginePaginateCollectionsService);
        repository = <SearchEngineMockCollectionRepository>module.get<SearchEngineICollectionRepository>(SearchEngineICollectionRepository);
        mapper = new SearchEngineCollectionMapper();
    });

    describe('main', () =>
    {
        test('SearchEnginePaginateCollectionsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an collections paginated', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(
                {
                    count: 10,
                    total: 100,
                    rows : repository.collectionSource.slice(0,10),
                },
            )));
            expect(await queryHandler.execute(
                new SearchEnginePaginateCollectionsQuery(
                    {
                        offset: 0,
                        limit : 10,
                    },
                ),
            )).toStrictEqual(
                new PaginationResponse(
                    100,
                    10,
                    repository.collectionSource.slice(0,10).map(item => item.toDTO()),
                ),
            );
        });
    });
});
