import { SearchEngineUpdateCollectionByIdController, SearchEngineUpdateCollectionByIdHandler } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpdateCollectionByIdController', () =>
{
    let controller: SearchEngineUpdateCollectionByIdController;
    let handler: SearchEngineUpdateCollectionByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineUpdateCollectionByIdController,
            ],
            providers: [
                {
                    provide : SearchEngineUpdateCollectionByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineUpdateCollectionByIdController>(SearchEngineUpdateCollectionByIdController);
        handler = module.get<SearchEngineUpdateCollectionByIdHandler>(SearchEngineUpdateCollectionByIdHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineUpdateCollectionByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a collection updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockCollectionData[0])));
            expect(await controller.main(searchEngineMockCollectionData[0])).toBe(searchEngineMockCollectionData[0]);
        });
    });
});
