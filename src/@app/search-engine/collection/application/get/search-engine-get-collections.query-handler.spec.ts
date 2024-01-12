import { SearchEngineCollectionMapper, SearchEngineGetCollectionsQuery, SearchEngineICollectionRepository, SearchEngineMockCollectionRepository } from '@app/search-engine/collection';
import { SearchEngineGetCollectionsQueryHandler } from '@app/search-engine/collection/application/get/search-engine-get-collections.query-handler';
import { SearchEngineGetCollectionsService } from '@app/search-engine/collection/application/get/search-engine-get-collections.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetCollectionsQueryHandler', () =>
{
    let queryHandler: SearchEngineGetCollectionsQueryHandler;
    let service: SearchEngineGetCollectionsService;
    let repository: SearchEngineMockCollectionRepository;
    let mapper: SearchEngineCollectionMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineGetCollectionsQueryHandler,
                {
                    provide : SearchEngineICollectionRepository,
                    useClass: SearchEngineMockCollectionRepository,
                },
                {
                    provide : SearchEngineGetCollectionsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<SearchEngineGetCollectionsQueryHandler>(SearchEngineGetCollectionsQueryHandler);
        service = module.get<SearchEngineGetCollectionsService>(SearchEngineGetCollectionsService);
        repository = <SearchEngineMockCollectionRepository>module.get<SearchEngineICollectionRepository>(SearchEngineICollectionRepository);
        mapper = new SearchEngineCollectionMapper();
    });

    describe('main', () =>
    {
        test('SearchEngineGetCollectionsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an collections founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new SearchEngineGetCollectionsQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
