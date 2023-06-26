import { Test, TestingModule } from '@nestjs/testing';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

// custom items
import { SearchEngineCreateCollectionsHandler } from './search-engine-create-collections.handler';
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';

describe('SearchEngineCreateCollectionsHandler', () =>
{
    let handler: SearchEngineCreateCollectionsHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineCreateCollectionsHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<SearchEngineCreateCollectionsHandler>(SearchEngineCreateCollectionsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    describe('main', () =>
    {
        test('SearchEngineCreateCollectionsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an collections created', async () =>
        {
            expect(await handler.main(collections)).toBe(true);
        });
    });
});