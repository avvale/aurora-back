import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { DeleteFieldsCommandHandler } from './delete-fields.command-handler';
import { DeleteFieldsCommand } from './delete-fields.command';
import { DeleteFieldsService } from './delete-fields.service';

describe('SearchEngineDeleteFieldsCommandHandler', () =>
{
    let commandHandler: SearchEngineDeleteFieldsCommandHandler;
    let service: DeleteFieldsService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                DeleteFieldsCommandHandler,
                {
                    provide : DeleteFieldsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<DeleteFieldsCommandHandler>(DeleteFieldsCommandHandler);
        service = module.get<DeleteFieldsService>(DeleteFieldsService);
    });

    describe('main', () =>
    {
        test('DeleteFieldsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return void', async () =>
        {
            expect(await commandHandler.execute(
                new DeleteFieldsCommand(),
            )).toBe(undefined);
        });
    });
});