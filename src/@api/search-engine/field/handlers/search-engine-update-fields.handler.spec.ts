/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineUpdateFieldsHandler } from './search-engine-update-fields.handler';
import { SearchEngineUpdateFieldsInput } from '@api/graphql';
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpdateFieldsHandler', () =>
{
    let handler: SearchEngineUpdateFieldsHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineUpdateFieldsHandler,
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

        handler = module.get<SearchEngineUpdateFieldsHandler>(SearchEngineUpdateFieldsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('SearchEngineUpdateFieldsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineUpdateFieldsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a fields updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(fields[0])));
            expect(await handler.main(<SearchEngineUpdateFieldsInput>fields[0])).toBe(fields[0]);
        });
    });
});