/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineUpdateCollectionByIdController } from './search-engine-update-collection-by-id.controller';
import { SearchEngineUpdateCollectionByIdHandler } from '../handlers/search-engine-update-collection-by-id.handler';

// sources
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';

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
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(collections[0])));
            expect(await controller.main(collections[0])).toBe(collections[0]);
        });
    });
});