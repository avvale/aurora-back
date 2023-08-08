import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { searchEngineMockCollectionData } from '@app/search-engine/collection/infrastructure/mock/search-engine-mock-collection.data';
import { SearchEngineUpdateCollectionsCommandHandler } from './search-engine-update-collections.command-handler';
import { SearchEngineUpdateCollectionsCommand } from './search-engine-update-collections.command';
import { SearchEngineUpdateCollectionsService } from './search-engine-update-collections.service';

describe('SearchEngineUpdateCollectionsCommandHandler', () =>
{
    let commandHandler: SearchEngineUpdateCollectionsCommandHandler;
    let service: SearchEngineUpdateCollectionsService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineUpdateCollectionsCommandHandler,
                {
                    provide : SearchEngineUpdateCollectionsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<SearchEngineUpdateCollectionsCommandHandler>(SearchEngineUpdateCollectionsCommandHandler);
        service = module.get<SearchEngineUpdateCollectionsService>(SearchEngineUpdateCollectionsService);
    });

    describe('main', () =>
    {
        test('UpdateCollectionsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an collections updated', async () =>
        {
            expect(await commandHandler.execute(
                new SearchEngineUpdateCollectionsCommand(
                    {
                        id: searchEngineMockCollectionData[0].id,
                        name: searchEngineMockCollectionData[0].name,
                        alias: searchEngineMockCollectionData[0].alias,
                        status: searchEngineMockCollectionData[0].status,
                        documentsNumber: searchEngineMockCollectionData[0].documentsNumber,
                        defaultSortingField: searchEngineMockCollectionData[0].defaultSortingField,
                        numMemoryShards: searchEngineMockCollectionData[0].numMemoryShards,
                        timestampCreatedAt: searchEngineMockCollectionData[0].timestampCreatedAt,
                        isEnableNestedFields: searchEngineMockCollectionData[0].isEnableNestedFields,
                    },
                    {},
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
