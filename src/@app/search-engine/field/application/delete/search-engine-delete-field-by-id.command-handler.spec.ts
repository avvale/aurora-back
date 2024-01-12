import { SearchEngineDeleteFieldByIdCommand, searchEngineMockFieldData } from '@app/search-engine/field';
import { SearchEngineDeleteFieldByIdCommandHandler } from '@app/search-engine/field/application/delete/search-engine-delete-field-by-id.command-handler';
import { SearchEngineDeleteFieldByIdService } from '@app/search-engine/field/application/delete/search-engine-delete-field-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('SearchEngineDeleteFieldByIdCommandHandler', () =>
{
    let commandHandler: SearchEngineDeleteFieldByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineDeleteFieldByIdCommandHandler,
                {
                    provide : SearchEngineDeleteFieldByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<SearchEngineDeleteFieldByIdCommandHandler>(SearchEngineDeleteFieldByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('SearchEngineDeleteFieldByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the value object id and pass them as parameters to the SearchEngineDeleteFieldByIdService', async () =>
        {
            expect(await commandHandler.execute(
                new SearchEngineDeleteFieldByIdCommand(
                    searchEngineMockFieldData[0].id,
                ),
            )).toBe(undefined);
        });
    });
});
