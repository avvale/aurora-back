/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { DeleteFieldsService } from './delete-fields.service';
import { SearchEngineIFieldRepository } from '../../domain/search-engine-field.repository';
import { MockFieldRepository } from '../../infrastructure/mock/mock-field.repository';

describe('SearchEngineDeleteFieldsService', () =>
{
    let service: DeleteFieldsService;
    let repository: SearchEngineIFieldRepository;
    let mockRepository: MockFieldRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                DeleteFieldsService,
                MockFieldRepository,
                {
                    provide : SearchEngineIFieldRepository,
                    useValue: {
                        get   : () => { /**/ },
                        delete: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(DeleteFieldsService);
        repository = module.get(SearchEngineIFieldRepository);
        mockRepository = module.get(MockFieldRepository);
    });

    describe('main', () =>
    {
        test('DeleteFieldsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete field and emit event', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve([])));
            expect(await service.main()).toBe(undefined);
        });
    });
});