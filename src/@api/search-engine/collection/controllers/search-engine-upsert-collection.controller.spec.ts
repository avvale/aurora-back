import { SearchEngineUpsertCollectionController, SearchEngineUpsertCollectionHandler } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpsertCollectionController', () =>
{
    let controller: SearchEngineUpsertCollectionController;
    let handler: SearchEngineUpsertCollectionHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineUpsertCollectionController,
            ],
            providers: [
                {
                    provide : SearchEngineUpsertCollectionHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineUpsertCollectionController>(SearchEngineUpsertCollectionController);
        handler = module.get<SearchEngineUpsertCollectionHandler>(SearchEngineUpsertCollectionHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineUpsertCollectionController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an collection upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockCollectionData[0])));
            expect(await controller.main(searchEngineMockCollectionData[0])).toBe(searchEngineMockCollectionData[0]);
        });
    });
});
