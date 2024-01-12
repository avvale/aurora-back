import { SearchEngineIFieldRepository, searchEngineMockFieldData, SearchEngineMockFieldRepository } from '@app/search-engine/field';
import { SearchEngineFindFieldByIdService } from '@app/search-engine/field/application/find/search-engine-find-field-by-id.service';
import { SearchEngineFieldId } from '@app/search-engine/field/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineFindFieldByIdService', () =>
{
    let service: SearchEngineFindFieldByIdService;
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
                SearchEngineFindFieldByIdService,
                SearchEngineMockFieldRepository,
                {
                    provide : SearchEngineIFieldRepository,
                    useValue: {
                        findById: id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(SearchEngineFindFieldByIdService);
        repository = module.get(SearchEngineIFieldRepository);
        mockRepository = module.get(SearchEngineMockFieldRepository);
    });

    describe('main', () =>
    {
        test('FindFieldByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find field by id', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main(
                new SearchEngineFieldId(searchEngineMockFieldData[0].id),
            )).toBe(mockRepository.collectionSource[0]);
        });
    });
});
