import { SearchEngineCreateFieldsCommand, searchEngineMockFieldData } from '@app/search-engine/field';
import { SearchEngineCreateFieldsCommandHandler } from '@app/search-engine/field/application/create/search-engine-create-fields.command-handler';
import { SearchEngineCreateFieldsService } from '@app/search-engine/field/application/create/search-engine-create-fields.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('searchEngineCreateFieldsCommandHandler', () =>
{
    let commandHandler: SearchEngineCreateFieldsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineCreateFieldsCommandHandler,
                {
                    provide : SearchEngineCreateFieldsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<SearchEngineCreateFieldsCommandHandler>(SearchEngineCreateFieldsCommandHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineCreateFieldsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return SearchEngineMockFieldData created', async () =>
        {
            expect(await commandHandler.execute(
                new SearchEngineCreateFieldsCommand(
                    searchEngineMockFieldData,
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
