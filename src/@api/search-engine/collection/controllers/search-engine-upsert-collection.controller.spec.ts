/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineUpsertCollectionController } from './search-engine-upsert-collection.controller';
import { SearchEngineUpsertCollectionHandler } from '../handlers/search-engine-upsert-collection.handler';

// sources
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';

describe('SearchEngineUpsertCollectionController', () =>
{
    let controller: SearchEngineUpsertCollectionController;
    let handler: SearchEngineUpsertCollectionHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineUpsertCollectionController,
            ],
            providers: [
                {
                    provide : SearchEngineUpsertCollectionHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineUpsertCollectionController>(SearchEngineUpsertCollectionController);
        handler = module.get<SearchEngineUpsertCollectionHandler>(SearchEngineUpsertCollectionHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineUpsertCollectionController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an collection upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(collections[0])));
            expect(await controller.main(collections[0])).toBe(collections[0]);
        });
    });
});