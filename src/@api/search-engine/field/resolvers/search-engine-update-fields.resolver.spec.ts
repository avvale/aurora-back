/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineUpdateFieldsInput } from '@api/graphql';
import { SearchEngineUpdateFieldsHandler, SearchEngineUpdateFieldsResolver } from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpdateFieldsResolver', () =>
{
    let resolver: SearchEngineUpdateFieldsResolver;
    let handler: SearchEngineUpdateFieldsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineUpdateFieldsResolver,
                {
                    provide : SearchEngineUpdateFieldsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEngineUpdateFieldsResolver>(SearchEngineUpdateFieldsResolver);
        handler = module.get<SearchEngineUpdateFieldsHandler>(SearchEngineUpdateFieldsHandler);
    });

    test('SearchEngineUpdateFieldsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineUpdateFieldsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a fields updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockFieldData[0])));
            expect(await resolver.main(<SearchEngineUpdateFieldsInput>searchEngineMockFieldData[0])).toBe(searchEngineMockFieldData[0]);
        });
    });
});
