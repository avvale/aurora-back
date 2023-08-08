import { SearchEngineCreateFieldsHandler } from '@api/search-engine/field';
import { searchEngineMockFieldData } from '@app/search-engine/field';
import { ICommandBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineCreateFieldsHandler', () =>
{
    let handler: SearchEngineCreateFieldsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineCreateFieldsHandler,
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
    });

    describe('main', () =>
    {
        test('SearchEngineCreateFieldsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an searchEngineMockFieldData created', async () =>
        {
            expect(await handler.main(searchEngineMockFieldData)).toBe(true);
        });
    });
});
