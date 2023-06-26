/* eslint-disable @typescript-eslint/no-unused-vars */
import { SearchEngineDeleteFieldByIdHandler } from './search-engine-delete-field-by-id.handler';
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteFieldByIdController', () =>
{
    let handler: SearchEngineDeleteFieldByIdHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                SearchEngineDeleteFieldByIdHandler,
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

        handler = module.get<SearchEngineDeleteFieldByIdHandler>(SearchEngineDeleteFieldByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    describe('main', () =>
    {
        test('SearchEngineDeleteFieldByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an field deleted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(fields[0])));
            expect(await handler.main(fields[0].id)).toBe(fields[0]);
        });
    });
});