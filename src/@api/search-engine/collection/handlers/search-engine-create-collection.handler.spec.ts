/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineCreateCollectionHandler } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineCreateCollectionHandler', () =>
{
    let handler: SearchEngineCreateCollectionHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineCreateCollectionHandler,
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

        handler = module.get<SearchEngineCreateCollectionHandler>(SearchEngineCreateCollectionHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('SearchEngineCreateCollectionHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an collection created', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockCollectionData[0])));
            expect(
                await handler.main(
                    searchEngineMockCollectionData[0],
                    'Europe/Madrid',
                ),
            )
                .toBe(searchEngineMockCollectionData[0]);
        });
    });
});
