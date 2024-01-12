import { searchEngineMockCollectionData, SearchEngineUpsertCollectionCommand } from '@app/search-engine/collection';
import { SearchEngineUpsertCollectionCommandHandler } from '@app/search-engine/collection/application/upsert/search-engine-upsert-collection.command-handler';
import { SearchEngineUpsertCollectionService } from '@app/search-engine/collection/application/upsert/search-engine-upsert-collection.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpsertCollectionCommandHandler', () =>
{
    let commandHandler: SearchEngineUpsertCollectionCommandHandler;
    let service: SearchEngineUpsertCollectionService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineUpsertCollectionCommandHandler,
                {
                    provide : SearchEngineUpsertCollectionService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<SearchEngineUpsertCollectionCommandHandler>(SearchEngineUpsertCollectionCommandHandler);
        service = module.get<SearchEngineUpsertCollectionService>(SearchEngineUpsertCollectionService);
    });

    describe('main', () =>
    {
        test('UpsertCollectionCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should upsert the values objects and pass them as parameters to the SearchEngineUpsertCollectionService', async () =>
        {
            expect(await commandHandler.execute(
                new SearchEngineUpsertCollectionCommand(
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
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
