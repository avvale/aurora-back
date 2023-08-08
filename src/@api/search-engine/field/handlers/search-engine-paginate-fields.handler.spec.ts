/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEnginePaginateFieldsHandler } from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEnginePaginateFieldsHandler', () =>
{
    let handler: SearchEnginePaginateFieldsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEnginePaginateFieldsHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<SearchEnginePaginateFieldsHandler>(SearchEnginePaginateFieldsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('SearchEnginePaginateFieldsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEnginePaginateFieldsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a fields', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: searchEngineMockFieldData.length,
                count: searchEngineMockFieldData.length,
                rows : searchEngineMockFieldData,
            })));
            expect(
                await handler.main(
                    {},
                    {},
                ),
            )
                .toEqual({
                    total: searchEngineMockFieldData.length,
                    count: searchEngineMockFieldData.length,
                    rows : searchEngineMockFieldData,
                });
        });
    });
});
