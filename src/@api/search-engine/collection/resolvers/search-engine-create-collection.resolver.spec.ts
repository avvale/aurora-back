/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineCreateCollectionInput } from '@api/graphql';
import { SearchEngineCreateCollectionHandler, SearchEngineCreateCollectionResolver } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineCreateCollectionResolver', () =>
{
    let resolver: SearchEngineCreateCollectionResolver;
    let handler: SearchEngineCreateCollectionHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineCreateCollectionResolver,
                {
                    provide : SearchEngineCreateCollectionHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEngineCreateCollectionResolver>(SearchEngineCreateCollectionResolver);
        handler = module.get<SearchEngineCreateCollectionHandler>(SearchEngineCreateCollectionHandler);
    });

    test('SearchEngineCreateCollectionResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineCreateCollectionResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an collection created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockCollectionData[0])));
            expect(await resolver.main(<SearchEngineCreateCollectionInput>searchEngineMockCollectionData[0])).toBe(searchEngineMockCollectionData[0]);
        });
    });
});
