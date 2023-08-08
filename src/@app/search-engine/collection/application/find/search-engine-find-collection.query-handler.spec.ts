import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineFindCollectionQueryHandler } from './search-engine-find-collection.query-handler';
import { SearchEngineMockCollectionRepository } from '@app/search-engine/collection/infrastructure/mock/search-engine-mock-collection.repository';
import { SearchEngineICollectionRepository } from '@app/search-engine/collection/domain/search-engine-collection.repository';
import { SearchEngineCollectionMapper } from '@app/search-engine/collection/domain/search-engine-collection.mapper';
import { SearchEngineFindCollectionQuery } from './search-engine-find-collection.query';
import { SearchEngineFindCollectionService } from './search-engine-find-collection.service';

describe('SearchEngineFindCollectionQueryHandler', () =>
{
    let queryHandler: SearchEngineFindCollectionQueryHandler;
    let service: SearchEngineFindCollectionService;
    let repository: SearchEngineMockCollectionRepository;
    let mapper: SearchEngineCollectionMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineFindCollectionQueryHandler,
                {
                    provide : SearchEngineICollectionRepository,
                    useClass: SearchEngineMockCollectionRepository,
                },
                {
                    provide : SearchEngineFindCollectionService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<SearchEngineFindCollectionQueryHandler>(SearchEngineFindCollectionQueryHandler);
        service = module.get<SearchEngineFindCollectionService>(SearchEngineFindCollectionService);
        repository = <SearchEngineMockCollectionRepository>module.get<SearchEngineICollectionRepository>(SearchEngineICollectionRepository);
        mapper = new SearchEngineCollectionMapper();
    });

    describe('main', () =>
    {
        test('SearchEngineFindCollectionQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an collection founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new SearchEngineFindCollectionQuery(),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
