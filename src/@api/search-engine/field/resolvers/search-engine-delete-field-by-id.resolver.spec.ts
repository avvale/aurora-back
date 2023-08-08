/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineDeleteFieldByIdHandler, SearchEngineDeleteFieldByIdResolver } from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteFieldByIdResolver', () =>
{
    let resolver: SearchEngineDeleteFieldByIdResolver;
    let handler: SearchEngineDeleteFieldByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineDeleteFieldByIdResolver,
                {
                    provide : SearchEngineDeleteFieldByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEngineDeleteFieldByIdResolver>(SearchEngineDeleteFieldByIdResolver);
        handler = module.get<SearchEngineDeleteFieldByIdHandler>(SearchEngineDeleteFieldByIdHandler);
    });

    test('SearchEngineDeleteFieldByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineDeleteFieldByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an field deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(searchEngineMockFieldData[0])));
            expect(await resolver.main(searchEngineMockFieldData[0].id)).toBe(searchEngineMockFieldData[0]);
        });
    });
});
