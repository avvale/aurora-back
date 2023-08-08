import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineDeleteCollectionByIdCommandHandler } from './search-engine-delete-collection-by-id.command-handler';
import { searchEngineMockCollectionData } from '@app/search-engine/collection/infrastructure/mock/search-engine-mock-collection.data';
import { SearchEngineDeleteCollectionByIdCommand } from './search-engine-delete-collection-by-id.command';
import { SearchEngineDeleteCollectionByIdService } from './search-engine-delete-collection-by-id.service';

describe('SearchEngineDeleteCollectionByIdCommandHandler', () =>
{
    let commandHandler: SearchEngineDeleteCollectionByIdCommandHandler;
    let service: SearchEngineDeleteCollectionByIdService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineDeleteCollectionByIdCommandHandler,
                {
                    provide : SearchEngineDeleteCollectionByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<SearchEngineDeleteCollectionByIdCommandHandler>(SearchEngineDeleteCollectionByIdCommandHandler);
        service = module.get<SearchEngineDeleteCollectionByIdService>(SearchEngineDeleteCollectionByIdService);
    });

    describe('main', () =>
    {
        test('SearchEngineDeleteCollectionByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the value object id and pass them as parameters to the SearchEngineDeleteCollectionByIdService', async () =>
        {
            expect(await commandHandler.execute(
                new SearchEngineDeleteCollectionByIdCommand(
                    searchEngineMockCollectionData[0].id,
                ),
            )).toBe(undefined);
        });
    });
});
