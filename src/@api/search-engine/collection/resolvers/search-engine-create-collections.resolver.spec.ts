import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineCreateCollectionsResolver } from './search-engine-create-collections.resolver';
import { SearchEngineCreateCollectionsHandler } from '../handlers/search-engine-create-collections.handler';
import { SearchEngineCreateCollectionInput } from '@api/graphql';

// sources
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';

describe('SearchEngineCreateCollectionsResolver', () =>
{
    let resolver: SearchEngineCreateCollectionsResolver;
    let handler: SearchEngineCreateCollectionsHandler;

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
        handler = module.get<SearchEngineCreateCollectionsHandler>(SearchEngineCreateCollectionsHandler);
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
            expect(await resolver.main(<SearchEngineCreateCollectionInput[]>collections)).toBe(undefined);
        });
    });
});