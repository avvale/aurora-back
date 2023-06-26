/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineUpdateCollectionsResolver } from './search-engine-update-collections.resolver';
import { SearchEngineUpdateCollectionsHandler } from '../handlers/search-engine-update-collections.handler';
import { SearchEngineUpdateCollectionsInput } from '@api/graphql';

// sources
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';

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
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(collections[0])));
            expect(await resolver.main(<SearchEngineUpdateCollectionsInput>collections[0])).toBe(collections[0]);
        });
    });
});