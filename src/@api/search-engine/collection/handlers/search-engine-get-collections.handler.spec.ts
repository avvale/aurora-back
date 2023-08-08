/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineGetCollectionsHandler } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineGetCollectionsHandler', () =>
{
    let handler: SearchEngineGetCollectionsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineGetCollectionsHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<SearchEngineGetCollectionsHandler>(SearchEngineGetCollectionsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('SearchEngineGetCollectionsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineGetCollectionsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a searchEngineMockCollectionData', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockCollectionData)));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(searchEngineMockCollectionData);
        });
    });
});
