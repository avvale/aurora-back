import { searchEngineMockCollectionData, SearchEngineUpdateCollectionByIdCommand } from '@app/search-engine/collection';
import { SearchEngineUpdateCollectionByIdCommandHandler } from '@app/search-engine/collection/application/update/search-engine-update-collection-by-id.command-handler';
import { SearchEngineUpdateCollectionByIdService } from '@app/search-engine/collection/application/update/search-engine-update-collection-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpdateCollectionByIdCommandHandler', () =>
{
    let commandHandler: SearchEngineUpdateCollectionByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineUpdateCollectionByIdCommandHandler,
                {
                    provide : SearchEngineUpdateCollectionByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<SearchEngineUpdateCollectionByIdCommandHandler>(SearchEngineUpdateCollectionByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateCollectionByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an collection created', async () =>
        {
            expect(await commandHandler.execute(
                new SearchEngineUpdateCollectionByIdCommand(
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
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
