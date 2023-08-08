import { SearchEngineUpdateFieldByIdController, SearchEngineUpdateFieldByIdHandler } from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpdateFieldByIdController', () =>
{
    let controller: SearchEngineUpdateFieldByIdController;
    let handler: SearchEngineUpdateFieldByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineUpdateFieldByIdController,
            ],
            providers: [
                {
                    provide : SearchEngineUpdateFieldByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineUpdateFieldByIdController>(SearchEngineUpdateFieldByIdController);
        handler = module.get<SearchEngineUpdateFieldByIdHandler>(SearchEngineUpdateFieldByIdHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineUpdateFieldByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a field updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockFieldData[0])));
            expect(await controller.main(searchEngineMockFieldData[0])).toBe(searchEngineMockFieldData[0]);
        });
    });
});
