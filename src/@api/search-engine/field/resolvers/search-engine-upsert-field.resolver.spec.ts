/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineUpsertFieldResolver } from './search-engine-upsert-field.resolver';
import { SearchEngineUpsertFieldHandler } from '../handlers/search-engine-upsert-field.handler';
import { SearchEngineUpdateFieldByIdInput } from '@api/graphql';

// sources
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';

describe('SearchEngineUpsertFieldResolver', () =>
{
    let resolver: SearchEngineUpsertFieldResolver;
    let handler: SearchEngineUpsertFieldHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineUpsertFieldResolver,
                {
                    provide : SearchEngineUpsertFieldHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEngineUpsertFieldResolver>(SearchEngineUpsertFieldResolver);
        handler = module.get<SearchEngineUpsertFieldHandler>(SearchEngineUpsertFieldHandler);
    });

    test('SearchEngineUpsertFieldResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineUpsertFieldResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an field upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(fields[0])));
            expect(await resolver.main(<SearchEngineUpdateFieldByIdInput>fields[0])).toBe(fields[0]);
        });
    });
});