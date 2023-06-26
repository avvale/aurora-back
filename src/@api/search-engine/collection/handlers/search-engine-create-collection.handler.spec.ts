/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineCreateCollectionHandler } from './search-engine-create-collection.handler';
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineCreateCollectionHandler', () =>
{
    let handler: SearchEngineCreateCollectionHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineCreateCollectionHandler,
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

        handler = module.get<SearchEngineCreateCollectionHandler>(SearchEngineCreateCollectionHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    describe('main', () =>
    {
        test('SearchEngineCreateCollectionHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an collection created', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(collections[0])));
            expect(await handler.main(collections[0])).toBe(collections[0]);
        });
    });
});