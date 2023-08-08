/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineDeleteCollectionByIdController, SearchEngineDeleteCollectionByIdHandler } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteCollectionByIdController', () =>
{
    let controller: SearchEngineDeleteCollectionByIdController;
    let handler: SearchEngineDeleteCollectionByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineDeleteCollectionByIdController,
            ],
            providers: [
                {
                    provide : SearchEngineDeleteCollectionByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineDeleteCollectionByIdController>(SearchEngineDeleteCollectionByIdController);
        handler = module.get<SearchEngineDeleteCollectionByIdHandler>(SearchEngineDeleteCollectionByIdHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineDeleteCollectionByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an collection deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockCollectionData[0])));
            expect(await controller.main(searchEngineMockCollectionData[0].id)).toBe(searchEngineMockCollectionData[0]);
        });
    });
});
