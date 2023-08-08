import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineDeleteCollectionsCommandHandler } from './search-engine-delete-collections.command-handler';
import { SearchEngineDeleteCollectionsCommand } from './search-engine-delete-collections.command';
import { SearchEngineDeleteCollectionsService } from './search-engine-delete-collections.service';

describe('SearchEngineDeleteCollectionsCommandHandler', () =>
{
    let commandHandler: SearchEngineDeleteCollectionsCommandHandler;
    let service: SearchEngineDeleteCollectionsService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineDeleteCollectionsCommandHandler,
                {
                    provide : SearchEngineDeleteCollectionsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<SearchEngineDeleteCollectionsCommandHandler>(SearchEngineDeleteCollectionsCommandHandler);
        service = module.get<SearchEngineDeleteCollectionsService>(SearchEngineDeleteCollectionsService);
    });

    describe('main', () =>
    {
        test('SearchEngineDeleteCollectionsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return void', async () =>
        {
            expect(await commandHandler.execute(
                new SearchEngineDeleteCollectionsCommand(),
            )).toBe(undefined);
        });
    });
});
