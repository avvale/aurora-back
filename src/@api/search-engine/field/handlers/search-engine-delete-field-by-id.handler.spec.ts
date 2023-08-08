/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineDeleteFieldByIdHandler } from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteFieldByIdController', () =>
{
    let handler: SearchEngineDeleteFieldByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineDeleteFieldByIdHandler,
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

        handler = module.get<SearchEngineDeleteFieldByIdHandler>(SearchEngineDeleteFieldByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('SearchEngineDeleteFieldByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an field deleted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockFieldData[0])));
            expect(
                await handler.main(
                    searchEngineMockFieldData[0].id,
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(searchEngineMockFieldData[0]);
        });
    });
});
