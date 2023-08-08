/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineDeleteCollectionByIdHandler, SearchEngineDeleteCollectionByIdResolver } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteCollectionByIdResolver', () =>
{
    let resolver: SearchEngineDeleteCollectionByIdResolver;
    let handler: SearchEngineDeleteCollectionByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineDeleteCollectionByIdResolver,
                {
                    provide : SearchEngineDeleteCollectionByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEngineDeleteCollectionByIdResolver>(SearchEngineDeleteCollectionByIdResolver);
        handler = module.get<SearchEngineDeleteCollectionByIdHandler>(SearchEngineDeleteCollectionByIdHandler);
    });

    test('SearchEngineDeleteCollectionByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineDeleteCollectionByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an collection deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockCollectionData[0])));
            expect(await resolver.main(searchEngineMockCollectionData[0].id)).toBe(searchEngineMockCollectionData[0]);
        });
    });
});
