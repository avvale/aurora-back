import { SearchEngineFieldMapper, SearchEngineFindFieldByIdQuery, SearchEngineIFieldRepository, searchEngineMockFieldData, SearchEngineMockFieldRepository } from '@app/search-engine/field';
import { SearchEngineFindFieldByIdQueryHandler } from '@app/search-engine/field/application/find/search-engine-find-field-by-id.query-handler';
import { SearchEngineFindFieldByIdService } from '@app/search-engine/field/application/find/search-engine-find-field-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineFindFieldByIdQueryHandler', () =>
{
    let queryHandler: SearchEngineFindFieldByIdQueryHandler;
    let service: SearchEngineFindFieldByIdService;
    let repository: SearchEngineMockFieldRepository;
    let mapper: SearchEngineFieldMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineFindFieldByIdQueryHandler,
                {
                    provide : SearchEngineIFieldRepository,
                    useClass: SearchEngineMockFieldRepository,
                },
                {
                    provide : SearchEngineFindFieldByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<SearchEngineFindFieldByIdQueryHandler>(SearchEngineFindFieldByIdQueryHandler);
        service = module.get<SearchEngineFindFieldByIdService>(SearchEngineFindFieldByIdService);
        repository = <SearchEngineMockFieldRepository>module.get<SearchEngineIFieldRepository>(SearchEngineIFieldRepository);
        mapper = new SearchEngineFieldMapper();
    });

    describe('main', () =>
    {
        test('FindFieldByIdQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an field founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new SearchEngineFindFieldByIdQuery(
                    searchEngineMockFieldData[0].id,

                ),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
