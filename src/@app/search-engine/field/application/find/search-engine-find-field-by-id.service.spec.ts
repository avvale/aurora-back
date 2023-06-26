import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';
import { FindFieldByIdService } from './search-engine-find-field-by-id.service';
import { SearchEngineFieldId } from '../../domain/value-objects';
import { SearchEngineIFieldRepository } from '../../domain/search-engine-field.repository';
import { MockFieldRepository } from '../../infrastructure/mock/mock-field.repository';

describe('FindFieldByIdService', () =>
{
    let service: FindFieldByIdService;
    let repository: SearchEngineIFieldRepository;
    let mockRepository: MockFieldRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                FindFieldByIdService,
                MockFieldRepository,
                {
                    provide : SearchEngineIFieldRepository,
                    useValue: {
                        findById: id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(FindFieldByIdService);
        repository = module.get(SearchEngineIFieldRepository);
        mockRepository = module.get(MockFieldRepository);
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
                new FieldId(fields[0].id),
            )).toBe(mockRepository.collectionSource[0]);
        });
    });
});