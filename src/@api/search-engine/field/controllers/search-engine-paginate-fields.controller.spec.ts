import { SearchEnginePaginateFieldsController, SearchEnginePaginateFieldsHandler } from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEnginePaginateFieldsController', () =>
{
    let controller: SearchEnginePaginateFieldsController;
    let handler: SearchEnginePaginateFieldsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEnginePaginateFieldsController,
            ],
            providers: [
                {
                    provide : SearchEnginePaginateFieldsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEnginePaginateFieldsController>(SearchEnginePaginateFieldsController);
        handler = module.get<SearchEnginePaginateFieldsHandler>(SearchEnginePaginateFieldsHandler);
    });

    describe('main', () =>
    {
        test('SearchEnginePaginateFieldsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a searchEngineMockFieldData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : searchEngineMockFieldData,
            })));
            expect(await controller.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : searchEngineMockFieldData,
            });
        });
    });
});
