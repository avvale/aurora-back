import { SearchEngineIFieldRepository, SearchEngineMockFieldRepository } from '@app/search-engine/field';
import { SearchEngineRawSQLFieldsService } from '@app/search-engine/field/application/raw-sql/search-engine-raw-sql-fields.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineRawSQLFieldsService ', () =>
{
    let service: SearchEngineRawSQLFieldsService ;
    let repository: SearchEngineIFieldRepository;
    let mockRepository: SearchEngineMockFieldRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                SearchEngineRawSQLFieldsService ,
                SearchEngineMockFieldRepository,
                {
                    provide : SearchEngineIFieldRepository,
                    useValue: {
                        rawSQL: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service         = module.get(SearchEngineRawSQLFieldsService );
        repository      = module.get(SearchEngineIFieldRepository);
        mockRepository  = module.get(SearchEngineMockFieldRepository);
    });

    describe('main', () =>
    {
        test('RawSQLFieldsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get fields', async () =>
        {
            jest.spyOn(repository, 'rawSQL').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
