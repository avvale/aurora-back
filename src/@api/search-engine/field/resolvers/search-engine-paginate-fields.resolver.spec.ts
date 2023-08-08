/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEnginePaginateFieldsHandler, SearchEnginePaginateFieldsResolver } from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEnginePaginateFieldsResolver', () =>
{
    let resolver: SearchEnginePaginateFieldsResolver;
    let handler: SearchEnginePaginateFieldsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEnginePaginateFieldsResolver,
                {
                    provide : SearchEnginePaginateFieldsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEnginePaginateFieldsResolver>(SearchEnginePaginateFieldsResolver);
        handler = module.get<SearchEnginePaginateFieldsHandler>(SearchEnginePaginateFieldsHandler);
    });

    test('SearchEnginePaginateFieldsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEnginePaginateFieldsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a searchEngineMockFieldData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : searchEngineMockFieldData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : searchEngineMockFieldData,
            });
        });
    });
});
