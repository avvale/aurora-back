import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus, UnhandledExceptionBus } from '@nestjs/cqrs';

// custom items
import { SearchEngineGetFieldsService } from './search-engine-get-fields.service';
import { SearchEngineIFieldRepository } from '../../domain/search-engine-field.repository';
import { SearchEngineMockFieldRepository } from '../../infrastructure/mock/search-engine-mock-field.repository';

describe('SearchEngineGetFieldsService', () =>
{
    let service: SearchEngineGetFieldsService;
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
                SearchEngineGetFieldsService,
                SearchEngineMockFieldRepository,
                {
                    provide : SearchEngineIFieldRepository,
                    useValue: {
                        get: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(SearchEngineGetFieldsService);
        repository = module.get(SearchEngineIFieldRepository);
        mockRepository = module.get(SearchEngineMockFieldRepository);
    });

    describe('main', () =>
    {
        test('GetFieldsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get fields', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
