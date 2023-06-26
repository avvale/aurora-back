/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineDeleteCollectionsController } from './search-engine-delete-collections.controller';
import { SearchEngineDeleteCollectionsHandler } from '../handlers/search-engine-delete-collections.handler';

// sources
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';

describe('SearchEngineDeleteCollectionsController', () =>
{
    let controller: SearchEngineDeleteCollectionsController;
    let handler: SearchEngineDeleteCollectionsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineDeleteCollectionsController,
            ],
            providers: [
                {
                    provide : SearchEngineDeleteCollectionsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineDeleteCollectionsController>(SearchEngineDeleteCollectionsController);
        handler = module.get<SearchEngineDeleteCollectionsHandler>(SearchEngineDeleteCollectionsHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineDeleteCollectionsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an collections deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(collections)));
            expect(await controller.main()).toBe(collections);
        });
    });
});