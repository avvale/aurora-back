/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineFindFieldHandler, SearchEngineFindFieldResolver } from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineFindFieldResolver', () =>
{
    let resolver: SearchEngineFindFieldResolver;
    let handler: SearchEngineFindFieldHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineFindFieldResolver,
                {
                    provide : SearchEngineFindFieldHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEngineFindFieldResolver>(SearchEngineFindFieldResolver);
        handler = module.get<SearchEngineFindFieldHandler>(SearchEngineFindFieldHandler);
    });

    test('SearchEngineFindFieldResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineFindFieldResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a field', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockFieldData[0])));
            expect(await resolver.main()).toBe(searchEngineMockFieldData[0]);
        });
    });
});
