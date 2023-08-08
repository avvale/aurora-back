import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineMockFieldRepository } from '@app/search-engine/field/infrastructure/mock/search-engine-mock-field.repository';
import { SearchEngineIFieldRepository } from '@app/search-engine/field/domain/search-engine-field.repository';
import { SearchEngineFieldMapper } from '@app/search-engine/field/domain/search-engine-field.mapper';
import { SearchEngineRawSQLFieldsQueryHandler } from './search-engine-raw-sql-fields.query-handler';
import { SearchEngineRawSQLFieldsQuery } from './search-engine-raw-sql-fields.query';
import { SearchEngineRawSQLFieldsService } from './search-engine-raw-sql-fields.service';

describe('RawSQLFieldsQueryHandler', () =>
{
    let queryHandler: SearchEngineRawSQLFieldsQueryHandler;
    let service: SearchEngineRawSQLFieldsService;
    let repository: SearchEngineMockFieldRepository;
    let mapper: SearchEngineFieldMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineRawSQLFieldsQueryHandler,
                {
                    provide : SearchEngineIFieldRepository,
                    useClass: SearchEngineMockFieldRepository,
                },
                {
                    provide : SearchEngineRawSQLFieldsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<SearchEngineRawSQLFieldsQueryHandler>(SearchEngineRawSQLFieldsQueryHandler);
        service = module.get<SearchEngineRawSQLFieldsService>(SearchEngineRawSQLFieldsService);
        repository = <SearchEngineMockFieldRepository>module.get<SearchEngineIFieldRepository>(SearchEngineIFieldRepository);
        mapper = new SearchEngineFieldMapper();
    });

    describe('main', () =>
    {
        test('SearchEngineRawSQLFieldsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an fields founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new SearchEngineRawSQLFieldsQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
