import { SearchEngineFindCollectionController, SearchEngineFindCollectionHandler } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineFindCollectionController', () =>
{
    let controller: SearchEngineFindCollectionController;
    let handler: SearchEngineFindCollectionHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineFindCollectionController,
            ],
            providers: [
                {
                    provide : SearchEngineFindCollectionHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineFindCollectionController>(SearchEngineFindCollectionController);
        handler = module.get<SearchEngineFindCollectionHandler>(SearchEngineFindCollectionHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineFindCollectionController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a collection', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockCollectionData[0])));
            expect(await controller.main()).toBe(searchEngineMockCollectionData[0]);
        });
    });
});
