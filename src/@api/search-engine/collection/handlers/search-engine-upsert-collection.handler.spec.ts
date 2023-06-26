/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineUpsertCollectionHandler } from './search-engine-upsert-collection.handler';
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpsertCollectionHandler', () =>
{
    let handler: SearchEngineUpsertCollectionHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineUpsertCollectionHandler,
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

        handler = module.get<SearchEngineUpsertCollectionHandler>(SearchEngineUpsertCollectionHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    describe('main', () =>
    {
        test('SearchEngineUpsertCollectionHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an collection upserted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(collections[0])));
            expect(await handler.main(collections[0])).toBe(collections[0]);
        });
    });
});