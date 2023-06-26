/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineFindCollectionByIdHandler } from './search-engine-find-collection-by-id.handler';
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineFindCollectionByIdHandler', () =>
{
    let handler: SearchEngineFindCollectionByIdHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineFindCollectionByIdHandler,
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

        handler = module.get<SearchEngineFindCollectionByIdHandler>(SearchEngineFindCollectionByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('SearchEngineFindCollectionByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineFindCollectionByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an collection by id', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(collections[0])));
            expect(await handler.main(collections[0].id)).toBe(collections[0]);
        });
    });
});