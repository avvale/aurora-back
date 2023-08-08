import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus, UnhandledExceptionBus } from '@nestjs/cqrs';

// custom items
import { searchEngineMockFieldData } from '@app/search-engine/field/infrastructure/mock/search-engine-mock-field.data';
import { SearchEngineFindFieldByIdService } from './search-engine-find-field-by-id.service';
import { SearchEngineFieldId } from '../../domain/value-objects';
import { SearchEngineIFieldRepository } from '../../domain/search-engine-field.repository';
import { SearchEngineMockFieldRepository } from '../../infrastructure/mock/search-engine-mock-field.repository';

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
