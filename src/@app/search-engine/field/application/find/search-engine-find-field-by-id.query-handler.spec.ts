import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { FindFieldByIdQueryHandler } from './search-engine-find-field-by-id.query-handler';
import { MockFieldRepository } from '@app/search-engine/field/infrastructure/mock/mock-field.repository';
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';
import { SearchEngineIFieldRepository } from '@app/search-engine/field/domain/search-engine-field.repository';
import { SearchEngineFieldMapper } from '@app/search-engine/field/domain/search-engine-field.mapper';
import { SearchEngineFindFieldByIdQuery } from './search-engine-find-field-by-id.query';
import { SearchEngineFindFieldByIdService } from './search-engine-find-field-by-id.service';

describe('FindFieldByIdQueryHandler', () =>
{
    let queryHandler: SearchEngineFindFieldByIdQueryHandler;
    let service: SearchEngineFindFieldByIdService;
    let repository: MockFieldRepository;
    let mapper: FieldMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                FindFieldByIdQueryHandler,
                {
                    provide : SearchEngineIFieldRepository,
                    useClass: MockFieldRepository,
                },
                {
                    provide : FindFieldByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<FindFieldByIdQueryHandler>(FindFieldByIdQueryHandler);
        service = module.get<FindFieldByIdService>(FindFieldByIdService);
        repository = <MockFieldRepository>module.get<SearchEngineIFieldRepository>(SearchEngineIFieldRepository);
        mapper = new FieldMapper();
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
                new FindFieldByIdQuery(
                    fields[0].id,

                ),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});