import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { FindCollectionByIdQueryHandler } from './search-engine-find-collection-by-id.query-handler';
import { MockCollectionRepository } from '@app/search-engine/collection/infrastructure/mock/mock-collection.repository';
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';
import { SearchEngineICollectionRepository } from '@app/search-engine/collection/domain/search-engine-collection.repository';
import { SearchEngineCollectionMapper } from '@app/search-engine/collection/domain/search-engine-collection.mapper';
import { SearchEngineFindCollectionByIdQuery } from './search-engine-find-collection-by-id.query';
import { SearchEngineFindCollectionByIdService } from './search-engine-find-collection-by-id.service';

describe('FindCollectionByIdQueryHandler', () =>
{
    let queryHandler: SearchEngineFindCollectionByIdQueryHandler;
    let service: SearchEngineFindCollectionByIdService;
    let repository: MockCollectionRepository;
    let mapper: CollectionMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                FindCollectionByIdQueryHandler,
                {
                    provide : SearchEngineICollectionRepository,
                    useClass: MockCollectionRepository,
                },
                {
                    provide : FindCollectionByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<FindCollectionByIdQueryHandler>(FindCollectionByIdQueryHandler);
        service = module.get<FindCollectionByIdService>(FindCollectionByIdService);
        repository = <MockCollectionRepository>module.get<SearchEngineICollectionRepository>(SearchEngineICollectionRepository);
        mapper = new CollectionMapper();
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
                new FindCollectionByIdQuery(
                    collections[0].id,

                ),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});