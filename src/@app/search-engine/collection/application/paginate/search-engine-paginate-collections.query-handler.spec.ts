import { Test, TestingModule } from '@nestjs/testing';
import { PaginationResponse } from '@aurorajs.dev/core';

// custom items
import { SearchEnginePaginateCollectionsQueryHandler } from './search-engine-paginate-collections.query-handler';
import { MockCollectionRepository } from '@app/search-engine/collection/infrastructure/mock/mock-collection.repository';
import { SearchEngineICollectionRepository } from '@app/search-engine/collection/domain/search-engine-collection.repository';
import { SearchEngineCollectionMapper } from '@app/search-engine/collection/domain/search-engine-collection.mapper';
import { SearchEnginePaginateCollectionsQuery } from './search-engine-paginate-collections.query';
import { SearchEnginePaginateCollectionsService } from './search-engine-paginate-collections.service';

describe('PaginateCollectionsQueryHandler', () =>
{
    let queryHandler: PaginateCollectionsQueryHandler;
    let service: PaginateCollectionsService;
    let repository: MockCollectionRepository;
    let mapper: CollectionMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PaginateCollectionsQueryHandler,
                {
                    provide : SearchEngineICollectionRepository,
                    useClass: MockCollectionRepository,
                },
                {
                    provide : PaginateCollectionsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<PaginateCollectionsQueryHandler>(PaginateCollectionsQueryHandler);
        service = module.get<PaginateCollectionsService>(PaginateCollectionsService);
        repository = <MockCollectionRepository>module.get<SearchEngineICollectionRepository>(SearchEngineICollectionRepository);
        mapper = new CollectionMapper();
    });

    describe('main', () =>
    {
        test('PaginateCollectionsQueryHandler should be defined', () =>
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
                new PaginateCollectionsQuery(
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