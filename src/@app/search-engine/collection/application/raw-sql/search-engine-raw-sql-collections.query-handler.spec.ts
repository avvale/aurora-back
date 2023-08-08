import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineMockCollectionRepository } from '@app/search-engine/collection/infrastructure/mock/search-engine-mock-collection.repository';
import { SearchEngineICollectionRepository } from '@app/search-engine/collection/domain/search-engine-collection.repository';
import { SearchEngineCollectionMapper } from '@app/search-engine/collection/domain/search-engine-collection.mapper';
import { SearchEngineRawSQLCollectionsQueryHandler } from './search-engine-raw-sql-collections.query-handler';
import { SearchEngineRawSQLCollectionsQuery } from './search-engine-raw-sql-collections.query';
import { SearchEngineRawSQLCollectionsService } from './search-engine-raw-sql-collections.service';

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
