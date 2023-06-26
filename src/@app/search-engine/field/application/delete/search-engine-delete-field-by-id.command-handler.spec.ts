import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineDeleteFieldByIdCommandHandler } from './search-engine-delete-field-by-id.command-handler';
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';
import { SearchEngineDeleteFieldByIdCommand } from './search-engine-delete-field-by-id.command';
import { SearchEngineDeleteFieldByIdService } from './search-engine-delete-field-by-id.service';

describe('SearchEngineDeleteFieldByIdCommandHandler', () =>
{
    let commandHandler: DeleteFieldByIdCommandHandler;
    let service: DeleteFieldByIdService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                DeleteFieldByIdCommandHandler,
                {
                    provide : DeleteFieldByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<DeleteFieldByIdCommandHandler>(DeleteFieldByIdCommandHandler);
        service = module.get<DeleteFieldByIdService>(DeleteFieldByIdService);
    });

    describe('main', () =>
    {
        test('DeleteFieldByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the value object id and pass them as parameters to the DeleteFieldByIdService', async () =>
        {
            expect(await commandHandler.execute(
                new DeleteFieldByIdCommand(
                    fields[0].id,
                ),
            )).toBe(undefined);
        });
    });
});