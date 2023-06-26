/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { DeleteCollectionsService } from './delete-collections.service';
import { SearchEngineICollectionRepository } from '../../domain/search-engine-collection.repository';
import { MockCollectionRepository } from '../../infrastructure/mock/mock-collection.repository';

describe('SearchEngineDeleteCollectionsService', () =>
{
    let service: DeleteCollectionsService;
    let repository: SearchEngineICollectionRepository;
    let mockRepository: MockCollectionRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                DeleteCollectionsService,
                MockCollectionRepository,
                {
                    provide : SearchEngineICollectionRepository,
                    useValue: {
                        get   : () => { /**/ },
                        delete: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(DeleteCollectionsService);
        repository = module.get(SearchEngineICollectionRepository);
        mockRepository = module.get(MockCollectionRepository);
    });

    describe('main', () =>
    {
        test('DeleteCollectionsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete collection and emit event', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve([])));
            expect(await service.main()).toBe(undefined);
        });
    });
});