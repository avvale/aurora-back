/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEnginePaginateCollectionsHandler } from './search-engine-paginate-collections.handler';
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEnginePaginateCollectionsHandler', () =>
{
    let handler: SearchEnginePaginateCollectionsHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEnginePaginateCollectionsHandler,
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

        handler = module.get<SearchEnginePaginateCollectionsHandler>(SearchEnginePaginateCollectionsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('SearchEnginePaginateCollectionsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEnginePaginateCollectionsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a collections', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: collections.length,
                count: collections.length,
                rows : collections,
            })));
            expect(await handler.main()).toEqual({
                total: collections.length,
                count: collections.length,
                rows : collections,
            });
        });
    });
});