/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineGetFieldsHandler } from './search-engine-get-fields.handler';
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineGetFieldsHandler', () =>
{
    let handler: SearchEngineGetFieldsHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineGetFieldsHandler,
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

        handler = module.get<SearchEngineGetFieldsHandler>(SearchEngineGetFieldsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('SearchEngineGetFieldsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineGetFieldsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a fields', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(fields)));
            expect(await handler.main()).toBe(fields);
        });
    });
});