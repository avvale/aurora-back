import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { RawSQLFieldsService } from './raw-sql-fields.service';
import { SearchEngineIFieldRepository } from '../../domain/search-engine-field.repository';
import { MockFieldRepository } from '../../infrastructure/mock/mock-field.repository';

describe('RawSQLFieldsService', () =>
{
    let service: RawSQLFieldsService;
    let repository: SearchEngineIFieldRepository;
    let mockRepository: MockFieldRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                RawSQLFieldsService,
                MockFieldRepository,
                {
                    provide : SearchEngineIFieldRepository,
                    useValue: {
                        rawSQL: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service         = module.get(RawSQLFieldsService);
        repository      = module.get(SearchEngineIFieldRepository);
        mockRepository  = module.get(MockFieldRepository);
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