/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineDeleteFieldsHandler, SearchEngineDeleteFieldsResolver } from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteFieldsResolver', () =>
{
    let resolver: SearchEngineDeleteFieldsResolver;
    let handler: SearchEngineDeleteFieldsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineDeleteFieldsResolver,
                {
                    provide : SearchEngineDeleteFieldsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEngineDeleteFieldsResolver>(SearchEngineDeleteFieldsResolver);
        handler = module.get<SearchEngineDeleteFieldsHandler>(SearchEngineDeleteFieldsHandler);
    });

    test('SearchEngineDeleteFieldsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineDeleteFieldsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an searchEngineMockFieldData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockFieldData)));
            expect(await resolver.main()).toBe(searchEngineMockFieldData);
        });
    });
});
