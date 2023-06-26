import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineDeleteCollectionByIdCommandHandler } from './search-engine-delete-collection-by-id.command-handler';
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';
import { SearchEngineDeleteCollectionByIdCommand } from './search-engine-delete-collection-by-id.command';
import { SearchEngineDeleteCollectionByIdService } from './search-engine-delete-collection-by-id.service';

describe('SearchEngineDeleteCollectionByIdCommandHandler', () =>
{
    let commandHandler: DeleteCollectionByIdCommandHandler;
    let service: DeleteCollectionByIdService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                DeleteCollectionByIdCommandHandler,
                {
                    provide : DeleteCollectionByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<DeleteCollectionByIdCommandHandler>(DeleteCollectionByIdCommandHandler);
        service = module.get<DeleteCollectionByIdService>(DeleteCollectionByIdService);
    });

    describe('main', () =>
    {
        test('DeleteCollectionByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the value object id and pass them as parameters to the DeleteCollectionByIdService', async () =>
        {
            expect(await commandHandler.execute(
                new DeleteCollectionByIdCommand(
                    collections[0].id,
                ),
            )).toBe(undefined);
        });
    });
});