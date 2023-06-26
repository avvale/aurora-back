/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';
import { SearchEngineDeleteCollectionByIdService } from './search-engine-delete-collection-by-id.service';
import { SearchEngineCollectionId } from '../../domain/value-objects';
import { SearchEngineICollectionRepository } from '../../domain/search-engine-collection.repository';
import { MockCollectionRepository } from '../../infrastructure/mock/mock-collection.repository';

describe('SearchEngineDeleteCollectionByIdService', () =>
{
    let service: SearchEngineDeleteCollectionByIdService;
    let repository: SearchEngineICollectionRepository;
    let mockRepository: MockCollectionRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                DeleteCollectionByIdService,
                MockCollectionRepository,
                {
                    provide : SearchEngineICollectionRepository,
                    useValue: {
                        deleteById: id => { /**/ },
                        findById  : id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(DeleteCollectionByIdService);
        repository = module.get(SearchEngineICollectionRepository);
        mockRepository = module.get(MockCollectionRepository);
    });

    describe('main', () =>
    {
        test('DeleteCollectionByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete collection and emit event', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main(
                new CollectionId(collections[0].id),
            )).toBe(undefined);
        });
    });
});