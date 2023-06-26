/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEnginePaginateCollectionsResolver } from './search-engine-paginate-collections.resolver';
import { SearchEnginePaginateCollectionsHandler } from '../handlers/search-engine-paginate-collections.handler';

// sources
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';

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

        test('should return a collections', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : collections,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : collections,
            });
        });
    });
});