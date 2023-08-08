/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineDeleteCollectionByIdHandler } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteCollectionByIdController', () =>
{
    let handler: SearchEngineDeleteCollectionByIdHandler;
    let queryBus: IQueryBus;

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
    });

    describe('main', () =>
    {
        test('SearchEngineDeleteCollectionByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an collection deleted', async () =>
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
