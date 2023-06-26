import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';
import { SearchEngineUpsertCollectionCommandHandler } from './search-engine-upsert-collection.command-handler';
import { SearchEngineUpsertCollectionCommand } from './search-engine-upsert-collection.command';
import { SearchEngineUpsertCollectionService } from './search-engine-upsert-collection.service';

describe('UpsertCollectionCommandHandler', () =>
{
    let commandHandler: UpsertCollectionCommandHandler;
    let service: UpsertCollectionService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UpsertCollectionCommandHandler,
                {
                    provide : UpsertCollectionService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<UpsertCollectionCommandHandler>(UpsertCollectionCommandHandler);
        service = module.get<UpsertCollectionService>(UpsertCollectionService);
    });

    describe('main', () =>
    {
        test('UpsertCollectionCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should upsert the values objects and pass them as parameters to the UpsertCollectionService', async () =>
        {
            expect(await commandHandler.execute(
                new UpsertCollectionCommand(
                    {
                        id: collections[0].id,
                        name: collections[0].name,
                        alias: collections[0].alias,
                        documentsNumber: collections[0].documentsNumber,
                        defaultSortingField: collections[0].defaultSortingField,
                        numMemoryShards: collections[0].numMemoryShards,
                        timestampCreatedAt: collections[0].timestampCreatedAt,
                        isEnableNestedFields: collections[0].isEnableNestedFields,
                    },
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});