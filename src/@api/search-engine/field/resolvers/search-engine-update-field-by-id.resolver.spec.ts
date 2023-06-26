/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineUpdateFieldByIdResolver } from './search-engine-update-field-by-id.resolver';
import { SearchEngineUpdateFieldByIdHandler } from '../handlers/search-engine-update-field-by-id.handler';
import { SearchEngineUpdateFieldByIdInput } from '@api/graphql';

// sources
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';

describe('SearchEngineUpdateFieldByIdResolver', () =>
{
    let resolver: SearchEngineUpdateFieldByIdResolver;
    let handler: SearchEngineUpdateFieldByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineUpdateFieldByIdResolver,
                {
                    provide : SearchEngineUpdateFieldByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEngineUpdateFieldByIdResolver>(SearchEngineUpdateFieldByIdResolver);
        handler = module.get<SearchEngineUpdateFieldByIdHandler>(SearchEngineUpdateFieldByIdHandler);
    });

    test('SearchEngineUpdateFieldByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineUpdateFieldByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a field by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(fields[0])));
            expect(await resolver.main(<SearchEngineUpdateFieldByIdInput>fields[0])).toBe(fields[0]);
        });
    });
});