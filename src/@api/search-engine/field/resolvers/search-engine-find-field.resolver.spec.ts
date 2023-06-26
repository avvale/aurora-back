/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineFindFieldResolver } from './search-engine-find-field.resolver';
import { SearchEngineFindFieldHandler } from '../handlers/search-engine-find-field.handler';

// sources
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';

describe('SearchEngineFindFieldResolver', () =>
{
    let resolver: SearchEngineFindFieldResolver;
    let handler: SearchEngineFindFieldHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineFindFieldResolver,
                {
                    provide : SearchEngineFindFieldHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<SearchEngineFindFieldResolver>(SearchEngineFindFieldResolver);
        handler = module.get<SearchEngineFindFieldHandler>(SearchEngineFindFieldHandler);
    });

    test('SearchEngineFindFieldResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineFindFieldResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a field', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(fields[0])));
            expect(await resolver.main()).toBe(fields[0]);
        });
    });
});