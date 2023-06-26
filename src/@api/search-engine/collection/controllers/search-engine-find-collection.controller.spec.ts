/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineFindCollectionController } from './search-engine-find-collection.controller';
import { SearchEngineFindCollectionHandler } from '../handlers/search-engine-find-collection.handler';

// sources
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';

describe('SearchEngineFindCollectionController', () =>
{
    let controller: SearchEngineFindCollectionController;
    let handler: SearchEngineFindCollectionHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineFindCollectionController,
            ],
            providers: [
                {
                    provide : SearchEngineFindCollectionHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineFindCollectionController>(SearchEngineFindCollectionController);
        handler = module.get<SearchEngineFindCollectionHandler>(SearchEngineFindCollectionHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineFindCollectionController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a collection', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(collections[0])));
            expect(await controller.main()).toBe(collections[0]);
        });
    });
});