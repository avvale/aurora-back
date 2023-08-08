/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineUpdateFieldsInput } from '@api/graphql';
import { SearchEngineUpdateFieldsHandler } from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpdateFieldsHandler', () =>
{
    let handler: SearchEngineUpdateFieldsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineUpdateFieldsHandler,
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

        handler = module.get<SearchEngineUpdateFieldsHandler>(SearchEngineUpdateFieldsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('SearchEngineUpdateFieldsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineUpdateFieldsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a fields updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockFieldData[0])));
            expect(
                await handler.main(
                    <SearchEngineUpdateFieldsInput>searchEngineMockFieldData[0],
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(searchEngineMockFieldData[0]);
        });
    });
});
