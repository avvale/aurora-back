/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineGetCollectionsHandler } from './search-engine-get-collections.handler';
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineGetCollectionsHandler', () =>
{
    let handler: SearchEngineGetCollectionsHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineGetCollectionsHandler,
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

        handler = module.get<SearchEngineGetCollectionsHandler>(SearchEngineGetCollectionsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('SearchEngineGetCollectionsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineGetCollectionsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a collections', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(collections)));
            expect(await handler.main()).toBe(collections);
        });
    });
});