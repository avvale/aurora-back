/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineCreateCollectionController } from './search-engine-create-collection.controller';
import { SearchEngineCreateCollectionHandler } from '../handlers/search-engine-create-collection.handler';

// sources
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';

describe('SearchEngineCreateCollectionController', () =>
{
    let controller: SearchEngineCreateCollectionController;
    let handler: SearchEngineCreateCollectionHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineCreateCollectionController,
            ],
            providers: [
                {
                    provide : SearchEngineCreateCollectionHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineCreateCollectionController>(SearchEngineCreateCollectionController);
        handler = module.get<SearchEngineCreateCollectionHandler>(SearchEngineCreateCollectionHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineCreateCollectionController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an collection created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(collections[0])));
            expect(await controller.main(collections[0])).toBe(collections[0]);
        });
    });
});