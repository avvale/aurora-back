import { SearchEngineCreateCollectionsCommand, searchEngineMockCollectionData } from '@app/search-engine/collection';
import { SearchEngineCreateCollectionsCommandHandler } from '@app/search-engine/collection/application/create/search-engine-create-collections.command-handler';
import { SearchEngineCreateCollectionsService } from '@app/search-engine/collection/application/create/search-engine-create-collections.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('searchEngineCreateCollectionsCommandHandler', () =>
{
    let commandHandler: SearchEngineCreateCollectionsCommandHandler;

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
    });

    describe('main', () =>
    {
        test('SearchEngineCreateCollectionsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return SearchEngineMockCollectionData created', async () =>
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
