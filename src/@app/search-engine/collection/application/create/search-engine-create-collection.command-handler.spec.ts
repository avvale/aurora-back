import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { collections } from '@app/search-engine/collection/infrastructure/mock/mock-collection.data';
import { SearchEngineCreateCollectionCommandHandler } from './create-collection.command-handler';
import { SearchEngineCreateCollectionCommand } from './create-collection.command';
import { SearchEngineCreateCollectionService } from './create-collection.service';

describe('SearchEngineCreateCollectionCommandHandler', () =>
{
    let commandHandler: CreateCollectionCommandHandler;
    let service: CreateCollectionService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CreateCollectionCommandHandler,
                {
                    provide : CreateCollectionService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<CreateCollectionCommandHandler>(CreateCollectionCommandHandler);
        service = module.get<CreateCollectionService>(CreateCollectionService);
    });

    describe('main', () =>
    {
        test('CreateCollectionCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the values objects and pass them as parameters to the CreateCollectionService', async () =>
        {
            expect(await commandHandler.execute(
                new CreateCollectionCommand(
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