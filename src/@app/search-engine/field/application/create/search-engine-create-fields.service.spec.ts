/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { CreateFieldsService } from './create-fields.service';
import { SearchEngineIFieldRepository } from '../../domain/search-engine-field.repository';
import { MockFieldRepository } from '../../infrastructure/mock/mock-field.repository';

describe('CreateFieldsService', () =>
{
    let service: CreateFieldsService;
    let repository: SearchEngineIFieldRepository;
    let mockRepository: MockFieldRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                CreateFieldsService,
                MockFieldRepository,
                {
                    provide : SearchEngineIFieldRepository,
                    useValue: {
                        insert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(CreateFieldsService);
        repository = module.get(SearchEngineIFieldRepository);
        mockRepository = module.get(MockFieldRepository);
    });

    describe('main', () =>
    {
        test('CreateFieldsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create fields and emit event', async () =>
        {
            expect(await service.main(
                mockRepository.collectionSource,
            )).toBe(undefined);
        });
    });
});