/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineFindCollectionByIdResolver } from './search-engine-find-collection-by-id.resolver';
import { SearchEngineFindCollectionByIdHandler } from '../handlers/search-engine-find-collection-by-id.handler';

// sources
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';

describe('SearchEngineFindCollectionByIdResolver', () =>
{
    let resolver: SearchEngineFindCollectionByIdResolver;
    let handler: SearchEngineFindCollectionByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineFindCollectionByIdResolver,
                {
                    provide : SearchEngineFindCollectionByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEngineFindCollectionByIdResolver>(SearchEngineFindCollectionByIdResolver);
        handler = module.get<SearchEngineFindCollectionByIdHandler>(SearchEngineFindCollectionByIdHandler);
    });

    test('SearchEngineFindCollectionByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineFindCollectionByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an collection by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(collections[0])));
            expect(await resolver.main(collections[0].id)).toBe(collections[0]);
        });
    });
});