import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { MockCollectionRepository } from '@app/search-engine/collection/infrastructure/mock/mock-collection.repository';
import { SearchEngineICollectionRepository } from '@app/search-engine/collection/domain/search-engine-collection.repository';
import { SearchEngineCollectionMapper } from '@app/search-engine/collection/domain/search-engine-collection.mapper';
import { RawSQLCollectionsQueryHandler } from './raw-sql-collections.query-handler';
import { RawSQLCollectionsQuery } from './raw-sql-collections.query';
import { RawSQLCollectionsService } from './raw-sql-collections.service';

describe('RawSQLCollectionsQueryHandler', () =>
{
    let queryHandler: RawSQLCollectionsQueryHandler;
    let service: RawSQLCollectionsService;
    let repository: MockCollectionRepository;
    let mapper: CollectionMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                RawSQLCollectionsQueryHandler,
                {
                    provide : SearchEngineICollectionRepository,
                    useClass: MockCollectionRepository,
                },
                {
                    provide : RawSQLCollectionsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<RawSQLCollectionsQueryHandler>(RawSQLCollectionsQueryHandler);
        service = module.get<RawSQLCollectionsService>(RawSQLCollectionsService);
        repository = <MockCollectionRepository>module.get<SearchEngineICollectionRepository>(SearchEngineICollectionRepository);
        mapper = new CollectionMapper();
    });

    describe('main', () =>
    {
        test('RawSQLCollectionsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an collections founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new RawSQLCollectionsQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});