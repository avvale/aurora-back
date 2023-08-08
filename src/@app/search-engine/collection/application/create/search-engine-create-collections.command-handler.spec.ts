/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { searchEngineMockCollectionData } from '@app/search-engine/collection/infrastructure/mock/search-engine-mock-collection.data';
import { SearchEngineCreateCollectionsCommandHandler } from './search-engine-create-collections.command-handler';
import { SearchEngineCreateCollectionsCommand } from './search-engine-create-collections.command';
import { SearchEngineCreateCollectionsService } from './search-engine-create-collections.service';

describe('searchEngineCreateCollectionsCommandHandler', () =>
{
    let commandHandler: SearchEngineCreateCollectionsCommandHandler;
    let service: SearchEngineCreateCollectionsService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineCreateCollectionsCommandHandler,
                {
                    provide : SearchEngineCreateCollectionsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<SearchEngineCreateCollectionsCommandHandler>(SearchEngineCreateCollectionsCommandHandler);
        service = module.get<SearchEngineCreateCollectionsService>(SearchEngineCreateCollectionsService);
    });

    describe('main', () =>
    {
        test('SearchEngineCreateCollectionsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return SearchEngineMockCollectionData createds', async () =>
        {
            expect(await commandHandler.execute(
                new SearchEngineCreateCollectionsCommand(
                    searchEngineMockCollectionData,
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
