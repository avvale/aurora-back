/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEnginePaginateCollectionsHandler, SearchEnginePaginateCollectionsResolver } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEnginePaginateCollectionsResolver', () =>
{
    let resolver: SearchEnginePaginateCollectionsResolver;
    let handler: SearchEnginePaginateCollectionsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEnginePaginateCollectionsResolver,
                {
                    provide : SearchEnginePaginateCollectionsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEnginePaginateCollectionsResolver>(SearchEnginePaginateCollectionsResolver);
        handler = module.get<SearchEnginePaginateCollectionsHandler>(SearchEnginePaginateCollectionsHandler);
    });

    test('SearchEnginePaginateCollectionsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEnginePaginateCollectionsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a searchEngineMockCollectionData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : searchEngineMockCollectionData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : searchEngineMockCollectionData,
            });
        });
    });
});
