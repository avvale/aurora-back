import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineFindFieldByIdQueryHandler } from './search-engine-find-field-by-id.query-handler';
import { SearchEngineMockFieldRepository } from '@app/search-engine/field/infrastructure/mock/search-engine-mock-field.repository';
import { searchEngineMockFieldData } from '@app/search-engine/field/infrastructure/mock/search-engine-mock-field.data';
import { SearchEngineIFieldRepository } from '@app/search-engine/field/domain/search-engine-field.repository';
import { SearchEngineFieldMapper } from '@app/search-engine/field/domain/search-engine-field.mapper';
import { SearchEngineFindFieldByIdQuery } from './search-engine-find-field-by-id.query';
import { SearchEngineFindFieldByIdService } from './search-engine-find-field-by-id.service';

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
