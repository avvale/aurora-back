/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineUpsertCollectionResolver } from './search-engine-upsert-collection.resolver';
import { SearchEngineUpsertCollectionHandler } from '../handlers/search-engine-upsert-collection.handler';
import { SearchEngineUpdateCollectionByIdInput } from '@api/graphql';

// sources
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';

describe('SearchEngineUpsertCollectionResolver', () =>
{
    let resolver: SearchEngineUpsertCollectionResolver;
    let handler: SearchEngineUpsertCollectionHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineUpsertCollectionResolver,
                {
                    provide : SearchEngineUpsertCollectionHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEngineUpsertCollectionResolver>(SearchEngineUpsertCollectionResolver);
        handler = module.get<SearchEngineUpsertCollectionHandler>(SearchEngineUpsertCollectionHandler);
    });

    test('SearchEngineUpsertCollectionResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineUpsertCollectionResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an collection upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(collections[0])));
            expect(await resolver.main(<SearchEngineUpdateCollectionByIdInput>collections[0])).toBe(collections[0]);
        });
    });
});