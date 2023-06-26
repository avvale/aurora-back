/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineUpdateFieldsResolver } from './search-engine-update-fields.resolver';
import { SearchEngineUpdateFieldsHandler } from '../handlers/search-engine-update-fields.handler';
import { SearchEngineUpdateFieldsInput } from '@api/graphql';

// sources
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';

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
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(fields[0])));
            expect(await resolver.main(<SearchEngineUpdateFieldsInput>fields[0])).toBe(fields[0]);
        });
    });
});