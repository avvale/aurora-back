import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { searchEngineMockCollectionData } from '@app/search-engine/collection/infrastructure/mock/search-engine-mock-collection.data';
import { SearchEngineUpsertCollectionCommandHandler } from './search-engine-upsert-collection.command-handler';
import { SearchEngineUpsertCollectionCommand } from './search-engine-upsert-collection.command';
import { SearchEngineUpsertCollectionService } from './search-engine-upsert-collection.service';

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
