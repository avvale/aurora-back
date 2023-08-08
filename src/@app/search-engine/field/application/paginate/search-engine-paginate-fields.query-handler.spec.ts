import { Test, TestingModule } from '@nestjs/testing';
import { PaginationResponse } from '@aurorajs.dev/core';

// custom items
import { SearchEnginePaginateFieldsQueryHandler } from './search-engine-paginate-fields.query-handler';
import { SearchEngineMockFieldRepository } from '@app/search-engine/field/infrastructure/mock/search-engine-mock-field.repository';
import { SearchEngineIFieldRepository } from '@app/search-engine/field/domain/search-engine-field.repository';
import { SearchEngineFieldMapper } from '@app/search-engine/field/domain/search-engine-field.mapper';
import { SearchEnginePaginateFieldsQuery } from './search-engine-paginate-fields.query';
import { SearchEnginePaginateFieldsService } from './search-engine-paginate-fields.service';

describe('SearchEnginePaginateFieldsQueryHandler', () =>
{
    let queryHandler: SearchEnginePaginateFieldsQueryHandler;
    let service: SearchEnginePaginateFieldsService;
    let repository: SearchEngineMockFieldRepository;
    let mapper: SearchEngineFieldMapper;

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
        mapper = new SearchEngineFieldMapper();
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
