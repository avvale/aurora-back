/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineFindFieldHandler } from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineFindFieldHandler', () =>
{
    let handler: SearchEngineFindFieldHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineFindFieldHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<SearchEngineFindFieldHandler>(SearchEngineFindFieldHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('SearchEngineFindFieldHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineFindFieldHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a field', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockFieldData[0])));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(searchEngineMockFieldData[0]);
        });
    });
});
