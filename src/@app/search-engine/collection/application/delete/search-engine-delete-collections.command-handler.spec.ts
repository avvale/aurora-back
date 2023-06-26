import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { DeleteCollectionsCommandHandler } from './delete-collections.command-handler';
import { DeleteCollectionsCommand } from './delete-collections.command';
import { DeleteCollectionsService } from './delete-collections.service';

describe('SearchEngineDeleteCollectionsCommandHandler', () =>
{
    let commandHandler: SearchEngineDeleteCollectionsCommandHandler;
    let service: DeleteCollectionsService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                DeleteCollectionsCommandHandler,
                {
                    provide : DeleteCollectionsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<DeleteCollectionsCommandHandler>(DeleteCollectionsCommandHandler);
        service = module.get<DeleteCollectionsService>(DeleteCollectionsService);
    });

    describe('main', () =>
    {
        test('DeleteCollectionsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return void', async () =>
        {
            expect(await commandHandler.execute(
                new DeleteCollectionsCommand(),
            )).toBe(undefined);
        });
    });
});