import { SearchEngineCreateCollectionsHandler } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { ICommandBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineCreateCollectionsHandler', () =>
{
    let handler: SearchEngineCreateCollectionsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineCreateCollectionsHandler,
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<SearchEngineCreateCollectionsHandler>(SearchEngineCreateCollectionsHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineCreateCollectionsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an searchEngineMockCollectionData created', async () =>
        {
            expect(await handler.main(searchEngineMockCollectionData)).toBe(true);
        });
    });
});
