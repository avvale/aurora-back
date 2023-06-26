/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineCreateCollectionResolver } from './search-engine-create-collection.resolver';
import { SearchEngineCreateCollectionHandler } from '../handlers/search-engine-create-collection.handler';
import { SearchEngineCreateCollectionInput } from '@api/graphql';

// sources
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';

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
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(collections[0])));
            expect(await resolver.main(<SearchEngineCreateCollectionInput>collections[0])).toBe(collections[0]);
        });
    });
});