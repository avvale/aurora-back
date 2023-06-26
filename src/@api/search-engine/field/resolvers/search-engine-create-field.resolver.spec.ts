/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineCreateFieldResolver } from './search-engine-create-field.resolver';
import { SearchEngineCreateFieldHandler } from '../handlers/search-engine-create-field.handler';
import { SearchEngineCreateFieldInput } from '@api/graphql';

// sources
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';

describe('SearchEngineCreateFieldResolver', () =>
{
    let resolver: SearchEngineCreateFieldResolver;
    let handler: SearchEngineCreateFieldHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineCreateFieldResolver,
                {
                    provide : SearchEngineCreateFieldHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEngineCreateFieldResolver>(SearchEngineCreateFieldResolver);
        handler = module.get<SearchEngineCreateFieldHandler>(SearchEngineCreateFieldHandler);
    });

    test('SearchEngineCreateFieldResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineCreateFieldResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an field created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(fields[0])));
            expect(await resolver.main(<SearchEngineCreateFieldInput>fields[0])).toBe(fields[0]);
        });
    });
});