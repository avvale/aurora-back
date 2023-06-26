import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineCreateCollectionsController } from './search-engine-create-collections.controller';
import { SearchEngineCreateCollectionsHandler } from '../handlers/search-engine-create-collections.handler';

// sources
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';

describe('SearchEngineCreateCollectionsController', () =>
{
    let controller: SearchEngineCreateCollectionsController;
    let handler: SearchEngineCreateCollectionsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [
                SearchEngineCreateCollectionsController,
            ],
            providers: [
                {
                    provide : SearchEngineCreateCollectionsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineCreateCollectionsController>(SearchEngineCreateCollectionsController);
        handler = module.get<SearchEngineCreateCollectionsHandler>(SearchEngineCreateCollectionsHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineCreateCollectionsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an collections created', async () =>
        {
            expect(await controller.main(collections)).toBe(undefined);
        });
    });
});