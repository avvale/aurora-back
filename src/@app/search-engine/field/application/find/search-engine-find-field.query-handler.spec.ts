import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineFindFieldQueryHandler } from './search-engine-find-field.query-handler';
import { SearchEngineMockFieldRepository } from '@app/search-engine/field/infrastructure/mock/search-engine-mock-field.repository';
import { SearchEngineIFieldRepository } from '@app/search-engine/field/domain/search-engine-field.repository';
import { SearchEngineFieldMapper } from '@app/search-engine/field/domain/search-engine-field.mapper';
import { SearchEngineFindFieldQuery } from './search-engine-find-field.query';
import { SearchEngineFindFieldService } from './search-engine-find-field.service';

describe('SearchEngineFindFieldQueryHandler', () =>
{
    let queryHandler: SearchEngineFindFieldQueryHandler;
    let service: SearchEngineFindFieldService;
    let repository: SearchEngineMockFieldRepository;
    let mapper: SearchEngineFieldMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineFindFieldQueryHandler,
                {
                    provide : SearchEngineIFieldRepository,
                    useClass: SearchEngineMockFieldRepository,
                },
                {
                    provide : SearchEngineFindFieldService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<SearchEngineFindFieldQueryHandler>(SearchEngineFindFieldQueryHandler);
        service = module.get<SearchEngineFindFieldService>(SearchEngineFindFieldService);
        repository = <SearchEngineMockFieldRepository>module.get<SearchEngineIFieldRepository>(SearchEngineIFieldRepository);
        mapper = new SearchEngineFieldMapper();
    });

    describe('main', () =>
    {
        test('SearchEngineFindFieldQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an field founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new SearchEngineFindFieldQuery(),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
