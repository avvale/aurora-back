/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineGetCollectionsResolver } from './search-engine-get-collections.resolver';
import { SearchEngineGetCollectionsHandler } from '../handlers/search-engine-get-collections.handler';

// sources
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';

describe('SearchEngineGetCollectionsResolver', () =>
{
    let resolver: SearchEngineGetCollectionsResolver;
    let handler: SearchEngineGetCollectionsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineGetCollectionsResolver,
                {
                    provide : SearchEngineGetCollectionsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEngineGetCollectionsResolver>(SearchEngineGetCollectionsResolver);
        handler = module.get<SearchEngineGetCollectionsHandler>(SearchEngineGetCollectionsHandler);
    });

    test('SearchEngineGetCollectionsResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineGetCollectionsResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a collections', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(collections)));
            expect(await resolver.main()).toBe(collections);
        });
    });
});