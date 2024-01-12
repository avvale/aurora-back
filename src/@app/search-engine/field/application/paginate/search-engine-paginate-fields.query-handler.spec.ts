import { SearchEngineIFieldRepository, SearchEngineMockFieldRepository, SearchEnginePaginateFieldsQuery } from '@app/search-engine/field';
import { SearchEnginePaginateFieldsQueryHandler } from '@app/search-engine/field/application/paginate/search-engine-paginate-fields.query-handler';
import { SearchEnginePaginateFieldsService } from '@app/search-engine/field/application/paginate/search-engine-paginate-fields.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEnginePaginateFieldsQueryHandler', () =>
{
    let queryHandler: SearchEnginePaginateFieldsQueryHandler;
    let service: SearchEnginePaginateFieldsService;
    let repository: SearchEngineMockFieldRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEnginePaginateFieldsQueryHandler,
                {
                    provide : SearchEngineIFieldRepository,
                    useClass: SearchEngineMockFieldRepository,
                },
                {
                    provide : SearchEnginePaginateFieldsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<SearchEnginePaginateFieldsQueryHandler>(SearchEnginePaginateFieldsQueryHandler);
        service = module.get<SearchEnginePaginateFieldsService>(SearchEnginePaginateFieldsService);
        repository = <SearchEngineMockFieldRepository>module.get<SearchEngineIFieldRepository>(SearchEngineIFieldRepository);
    });

    describe('main', () =>
    {
        test('SearchEnginePaginateFieldsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an fields paginated', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(
                {
                    count: 10,
                    total: 100,
                    rows : repository.collectionSource.slice(0,10),
                },
            )));
            expect(await queryHandler.execute(
                new SearchEnginePaginateFieldsQuery(
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
