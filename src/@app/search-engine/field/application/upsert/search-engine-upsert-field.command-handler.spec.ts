import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { searchEngineMockFieldData } from '@app/search-engine/field/infrastructure/mock/search-engine-mock-field.data';
import { SearchEngineUpsertFieldCommandHandler } from './search-engine-upsert-field.command-handler';
import { SearchEngineUpsertFieldCommand } from './search-engine-upsert-field.command';
import { SearchEngineUpsertFieldService } from './search-engine-upsert-field.service';

describe('SearchEngineUpsertFieldCommandHandler', () =>
{
    let commandHandler: SearchEngineUpsertFieldCommandHandler;
    let service: SearchEngineUpsertFieldService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineUpsertFieldCommandHandler,
                {
                    provide : SearchEngineUpsertFieldService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<SearchEngineUpsertFieldCommandHandler>(SearchEngineUpsertFieldCommandHandler);
        service = module.get<SearchEngineUpsertFieldService>(SearchEngineUpsertFieldService);
    });

    describe('main', () =>
    {
        test('UpsertFieldCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should upsert the values objects and pass them as parameters to the SearchEngineUpsertFieldService', async () =>
        {
            expect(await commandHandler.execute(
                new SearchEngineUpsertFieldCommand(
                    {
                        id: searchEngineMockFieldData[0].id,
                        collectionId: searchEngineMockFieldData[0].collectionId,
                        name: searchEngineMockFieldData[0].name,
                        type: searchEngineMockFieldData[0].type,
                        isNullable: searchEngineMockFieldData[0].isNullable,
                    },
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
