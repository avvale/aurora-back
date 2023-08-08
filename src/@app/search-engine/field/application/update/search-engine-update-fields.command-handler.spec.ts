import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { searchEngineMockFieldData } from '@app/search-engine/field/infrastructure/mock/search-engine-mock-field.data';
import { SearchEngineUpdateFieldsCommandHandler } from './search-engine-update-fields.command-handler';
import { SearchEngineUpdateFieldsCommand } from './search-engine-update-fields.command';
import { SearchEngineUpdateFieldsService } from './search-engine-update-fields.service';

describe('SearchEngineUpdateFieldsCommandHandler', () =>
{
    let commandHandler: SearchEngineUpdateFieldsCommandHandler;
    let service: SearchEngineUpdateFieldsService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineUpdateFieldsCommandHandler,
                {
                    provide : SearchEngineUpdateFieldsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<SearchEngineUpdateFieldsCommandHandler>(SearchEngineUpdateFieldsCommandHandler);
        service = module.get<SearchEngineUpdateFieldsService>(SearchEngineUpdateFieldsService);
    });

    describe('main', () =>
    {
        test('UpdateFieldsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an fields updated', async () =>
        {
            expect(await commandHandler.execute(
                new SearchEngineUpdateFieldsCommand(
                    {
                        id: searchEngineMockFieldData[0].id,
                        collectionId: searchEngineMockFieldData[0].collectionId,
                        name: searchEngineMockFieldData[0].name,
                        type: searchEngineMockFieldData[0].type,
                        isNullable: searchEngineMockFieldData[0].isNullable,
                    },
                    {},
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
