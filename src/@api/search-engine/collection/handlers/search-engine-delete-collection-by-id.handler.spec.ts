/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineDeleteCollectionByIdHandler } from './search-engine-delete-collection-by-id.handler';
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteCollectionByIdController', () =>
{
    let handler: SearchEngineDeleteCollectionByIdHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineDeleteCollectionByIdHandler,
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

        handler = module.get<SearchEngineDeleteCollectionByIdHandler>(SearchEngineDeleteCollectionByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    describe('main', () =>
    {
        test('SearchEngineDeleteCollectionByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an collection deleted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(collections[0])));
            expect(await handler.main(collections[0].id)).toBe(collections[0]);
        });
    });
});