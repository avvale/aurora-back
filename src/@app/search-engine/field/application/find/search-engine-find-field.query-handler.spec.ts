import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { FindFieldQueryHandler } from './search-engine-find-field.query-handler';
import { MockFieldRepository } from '@app/search-engine/field/infrastructure/mock/mock-field.repository';
import { SearchEngineIFieldRepository } from '@app/search-engine/field/domain/search-engine-field.repository';
import { SearchEngineFieldMapper } from '@app/search-engine/field/domain/search-engine-field.mapper';
import { FindFieldQuery } from './search-engine-find-field.query';
import { FindFieldService } from './search-engine-find-field.service';

describe('FindFieldQueryHandler', () =>
{
    let queryHandler: FindFieldQueryHandler;
    let service: FindFieldService;
    let repository: MockFieldRepository;
    let mapper: FieldMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                FindFieldQueryHandler,
                {
                    provide : SearchEngineIFieldRepository,
                    useClass: MockFieldRepository,
                },
                {
                    provide : FindFieldService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<FindFieldQueryHandler>(FindFieldQueryHandler);
        service = module.get<FindFieldService>(FindFieldService);
        repository = <MockFieldRepository>module.get<SearchEngineIFieldRepository>(SearchEngineIFieldRepository);
        mapper = new FieldMapper();
    });

    describe('main', () =>
    {
        test('FindFieldQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an field founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new FindFieldQuery(),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});