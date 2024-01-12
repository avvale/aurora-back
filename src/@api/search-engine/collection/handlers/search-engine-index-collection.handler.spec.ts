/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineIndexCollectionHandler } from './search-engine-index-collection.handler';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineIndexCollectionHandler', () =>
{
    let handler: SearchEngineIndexCollectionHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineIndexCollectionHandler,
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

        handler     = module.get<SearchEngineIndexCollectionHandler>(SearchEngineIndexCollectionHandler);
        queryBus    = module.get<IQueryBus>(IQueryBus);
        commandBus  = module.get<ICommandBus>(ICommandBus);
    });

    describe('main', () =>
    {
        test('SearchEngineIndexCollectionHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });
    });
});