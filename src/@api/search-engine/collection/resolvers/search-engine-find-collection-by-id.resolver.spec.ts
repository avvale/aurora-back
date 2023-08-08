/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineFindCollectionByIdHandler, SearchEngineFindCollectionByIdResolver } from '@api/search-engine/collection';
import { searchEngineMockCollectionData } from '@app/search-engine/collection';
import { Test, TestingModule } from '@nestjs/testing';

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
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockCollectionData[0])));
            expect(await resolver.main(searchEngineMockCollectionData[0].id)).toBe(searchEngineMockCollectionData[0]);
        });
    });
});
