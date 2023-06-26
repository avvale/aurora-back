/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineUpdateCollectionsHandler } from './search-engine-update-collections.handler';
import { SearchEngineUpdateCollectionsInput } from '@api/graphql';
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpdateCollectionsHandler', () =>
{
    let handler: SearchEngineUpdateCollectionsHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineUpdateCollectionsHandler,
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

        handler = module.get<SearchEngineUpdateCollectionsHandler>(SearchEngineUpdateCollectionsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('SearchEngineUpdateCollectionsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineUpdateCollectionsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a collections updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(collections[0])));
            expect(await handler.main(<SearchEngineUpdateCollectionsInput>collections[0])).toBe(collections[0]);
        });
    });
});