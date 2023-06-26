/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEnginePaginateCollectionsController } from './search-engine-paginate-collections.controller';
import { SearchEnginePaginateCollectionsHandler } from '../handlers/search-engine-paginate-collections.handler';

// sources
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';

describe('SearchEnginePaginateCollectionsController', () =>
{
    let controller: SearchEnginePaginateCollectionsController;
    let handler: SearchEnginePaginateCollectionsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEnginePaginateCollectionsController,
            ],
            providers: [
                {
                    provide : SearchEnginePaginateCollectionsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEnginePaginateCollectionsController>(SearchEnginePaginateCollectionsController);
        handler = module.get<SearchEnginePaginateCollectionsHandler>(SearchEnginePaginateCollectionsHandler);
    });

    describe('main', () =>
    {
        test('SearchEnginePaginateCollectionsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a collections', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : collections,
            })));
            expect(await controller.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : collections,
            });
        });
    });
});