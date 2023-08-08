/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineFindCollectionByIdHandler } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineFindCollectionByIdHandler', () =>
{
    let handler: SearchEngineFindCollectionByIdHandler;
    let queryBus: IQueryBus;

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
            ],
        })
            .compile();

        handler = module.get<SearchEngineFindCollectionByIdHandler>(SearchEngineFindCollectionByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
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
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockCollectionData[0])));
            expect(
                await handler.main(
                    searchEngineMockCollectionData[0].id,
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(searchEngineMockCollectionData[0]);
        });
    });
});
