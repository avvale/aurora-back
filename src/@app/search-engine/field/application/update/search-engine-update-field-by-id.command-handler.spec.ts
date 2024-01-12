import { searchEngineMockFieldData, SearchEngineUpdateFieldByIdCommand } from '@app/search-engine/field';
import { SearchEngineUpdateFieldByIdCommandHandler } from '@app/search-engine/field/application/update/search-engine-update-field-by-id.command-handler';
import { SearchEngineUpdateFieldByIdService } from '@app/search-engine/field/application/update/search-engine-update-field-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineUpdateFieldByIdCommandHandler', () =>
{
    let commandHandler: SearchEngineUpdateFieldByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineUpdateFieldByIdCommandHandler,
                {
                    provide : SearchEngineUpdateFieldByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<SearchEngineUpdateFieldByIdCommandHandler>(SearchEngineUpdateFieldByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateFieldByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an field created', async () =>
        {
            expect(await commandHandler.execute(
                new SearchEngineUpdateFieldByIdCommand(
                    {
                        id: searchEngineMockFieldData[0].id,
                        collectionId: searchEngineMockFieldData[0].collectionId,
                        name: searchEngineMockFieldData[0].name,
                        type: searchEngineMockFieldData[0].type,
                        isNullable: searchEngineMockFieldData[0].isNullable,
                    },
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
