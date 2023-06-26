/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineFindCollectionByIdController } from './search-engine-find-collection-by-id.controller';
import { SearchEngineFindCollectionByIdHandler } from '../handlers/search-engine-find-collection-by-id.handler';

// sources
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';

describe('SearchEngineFindCollectionByIdController', () =>
{
    let controller: SearchEngineFindCollectionByIdController;
    let handler: SearchEngineFindCollectionByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineFindCollectionByIdController,
            ],
            providers: [
                {
                    provide : SearchEngineFindCollectionByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineFindCollectionByIdController>(SearchEngineFindCollectionByIdController);
        handler = module.get<SearchEngineFindCollectionByIdHandler>(SearchEngineFindCollectionByIdHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineFindCollectionByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an collection by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(collections[0])));
            expect(await controller.main(collections[0].id)).toBe(collections[0]);
        });
    });
});