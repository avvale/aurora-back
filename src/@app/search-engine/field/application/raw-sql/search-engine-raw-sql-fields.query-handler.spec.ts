import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { MockFieldRepository } from '@app/search-engine/field/infrastructure/mock/mock-field.repository';
import { SearchEngineIFieldRepository } from '@app/search-engine/field/domain/search-engine-field.repository';
import { SearchEngineFieldMapper } from '@app/search-engine/field/domain/search-engine-field.mapper';
import { RawSQLFieldsQueryHandler } from './raw-sql-fields.query-handler';
import { RawSQLFieldsQuery } from './raw-sql-fields.query';
import { RawSQLFieldsService } from './raw-sql-fields.service';

describe('RawSQLFieldsQueryHandler', () =>
{
    let queryHandler: RawSQLFieldsQueryHandler;
    let service: RawSQLFieldsService;
    let repository: MockFieldRepository;
    let mapper: FieldMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                RawSQLFieldsQueryHandler,
                {
                    provide : SearchEngineIFieldRepository,
                    useClass: MockFieldRepository,
                },
                {
                    provide : RawSQLFieldsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<RawSQLFieldsQueryHandler>(RawSQLFieldsQueryHandler);
        service = module.get<RawSQLFieldsService>(RawSQLFieldsService);
        repository = <MockFieldRepository>module.get<SearchEngineIFieldRepository>(SearchEngineIFieldRepository);
        mapper = new FieldMapper();
    });

    describe('main', () =>
    {
        test('RawSQLFieldsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an fields founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new RawSQLFieldsQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});