/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineIndexCollectionHandler } from '../handlers/search-engine-index-collection.handler';
import { SearchEngineIndexCollectionController } from './search-engine-index-collection.controller';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineIndexCollectionController', () =>
{
    let controller: SearchEngineIndexCollectionController;
    let handler: SearchEngineIndexCollectionHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                SearchEngineIndexCollectionController,
            ],
            providers: [
                {
                    provide : SearchEngineIndexCollectionHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<SearchEngineIndexCollectionController>(SearchEngineIndexCollectionController);
        handler = module.get<SearchEngineIndexCollectionHandler>(SearchEngineIndexCollectionHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineIndexCollectionController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });
    });
});