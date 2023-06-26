import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { GetFieldsQueryHandler } from './get-fields.query-handler';
import { MockFieldRepository } from '@app/search-engine/field/infrastructure/mock/mock-field.repository';
import { SearchEngineIFieldRepository } from '@app/search-engine/field/domain/search-engine-field.repository';
import { SearchEngineFieldMapper } from '@app/search-engine/field/domain/search-engine-field.mapper';
import { GetFieldsQuery } from './get-fields.query';
import { GetFieldsService } from './get-fields.service';

describe('GetFieldsQueryHandler', () =>
{
    let queryHandler: GetFieldsQueryHandler;
    let service: GetFieldsService;
    let repository: MockFieldRepository;
    let mapper: FieldMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                GetFieldsQueryHandler,
                {
                    provide : SearchEngineIFieldRepository,
                    useClass: MockFieldRepository,
                },
                {
                    provide : GetFieldsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<GetFieldsQueryHandler>(GetFieldsQueryHandler);
        service = module.get<GetFieldsService>(GetFieldsService);
        repository = <MockFieldRepository>module.get<SearchEngineIFieldRepository>(SearchEngineIFieldRepository);
        mapper = new FieldMapper();
    });

    describe('main', () =>
    {
        test('GetFieldsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an fields founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new GetFieldsQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});