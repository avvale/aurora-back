import { searchEngineMockCollectionData, SearchEngineUpdateCollectionsCommand } from '@app/search-engine/collection';
import { SearchEngineUpdateCollectionsCommandHandler } from '@app/search-engine/collection/application/update/search-engine-update-collections.command-handler';
import { SearchEngineUpdateCollectionsService } from '@app/search-engine/collection/application/update/search-engine-update-collections.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpdateCollectionsCommandHandler', () =>
{
    let commandHandler: SearchEngineUpdateCollectionsCommandHandler;

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
