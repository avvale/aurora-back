/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineFindCollectionResolver } from './search-engine-find-collection.resolver';
import { SearchEngineFindCollectionHandler } from '../handlers/search-engine-find-collection.handler';

// sources
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';

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
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(collections[0])));
            expect(await resolver.main()).toBe(collections[0]);
        });
    });
});