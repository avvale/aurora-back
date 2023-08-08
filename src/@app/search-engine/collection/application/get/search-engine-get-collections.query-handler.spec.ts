import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineGetCollectionsQueryHandler } from './search-engine-get-collections.query-handler';
import { SearchEngineMockCollectionRepository } from '@app/search-engine/collection/infrastructure/mock/search-engine-mock-collection.repository';
import { SearchEngineICollectionRepository } from '@app/search-engine/collection/domain/search-engine-collection.repository';
import { SearchEngineCollectionMapper } from '@app/search-engine/collection/domain/search-engine-collection.mapper';
import { SearchEngineGetCollectionsQuery } from './search-engine-get-collections.query';
import { SearchEngineGetCollectionsService } from './search-engine-get-collections.service';

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