/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEnginePaginateFieldsResolver } from './search-engine-paginate-fields.resolver';
import { SearchEnginePaginateFieldsHandler } from '../handlers/search-engine-paginate-fields.handler';

// sources
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';

describe('SearchEnginePaginateFieldsResolver', () =>
{
    let resolver: SearchEnginePaginateFieldsResolver;
    let handler: SearchEnginePaginateFieldsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEnginePaginateFieldsResolver,
                {
                    provide : SearchEnginePaginateFieldsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEnginePaginateFieldsResolver>(SearchEnginePaginateFieldsResolver);
        handler = module.get<SearchEnginePaginateFieldsHandler>(SearchEnginePaginateFieldsHandler);
    });

    test('SearchEnginePaginateFieldsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEnginePaginateFieldsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a fields', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : fields,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : fields,
            });
        });
    });
});