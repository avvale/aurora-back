import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineGetFieldsQueryHandler } from './search-engine-get-fields.query-handler';
import { SearchEngineMockFieldRepository } from '@app/search-engine/field/infrastructure/mock/search-engine-mock-field.repository';
import { SearchEngineIFieldRepository } from '@app/search-engine/field/domain/search-engine-field.repository';
import { SearchEngineFieldMapper } from '@app/search-engine/field/domain/search-engine-field.mapper';
import { SearchEngineGetFieldsQuery } from './search-engine-get-fields.query';
import { SearchEngineGetFieldsService } from './search-engine-get-fields.service';

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