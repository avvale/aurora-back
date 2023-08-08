/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineFindCollectionHandler, SearchEngineFindCollectionResolver } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineFindCollectionResolver', () =>
{
    let resolver: SearchEngineFindCollectionResolver;
    let handler: SearchEngineFindCollectionHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineFindCollectionResolver,
                {
                    provide : SearchEngineFindCollectionHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEngineFindCollectionResolver>(SearchEngineFindCollectionResolver);
        handler = module.get<SearchEngineFindCollectionHandler>(SearchEngineFindCollectionHandler);
    });

    test('SearchEngineFindCollectionResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineFindCollectionResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a collection', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockCollectionData[0])));
            expect(await resolver.main()).toBe(searchEngineMockCollectionData[0]);
        });
    });
});
