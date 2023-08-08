/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineGetCollectionsHandler, SearchEngineGetCollectionsResolver } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

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

        test('should return a searchEngineMockCollectionData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockCollectionData)));
            expect(await resolver.main()).toBe(searchEngineMockCollectionData);
        });
    });
});
