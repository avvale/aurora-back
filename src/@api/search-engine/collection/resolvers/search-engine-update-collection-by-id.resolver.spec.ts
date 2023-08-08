/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineUpdateCollectionByIdInput } from '@api/graphql';
import { SearchEngineUpdateCollectionByIdHandler, SearchEngineUpdateCollectionByIdResolver } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpdateCollectionByIdResolver', () =>
{
    let resolver: SearchEngineUpdateCollectionByIdResolver;
    let handler: SearchEngineUpdateCollectionByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineUpdateCollectionByIdResolver,
                {
                    provide : SearchEngineUpdateCollectionByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEngineUpdateCollectionByIdResolver>(SearchEngineUpdateCollectionByIdResolver);
        handler = module.get<SearchEngineUpdateCollectionByIdHandler>(SearchEngineUpdateCollectionByIdHandler);
    });

    test('SearchEngineUpdateCollectionByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineUpdateCollectionByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a collection by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockCollectionData[0])));
            expect(await resolver.main(<SearchEngineUpdateCollectionByIdInput>searchEngineMockCollectionData[0])).toBe(searchEngineMockCollectionData[0]);
        });
    });
});
