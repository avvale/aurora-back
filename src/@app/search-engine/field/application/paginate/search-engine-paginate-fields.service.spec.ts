import { SearchEngineIFieldRepository, SearchEngineMockFieldRepository } from '@app/search-engine/field';
import { SearchEnginePaginateFieldsService } from '@app/search-engine/field/application/paginate/search-engine-paginate-fields.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEnginePaginateFieldsService', () =>
{
    let service: SearchEnginePaginateFieldsService;
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
                SearchEnginePaginateFieldsService,
                SearchEngineMockFieldRepository,
                {
                    provide : SearchEngineIFieldRepository,
                    useValue: {
                        paginate: (queryStatement, constraints) => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(SearchEnginePaginateFieldsService);
        repository = module.get(SearchEngineIFieldRepository);
        mockRepository = module.get(SearchEngineMockFieldRepository);
    });

    describe('main', () =>
    {
        test('SearchEnginePaginateFieldsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should paginate fields', async () =>
        {
            jest.spyOn(repository, 'paginate').mockImplementation(() => new Promise(resolve => resolve({
                total: mockRepository.collectionSource.slice(0,10).length,
                count: mockRepository.collectionSource.slice(0,10).length,
                rows : mockRepository.collectionSource.slice(0,10),
            })));
            expect(await service.main({
                offset: 0,
                limit : 10
            })).toStrictEqual({
                total: mockRepository.collectionSource.slice(0,10).length,
                count: mockRepository.collectionSource.slice(0,10).length,
                rows : mockRepository.collectionSource.slice(0,10),
            });
        });
    });
});
