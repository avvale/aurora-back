import { SearchEngineDeleteFieldsCommand } from '@app/search-engine/field';
import { SearchEngineDeleteFieldsCommandHandler } from '@app/search-engine/field/application/delete/search-engine-delete-fields.command-handler';
import { SearchEngineDeleteFieldsService } from '@app/search-engine/field/application/delete/search-engine-delete-fields.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteFieldsCommandHandler', () =>
{
    let commandHandler: SearchEngineDeleteFieldsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineDeleteFieldsCommandHandler,
                {
                    provide : SearchEngineDeleteFieldsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<SearchEngineDeleteFieldsCommandHandler>(SearchEngineDeleteFieldsCommandHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineDeleteFieldsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return void', async () =>
        {
            expect(await commandHandler.execute(
                new SearchEngineDeleteFieldsCommand(),
            )).toBe(undefined);
        });
    });
});
