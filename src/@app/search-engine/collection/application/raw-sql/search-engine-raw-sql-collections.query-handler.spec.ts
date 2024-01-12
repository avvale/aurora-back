import { SearchEngineCollectionMapper, SearchEngineICollectionRepository, SearchEngineMockCollectionRepository, SearchEngineRawSQLCollectionsQuery } from '@app/search-engine/collection';
import { SearchEngineRawSQLCollectionsQueryHandler } from '@app/search-engine/collection/application/raw-sql/search-engine-raw-sql-collections.query-handler';
import { SearchEngineRawSQLCollectionsService } from '@app/search-engine/collection/application/raw-sql/search-engine-raw-sql-collections.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('RawSQLCollectionsQueryHandler', () =>
{
    let queryHandler: SearchEngineRawSQLCollectionsQueryHandler;
    let service: SearchEngineRawSQLCollectionsService;
    let repository: SearchEngineMockCollectionRepository;
    let mapper: SearchEngineCollectionMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineRawSQLCollectionsQueryHandler,
                {
                    provide : SearchEngineICollectionRepository,
                    useClass: SearchEngineMockCollectionRepository,
                },
                {
                    provide : SearchEngineRawSQLCollectionsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<SearchEngineRawSQLCollectionsQueryHandler>(SearchEngineRawSQLCollectionsQueryHandler);
        service = module.get<SearchEngineRawSQLCollectionsService>(SearchEngineRawSQLCollectionsService);
        repository = <SearchEngineMockCollectionRepository>module.get<SearchEngineICollectionRepository>(SearchEngineICollectionRepository);
        mapper = new SearchEngineCollectionMapper();
    });

    describe('main', () =>
    {
        test('SearchEngineRawSQLCollectionsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an collections founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new SearchEngineRawSQLCollectionsQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
