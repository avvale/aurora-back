/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineICollectionRepository, SearchEngineMockCollectionRepository } from '@app/search-engine/collection';
import { SearchEngineDeleteCollectionsService } from '@app/search-engine/collection/application/delete/search-engine-delete-collections.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteCollectionsService', () =>
{
    let service: SearchEngineDeleteCollectionsService;
    let repository: SearchEngineICollectionRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                SearchEngineDeleteCollectionsService,
                SearchEngineMockCollectionRepository,
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

        service = module.get(SearchEngineDeleteCollectionsService);
        repository = module.get(SearchEngineICollectionRepository);
    });

    describe('main', () =>
    {
        test('SearchEngineDeleteCollectionsService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete collection and emit event', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve([])));
            expect(
                await service.main(
                    {},
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
