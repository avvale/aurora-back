/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineUpdateCollectionsInput } from '@api/graphql';
import { SearchEngineUpdateCollectionsHandler, SearchEngineUpdateCollectionsResolver } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpdateCollectionsResolver', () =>
{
    let resolver: SearchEngineUpdateCollectionsResolver;
    let handler: SearchEngineUpdateCollectionsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineUpdateCollectionsResolver,
                {
                    provide : SearchEngineUpdateCollectionsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEngineUpdateCollectionsResolver>(SearchEngineUpdateCollectionsResolver);
        handler = module.get<SearchEngineUpdateCollectionsHandler>(SearchEngineUpdateCollectionsHandler);
    });

    test('SearchEngineUpdateCollectionsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineUpdateCollectionsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a collections updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockCollectionData[0])));
            expect(await resolver.main(<SearchEngineUpdateCollectionsInput>searchEngineMockCollectionData[0])).toBe(searchEngineMockCollectionData[0]);
        });
    });
});
