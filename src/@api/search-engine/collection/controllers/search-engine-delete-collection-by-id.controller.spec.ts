/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineDeleteCollectionByIdHandler } from '../handlers/search-engine-delete-collection-by-id.handler';
import { SearchEngineDeleteCollectionByIdController } from './search-engine-delete-collection-by-id.controller';
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';
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
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(collections[0])));
            expect(await controller.main(collections[0].id)).toBe(collections[0]);
        });
    });
});