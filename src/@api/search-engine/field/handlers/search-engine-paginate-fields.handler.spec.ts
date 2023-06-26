/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEnginePaginateFieldsHandler } from './search-engine-paginate-fields.handler';
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEnginePaginateFieldsHandler', () =>
{
    let handler: SearchEnginePaginateFieldsHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEnginePaginateFieldsHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<SearchEnginePaginateFieldsHandler>(SearchEnginePaginateFieldsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('SearchEnginePaginateFieldsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEnginePaginateFieldsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a fields', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: fields.length,
                count: fields.length,
                rows : fields,
            })));
            expect(await handler.main()).toEqual({
                total: fields.length,
                count: fields.length,
                rows : fields,
            });
        });
    });
});