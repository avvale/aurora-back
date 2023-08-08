/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineUpdateFieldByIdInput } from '@api/graphql';
import { SearchEngineUpdateFieldByIdHandler } from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpdateFieldByIdHandler', () =>
{
    let handler: SearchEngineUpdateFieldByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineUpdateFieldByIdHandler,
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

        handler = module.get<SearchEngineUpdateFieldByIdHandler>(SearchEngineUpdateFieldByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('SearchEngineUpdateFieldByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineUpdateFieldByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a field updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockFieldData[0])));
            expect(
                await handler.main(
                    <SearchEngineUpdateFieldByIdInput>searchEngineMockFieldData[0],
                    {},
                    'Europe/Madrid',
                ))
                .toBe(searchEngineMockFieldData[0]);
        });
    });
});
