import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { searchEngineMockFieldData } from '@app/search-engine/field/infrastructure/mock/search-engine-mock-field.data';
import { SearchEngineUpdateFieldByIdCommandHandler } from './search-engine-update-field-by-id.command-handler';
import { SearchEngineUpdateFieldByIdCommand } from './search-engine-update-field-by-id.command';
import { SearchEngineUpdateFieldByIdService } from './search-engine-update-field-by-id.service';

describe('SearchEngineUpdateFieldByIdCommandHandler', () =>
{
    let commandHandler: SearchEngineUpdateFieldByIdCommandHandler;
    let service: SearchEngineUpdateFieldByIdService;

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
        service = module.get<SearchEngineUpdateFieldByIdService>(SearchEngineUpdateFieldByIdService);
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
