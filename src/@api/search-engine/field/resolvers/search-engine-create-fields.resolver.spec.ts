import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineCreateFieldsResolver } from './search-engine-create-fields.resolver';
import { SearchEngineCreateFieldsHandler } from '../handlers/search-engine-create-fields.handler';
import { SearchEngineCreateFieldInput } from '@api/graphql';

// sources
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';

describe('SearchEngineCreateFieldsResolver', () =>
{
    let resolver: SearchEngineCreateFieldsResolver;
    let handler: SearchEngineCreateFieldsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineCreateFieldsResolver,
                {
                    provide : SearchEngineCreateFieldsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEngineCreateFieldsResolver>(SearchEngineCreateFieldsResolver);
        handler = module.get<SearchEngineCreateFieldsHandler>(SearchEngineCreateFieldsHandler);
    });

    test('SearchEngineCreateFieldsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineCreateFieldsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an fields created', async () =>
        {
            expect(await resolver.main(<SearchEngineCreateFieldInput[]>fields)).toBe(undefined);
        });
    });
});