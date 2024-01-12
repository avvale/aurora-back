import { SearchEngineIFieldRepository, SearchEngineMockFieldRepository } from '@app/search-engine/field';
import { SearchEngineFindFieldService } from '@app/search-engine/field/application/find/search-engine-find-field.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineFindFieldService', () =>
{
    let service: SearchEngineFindFieldService;
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
                SearchEngineFindFieldService,
                SearchEngineMockFieldRepository,
                {
                    provide : SearchEngineIFieldRepository,
                    useValue: {
                        find: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(SearchEngineFindFieldService);
        repository = module.get(SearchEngineIFieldRepository);
        mockRepository = module.get(SearchEngineMockFieldRepository);
    });

    describe('main', () =>
    {
        test('SearchEngineFindFieldService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find field', async () =>
        {
            jest.spyOn(repository, 'find').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main()).toBe(mockRepository.collectionSource[0]);
        });
    });
});
