/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineDeleteFieldByIdResolver } from './search-engine-delete-field-by-id.resolver';
import { SearchEngineDeleteFieldByIdHandler } from '../handlers/search-engine-delete-field-by-id.handler';

// sources
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';

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
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(fields[0])));
            expect(await resolver.main(fields[0].id)).toBe(fields[0]);
        });
    });
});