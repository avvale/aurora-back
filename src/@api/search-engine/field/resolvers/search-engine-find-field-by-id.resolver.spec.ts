/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineFindFieldByIdResolver } from './search-engine-find-field-by-id.resolver';
import { SearchEngineFindFieldByIdHandler } from '../handlers/search-engine-find-field-by-id.handler';

// sources
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';

describe('SearchEngineFindFieldByIdResolver', () =>
{
    let resolver: SearchEngineFindFieldByIdResolver;
    let handler: SearchEngineFindFieldByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineFindFieldByIdResolver,
                {
                    provide : SearchEngineFindFieldByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEngineFindFieldByIdResolver>(SearchEngineFindFieldByIdResolver);
        handler = module.get<SearchEngineFindFieldByIdHandler>(SearchEngineFindFieldByIdHandler);
    });

    test('SearchEngineFindFieldByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineFindFieldByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an field by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(fields[0])));
            expect(await resolver.main(fields[0].id)).toBe(fields[0]);
        });
    });
});