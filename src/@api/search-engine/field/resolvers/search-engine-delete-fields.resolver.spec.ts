/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineDeleteFieldsResolver } from './search-engine-delete-fields.resolver';
import { SearchEngineDeleteFieldsHandler } from '../handlers/search-engine-delete-fields.handler';

// sources
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';

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

        test('should return an fields deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(fields)));
            expect(await resolver.main()).toBe(fields);
        });
    });
});