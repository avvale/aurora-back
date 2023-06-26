/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineUpdateCollectionByIdHandler } from './search-engine-update-collection-by-id.handler';
import { SearchEngineUpdateCollectionByIdInput } from '@api/graphql';
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpdateCollectionByIdHandler', () =>
{
    let handler: SearchEngineUpdateCollectionByIdHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineUpdateCollectionByIdHandler,
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

        handler = module.get<SearchEngineUpdateCollectionByIdHandler>(SearchEngineUpdateCollectionByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('SearchEngineUpdateCollectionByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineUpdateCollectionByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a collection updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(collections[0])));
            expect(await handler.main(<SearchEngineUpdateCollectionByIdInput>collections[0])).toBe(collections[0]);
        });
    });
});