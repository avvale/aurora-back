import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { SearchEngineDeleteFieldByIdCommandHandler } from './search-engine-delete-field-by-id.command-handler';
import { searchEngineMockFieldData } from '@app/search-engine/field/infrastructure/mock/search-engine-mock-field.data';
import { SearchEngineDeleteFieldByIdCommand } from './search-engine-delete-field-by-id.command';
import { SearchEngineDeleteFieldByIdService } from './search-engine-delete-field-by-id.service';

describe('SearchEngineDeleteFieldByIdCommandHandler', () =>
{
    let commandHandler: SearchEngineDeleteFieldByIdCommandHandler;
    let service: SearchEngineDeleteFieldByIdService;

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
        service = module.get<SearchEngineDeleteFieldByIdService>(SearchEngineDeleteFieldByIdService);
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
