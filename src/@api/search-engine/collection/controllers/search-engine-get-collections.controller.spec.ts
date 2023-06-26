/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineGetCollectionsController } from './search-engine-get-collections.controller';
import { SearchEngineGetCollectionsHandler } from '../handlers/search-engine-get-collections.handler';

// sources
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';

describe('SearchEngineGetCollectionsController', () =>
{
    let controller: SearchEngineGetCollectionsController;
    let handler: SearchEngineGetCollectionsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineGetCollectionsController,
            ],
            providers: [
                {
                    provide : SearchEngineGetCollectionsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineGetCollectionsController>(SearchEngineGetCollectionsController);
        handler = module.get<SearchEngineGetCollectionsHandler>(SearchEngineGetCollectionsHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineGetCollectionsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a collections', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(collections)));
            expect(await controller.main()).toBe(collections);
        });
    });
});