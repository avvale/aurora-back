/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineUpdateCollectionByIdResolver } from './search-engine-update-collection-by-id.resolver';
import { SearchEngineUpdateCollectionByIdHandler } from '../handlers/search-engine-update-collection-by-id.handler';
import { SearchEngineUpdateCollectionByIdInput } from '@api/graphql';

// sources
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';

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
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(collections[0])));
            expect(await resolver.main(<SearchEngineUpdateCollectionByIdInput>collections[0])).toBe(collections[0]);
        });
    });
});