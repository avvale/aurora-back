/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineUpdateCollectionsController } from './search-engine-update-collections.controller';
import { SearchEngineUpdateCollectionsHandler } from '../handlers/search-engine-update-collections.handler';

// sources
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';

describe('SearchEngineUpdateCollectionsController', () =>
{
    let controller: SearchEngineUpdateCollectionsController;
    let handler: SearchEngineUpdateCollectionsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineUpdateCollectionsController,
            ],
            providers: [
                {
                    provide : SearchEngineUpdateCollectionsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineUpdateCollectionsController>(SearchEngineUpdateCollectionsController);
        handler = module.get<SearchEngineUpdateCollectionsHandler>(SearchEngineUpdateCollectionsHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineUpdateCollectionsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a collections updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(collections[0])));
            expect(await controller.main(collections[0])).toBe(collections[0]);
        });
    });
});