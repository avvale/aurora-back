import { SearchEngineFieldMapper, SearchEngineGetFieldsQuery, SearchEngineIFieldRepository, SearchEngineMockFieldRepository } from '@app/search-engine/field';
import { SearchEngineGetFieldsQueryHandler } from '@app/search-engine/field/application/get/search-engine-get-fields.query-handler';
import { SearchEngineGetFieldsService } from '@app/search-engine/field/application/get/search-engine-get-fields.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetFieldsQueryHandler', () =>
{
    let queryHandler: SearchEngineGetFieldsQueryHandler;
    let service: SearchEngineGetFieldsService;
    let repository: SearchEngineMockFieldRepository;
    let mapper: SearchEngineFieldMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineGetFieldsQueryHandler,
                {
                    provide : SearchEngineIFieldRepository,
                    useClass: SearchEngineMockFieldRepository,
                },
                {
                    provide : SearchEngineGetFieldsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<SearchEngineGetFieldsQueryHandler>(SearchEngineGetFieldsQueryHandler);
        service = module.get<SearchEngineGetFieldsService>(SearchEngineGetFieldsService);
        repository = <SearchEngineMockFieldRepository>module.get<SearchEngineIFieldRepository>(SearchEngineIFieldRepository);
        mapper = new SearchEngineFieldMapper();
    });

    describe('main', () =>
    {
        test('SearchEngineGetFieldsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an fields founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new SearchEngineGetFieldsQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
