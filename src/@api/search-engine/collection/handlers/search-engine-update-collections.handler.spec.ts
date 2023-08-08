/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineUpdateCollectionsInput } from '@api/graphql';
import { SearchEngineUpdateCollectionsHandler } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpdateCollectionsHandler', () =>
{
    let handler: SearchEngineUpdateCollectionsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineUpdateCollectionsHandler,
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

        handler = module.get<SearchEngineUpdateCollectionsHandler>(SearchEngineUpdateCollectionsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('SearchEngineUpdateCollectionsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineUpdateCollectionsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a collections updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockCollectionData[0])));
            expect(
                await handler.main(
                    <SearchEngineUpdateCollectionsInput>searchEngineMockCollectionData[0],
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(searchEngineMockCollectionData[0]);
        });
    });
});
