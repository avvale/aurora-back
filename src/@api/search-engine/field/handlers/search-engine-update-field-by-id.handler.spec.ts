/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineUpdateFieldByIdHandler } from './search-engine-update-field-by-id.handler';
import { SearchEngineUpdateFieldByIdInput } from '@api/graphql';
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpdateFieldByIdHandler', () =>
{
    let handler: SearchEngineUpdateFieldByIdHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineUpdateFieldByIdHandler,
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

        handler = module.get<SearchEngineUpdateFieldByIdHandler>(SearchEngineUpdateFieldByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('SearchEngineUpdateFieldByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('SearchEngineUpdateFieldByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a field updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(fields[0])));
            expect(await handler.main(<SearchEngineUpdateFieldByIdInput>fields[0])).toBe(fields[0]);
        });
    });
});