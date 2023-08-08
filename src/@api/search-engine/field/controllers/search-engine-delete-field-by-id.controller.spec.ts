/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineDeleteFieldByIdController, SearchEngineDeleteFieldByIdHandler } from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteFieldByIdController', () =>
{
    let controller: SearchEngineDeleteFieldByIdController;
    let handler: SearchEngineDeleteFieldByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineDeleteFieldByIdController,
            ],
            providers: [
                {
                    provide : SearchEngineDeleteFieldByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineDeleteFieldByIdController>(SearchEngineDeleteFieldByIdController);
        handler = module.get<SearchEngineDeleteFieldByIdHandler>(SearchEngineDeleteFieldByIdHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineDeleteFieldByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an field deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockFieldData[0])));
            expect(await controller.main(searchEngineMockFieldData[0].id)).toBe(searchEngineMockFieldData[0]);
        });
    });
});
