/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineGetFieldsResolver } from './search-engine-get-fields.resolver';
import { SearchEngineGetFieldsHandler } from '../handlers/search-engine-get-fields.handler';

// sources
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';

describe('SearchEngineGetFieldsResolver', () =>
{
    let resolver: SearchEngineGetFieldsResolver;
    let handler: SearchEngineGetFieldsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineGetFieldsResolver,
                {
                    provide : SearchEngineGetFieldsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEngineGetFieldsResolver>(SearchEngineGetFieldsResolver);
        handler = module.get<SearchEngineGetFieldsHandler>(SearchEngineGetFieldsHandler);
    });

    test('SearchEngineGetFieldsResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineGetFieldsResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a fields', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(fields)));
            expect(await resolver.main()).toBe(fields);
        });
    });
});