import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineDeleteFieldsCommandHandler } from './search-engine-delete-fields.command-handler';
import { SearchEngineDeleteFieldsCommand } from './search-engine-delete-fields.command';
import { SearchEngineDeleteFieldsService } from './search-engine-delete-fields.service';

describe('SearchEngineDeleteFieldsCommandHandler', () =>
{
    let commandHandler: SearchEngineDeleteFieldsCommandHandler;
    let service: SearchEngineDeleteFieldsService;

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
        service = module.get<SearchEngineDeleteFieldsService>(SearchEngineDeleteFieldsService);
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
