import { SearchEngineCreateCollectionInput } from '@api/graphql';
import { SearchEngineCreateCollectionsHandler, SearchEngineCreateCollectionsResolver } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineCreateCollectionsResolver', () =>
{
    let resolver: SearchEngineCreateCollectionsResolver;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineCreateCollectionsResolver,
                {
                    provide : SearchEngineCreateCollectionsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEngineCreateCollectionsResolver>(SearchEngineCreateCollectionsResolver);
    });

    test('SearchEngineCreateCollectionsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineCreateCollectionsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an collections created', async () =>
        {
            expect(await resolver.main(<SearchEngineCreateCollectionInput[]>searchEngineMockCollectionData)).toBe(undefined);
        });
    });
});
