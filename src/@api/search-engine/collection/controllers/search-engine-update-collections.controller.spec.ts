import { SearchEngineUpdateCollectionsController, SearchEngineUpdateCollectionsHandler } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpdateCollectionsController', () =>
{
    let controller: SearchEngineUpdateCollectionsController;
    let handler: SearchEngineUpdateCollectionsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineUpdateCollectionsController,
            ],
            providers: [
                {
                    provide : SearchEngineUpdateCollectionsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineUpdateCollectionsController>(SearchEngineUpdateCollectionsController);
        handler = module.get<SearchEngineUpdateCollectionsHandler>(SearchEngineUpdateCollectionsHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineUpdateCollectionsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a collections updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockCollectionData[0])));
            expect(await controller.main(searchEngineMockCollectionData[0])).toBe(searchEngineMockCollectionData[0]);
        });
    });
});
