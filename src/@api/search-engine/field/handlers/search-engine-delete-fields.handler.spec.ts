/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineDeleteFieldsHandler } from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteFieldsHandler', () =>
{
    let handler: SearchEngineDeleteFieldsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineDeleteFieldsHandler,
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

        handler = module.get<SearchEngineDeleteFieldsHandler>(SearchEngineDeleteFieldsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('SearchEngineDeleteFieldsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineDeleteFieldsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an searchEngineMockFieldData deleted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockFieldData)));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(searchEngineMockFieldData);
        });
    });
});
