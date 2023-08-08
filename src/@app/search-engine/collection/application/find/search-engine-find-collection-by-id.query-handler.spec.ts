import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineFindCollectionByIdQueryHandler } from './search-engine-find-collection-by-id.query-handler';
import { SearchEngineMockCollectionRepository } from '@app/search-engine/collection/infrastructure/mock/search-engine-mock-collection.repository';
import { searchEngineMockCollectionData } from '@app/search-engine/collection/infrastructure/mock/search-engine-mock-collection.data';
import { SearchEngineICollectionRepository } from '@app/search-engine/collection/domain/search-engine-collection.repository';
import { SearchEngineCollectionMapper } from '@app/search-engine/collection/domain/search-engine-collection.mapper';
import { SearchEngineFindCollectionByIdQuery } from './search-engine-find-collection-by-id.query';
import { SearchEngineFindCollectionByIdService } from './search-engine-find-collection-by-id.service';

describe('SearchEngineFindCollectionByIdQueryHandler', () =>
{
    let queryHandler: SearchEngineFindCollectionByIdQueryHandler;
    let service: SearchEngineFindCollectionByIdService;
    let repository: SearchEngineMockCollectionRepository;
    let mapper: SearchEngineCollectionMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineFindCollectionByIdQueryHandler,
                {
                    provide : SearchEngineICollectionRepository,
                    useClass: SearchEngineMockCollectionRepository,
                },
                {
                    provide : SearchEngineFindCollectionByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<SearchEngineFindCollectionByIdQueryHandler>(SearchEngineFindCollectionByIdQueryHandler);
        service = module.get<SearchEngineFindCollectionByIdService>(SearchEngineFindCollectionByIdService);
        repository = <SearchEngineMockCollectionRepository>module.get<SearchEngineICollectionRepository>(SearchEngineICollectionRepository);
        mapper = new SearchEngineCollectionMapper();
    });

    describe('main', () =>
    {
        test('FindCollectionByIdQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an collection founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new SearchEngineFindCollectionByIdQuery(
                    searchEngineMockCollectionData[0].id,

                ),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
