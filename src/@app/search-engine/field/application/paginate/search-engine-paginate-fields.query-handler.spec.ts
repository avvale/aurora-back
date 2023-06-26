import { Test, TestingModule } from '@nestjs/testing';
import { PaginationResponse } from '@aurorajs.dev/core';

// custom items
import { SearchEnginePaginateFieldsQueryHandler } from './search-engine-paginate-fields.query-handler';
import { MockFieldRepository } from '@app/search-engine/field/infrastructure/mock/mock-field.repository';
import { SearchEngineIFieldRepository } from '@app/search-engine/field/domain/search-engine-field.repository';
import { SearchEngineFieldMapper } from '@app/search-engine/field/domain/search-engine-field.mapper';
import { SearchEnginePaginateFieldsQuery } from './search-engine-paginate-fields.query';
import { SearchEnginePaginateFieldsService } from './search-engine-paginate-fields.service';

describe('PaginateFieldsQueryHandler', () =>
{
    let queryHandler: PaginateFieldsQueryHandler;
    let service: PaginateFieldsService;
    let repository: MockFieldRepository;
    let mapper: FieldMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PaginateFieldsQueryHandler,
                {
                    provide : SearchEngineIFieldRepository,
                    useClass: MockFieldRepository,
                },
                {
                    provide : PaginateFieldsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<PaginateFieldsQueryHandler>(PaginateFieldsQueryHandler);
        service = module.get<PaginateFieldsService>(PaginateFieldsService);
        repository = <MockFieldRepository>module.get<SearchEngineIFieldRepository>(SearchEngineIFieldRepository);
        mapper = new FieldMapper();
    });

    describe('main', () =>
    {
        test('PaginateFieldsQueryHandler should be defined', () =>
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
                new PaginateFieldsQuery(
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