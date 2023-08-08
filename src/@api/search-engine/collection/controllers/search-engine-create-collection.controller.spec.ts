import { SearchEngineCreateCollectionController, SearchEngineCreateCollectionHandler } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineCreateCollectionController', () =>
{
    let controller: SearchEngineCreateCollectionController;
    let handler: SearchEngineCreateCollectionHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineCreateCollectionController,
            ],
            providers: [
                {
                    provide : SearchEngineCreateCollectionHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineCreateCollectionController>(SearchEngineCreateCollectionController);
        handler = module.get<SearchEngineCreateCollectionHandler>(SearchEngineCreateCollectionHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineCreateCollectionController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an collection created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockCollectionData[0])));
            expect(
                await controller.main(
                    searchEngineMockCollectionData[0],
                ),
            )
                .toBe(searchEngineMockCollectionData[0]);
        });
    });
});
