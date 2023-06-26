/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineDeleteFieldsHandler } from './search-engine-delete-fields.handler';
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteFieldsHandler', () =>
{
    let handler: SearchEngineDeleteFieldsHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineDeleteFieldsHandler,
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

        handler = module.get<SearchEngineDeleteFieldsHandler>(SearchEngineDeleteFieldsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('SearchEngineDeleteFieldsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineDeleteFieldsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an fields deleted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(fields)));
            expect(await handler.main()).toBe(fields);
        });
    });
});