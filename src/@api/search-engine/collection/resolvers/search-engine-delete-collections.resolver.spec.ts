/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineDeleteCollectionsResolver } from './search-engine-delete-collections.resolver';
import { SearchEngineDeleteCollectionsHandler } from '../handlers/search-engine-delete-collections.handler';

// sources
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';

describe('SearchEngineDeleteCollectionsResolver', () =>
{
    let resolver: SearchEngineDeleteCollectionsResolver;
    let handler: SearchEngineDeleteCollectionsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineDeleteCollectionsResolver,
                {
                    provide : SearchEngineDeleteCollectionsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEngineDeleteCollectionsResolver>(SearchEngineDeleteCollectionsResolver);
        handler = module.get<SearchEngineDeleteCollectionsHandler>(SearchEngineDeleteCollectionsHandler);
    });

    test('SearchEngineDeleteCollectionsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineDeleteCollectionsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an collections deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(collections)));
            expect(await resolver.main()).toBe(collections);
        });
    });
});