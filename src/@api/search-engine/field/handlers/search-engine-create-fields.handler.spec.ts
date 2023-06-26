import { Test, TestingModule } from '@nestjs/testing';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

// custom items
import { SearchEngineCreateFieldsHandler } from './search-engine-create-fields.handler';
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';

describe('SearchEngineCreateFieldsHandler', () =>
{
    let handler: SearchEngineCreateFieldsHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineCreateFieldsHandler,
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

        handler = module.get<SearchEngineCreateFieldsHandler>(SearchEngineCreateFieldsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    describe('main', () =>
    {
        test('SearchEngineCreateFieldsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an fields created', async () =>
        {
            expect(await handler.main(fields)).toBe(true);
        });
    });
});