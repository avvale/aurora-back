/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineUpdateCollectionByIdInput } from '@api/graphql';
import { SearchEngineUpsertCollectionHandler, SearchEngineUpsertCollectionResolver } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpsertCollectionResolver', () =>
{
    let resolver: SearchEngineUpsertCollectionResolver;
    let handler: SearchEngineUpsertCollectionHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineUpsertCollectionResolver,
                {
                    provide : SearchEngineUpsertCollectionHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEngineUpsertCollectionResolver>(SearchEngineUpsertCollectionResolver);
        handler = module.get<SearchEngineUpsertCollectionHandler>(SearchEngineUpsertCollectionHandler);
    });

    test('SearchEngineUpsertCollectionResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineUpsertCollectionResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an collection upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockCollectionData[0])));
            expect(await resolver.main(<SearchEngineUpdateCollectionByIdInput>searchEngineMockCollectionData[0])).toBe(searchEngineMockCollectionData[0]);
        });
    });
});
