import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';
import { SearchEngineUpdateCollectionsCommandHandler } from './search-engine-update-collections.command-handler';
import { SearchEngineUpdateCollectionsCommand } from './search-engine-update-collections.command';
import { SearchEngineUpdateCollectionsService } from './search-engine-update-collections.service';

describe('UpdateCollectionsCommandHandler', () =>
{
    let commandHandler: UpdateCollectionsCommandHandler;
    let service: UpdateCollectionsService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UpdateCollectionsCommandHandler,
                {
                    provide : UpdateCollectionsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<UpdateCollectionsCommandHandler>(UpdateCollectionsCommandHandler);
        service = module.get<UpdateCollectionsService>(UpdateCollectionsService);
    });

    describe('main', () =>
    {
        test('UpdateCollectionsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an collections updated', async () =>
        {
            expect(await commandHandler.execute(
                new UpdateCollectionsCommand(
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
                    {},
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});