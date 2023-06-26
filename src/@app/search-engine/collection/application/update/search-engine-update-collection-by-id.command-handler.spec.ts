import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';
import { SearchEngineUpdateCollectionByIdCommandHandler } from './search-engine-update-collection-by-id.command-handler';
import { SearchEngineUpdateCollectionByIdCommand } from './search-engine-update-collection-by-id.command';
import { SearchEngineUpdateCollectionByIdService } from './search-engine-update-collection-by-id.service';

describe('SearchEngineUpdateCollectionByIdCommandHandler', () =>
{
    let commandHandler: SearchEngineUpdateCollectionByIdCommandHandler;
    let service: SearchEngineUpdateCollectionByIdService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UpdateCollectionByIdCommandHandler,
                {
                    provide : UpdateCollectionByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<UpdateCollectionByIdCommandHandler>(UpdateCollectionByIdCommandHandler);
        service = module.get<UpdateCollectionByIdService>(UpdateCollectionByIdService);
    });

    describe('main', () =>
    {
        test('UpdateCollectionByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an collection created', async () =>
        {
            expect(await commandHandler.execute(
                new UpdateCollectionByIdCommand(
                    {
                        id: collections[0].id,
                        name: collections[0].name,
                        documentsNumber: collections[0].documentsNumber,
                        defaultSortingField: collections[0].defaultSortingField,
                        numMemoryShards: collections[0].numMemoryShards,
                        timestampCreatedAt: collections[0].timestampCreatedAt,
                        isEnableNestedFields: collections[0].isEnableNestedFields,
                    },
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});