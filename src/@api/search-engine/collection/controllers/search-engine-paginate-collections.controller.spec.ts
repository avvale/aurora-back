import { SearchEnginePaginateCollectionsController, SearchEnginePaginateCollectionsHandler } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEnginePaginateCollectionsController', () =>
{
    let controller: SearchEnginePaginateCollectionsController;
    let handler: SearchEnginePaginateCollectionsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEnginePaginateCollectionsController,
            ],
            providers: [
                {
                    provide : SearchEnginePaginateCollectionsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEnginePaginateCollectionsController>(SearchEnginePaginateCollectionsController);
        handler = module.get<SearchEnginePaginateCollectionsHandler>(SearchEnginePaginateCollectionsHandler);
    });

    describe('main', () =>
    {
        test('SearchEnginePaginateCollectionsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a searchEngineMockCollectionData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : searchEngineMockCollectionData,
            })));
            expect(await controller.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : searchEngineMockCollectionData,
            });
        });
    });
});
