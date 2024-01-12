import { SearchEngineCreateCollectionCommandHandler } from './search-engine-create-collection.command-handler';
import { SearchEngineCreateCollectionService } from './search-engine-create-collection.service';
import { SearchEngineCreateCollectionCommand, searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineCreateCollectionCommandHandler', () =>
{
    let commandHandler: SearchEngineCreateCollectionCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineCreateCollectionCommandHandler,
                {
                    provide : SearchEngineCreateCollectionService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<SearchEngineCreateCollectionCommandHandler>(SearchEngineCreateCollectionCommandHandler);
    });

    describe('main', () =>
    {
        test('CreateCollectionCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the values objects and pass them as parameters to the SearchEngineCreateCollectionService', async () =>
        {
            expect(await commandHandler.execute(
                new SearchEngineCreateCollectionCommand(
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
