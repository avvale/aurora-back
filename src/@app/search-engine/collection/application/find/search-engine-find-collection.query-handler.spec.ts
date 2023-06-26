import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { FindCollectionQueryHandler } from './search-engine-find-collection.query-handler';
import { MockCollectionRepository } from '@app/search-engine/collection/infrastructure/mock/mock-collection.repository';
import { SearchEngineICollectionRepository } from '@app/search-engine/collection/domain/search-engine-collection.repository';
import { SearchEngineCollectionMapper } from '@app/search-engine/collection/domain/search-engine-collection.mapper';
import { FindCollectionQuery } from './search-engine-find-collection.query';
import { FindCollectionService } from './search-engine-find-collection.service';

describe('FindCollectionQueryHandler', () =>
{
    let queryHandler: FindCollectionQueryHandler;
    let service: FindCollectionService;
    let repository: MockCollectionRepository;
    let mapper: CollectionMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                FindCollectionQueryHandler,
                {
                    provide : SearchEngineICollectionRepository,
                    useClass: MockCollectionRepository,
                },
                {
                    provide : FindCollectionService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<FindCollectionQueryHandler>(FindCollectionQueryHandler);
        service = module.get<FindCollectionService>(FindCollectionService);
        repository = <MockCollectionRepository>module.get<SearchEngineICollectionRepository>(SearchEngineICollectionRepository);
        mapper = new CollectionMapper();
    });

    describe('main', () =>
    {
        test('FindCollectionQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an collection founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new FindCollectionQuery(),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});