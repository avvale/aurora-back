/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineDeleteCollectionByIdResolver } from './search-engine-delete-collection-by-id.resolver';
import { SearchEngineDeleteCollectionByIdHandler } from '../handlers/search-engine-delete-collection-by-id.handler';

// sources
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';

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
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(collections[0])));
            expect(await resolver.main(collections[0].id)).toBe(collections[0]);
        });
    });
});