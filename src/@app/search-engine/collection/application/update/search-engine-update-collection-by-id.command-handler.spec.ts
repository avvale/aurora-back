import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { searchEngineMockCollectionData } from '@app/search-engine/collection/infrastructure/mock/search-engine-mock-collection.data';
import { SearchEngineUpdateCollectionByIdCommandHandler } from './search-engine-update-collection-by-id.command-handler';
import { SearchEngineUpdateCollectionByIdCommand } from './search-engine-update-collection-by-id.command';
import { SearchEngineUpdateCollectionByIdService } from './search-engine-update-collection-by-id.service';

describe('SearchEngineUpdateCollectionByIdCommandHandler', () =>
{
    let commandHandler: SearchEngineUpdateCollectionByIdCommandHandler;
    let service: SearchEngineUpdateCollectionByIdService;

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
        service = module.get<SearchEngineUpdateCollectionByIdService>(SearchEngineUpdateCollectionByIdService);
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
