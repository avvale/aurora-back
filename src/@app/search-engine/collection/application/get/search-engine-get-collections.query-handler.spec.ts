import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { GetCollectionsQueryHandler } from './get-collections.query-handler';
import { MockCollectionRepository } from '@app/search-engine/collection/infrastructure/mock/mock-collection.repository';
import { SearchEngineICollectionRepository } from '@app/search-engine/collection/domain/search-engine-collection.repository';
import { SearchEngineCollectionMapper } from '@app/search-engine/collection/domain/search-engine-collection.mapper';
import { GetCollectionsQuery } from './get-collections.query';
import { GetCollectionsService } from './get-collections.service';

describe('GetCollectionsQueryHandler', () =>
{
    let queryHandler: GetCollectionsQueryHandler;
    let service: GetCollectionsService;
    let repository: MockCollectionRepository;
    let mapper: CollectionMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                GetCollectionsQueryHandler,
                {
                    provide : SearchEngineICollectionRepository,
                    useClass: MockCollectionRepository,
                },
                {
                    provide : GetCollectionsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<GetCollectionsQueryHandler>(GetCollectionsQueryHandler);
        service = module.get<GetCollectionsService>(GetCollectionsService);
        repository = <MockCollectionRepository>module.get<SearchEngineICollectionRepository>(SearchEngineICollectionRepository);
        mapper = new CollectionMapper();
    });

    describe('main', () =>
    {
        test('GetCollectionsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an collections founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new GetCollectionsQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});