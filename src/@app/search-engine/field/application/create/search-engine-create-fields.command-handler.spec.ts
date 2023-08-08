/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { searchEngineMockFieldData } from '@app/search-engine/field/infrastructure/mock/search-engine-mock-field.data';
import { SearchEngineCreateFieldsCommandHandler } from './search-engine-create-fields.command-handler';
import { SearchEngineCreateFieldsCommand } from './search-engine-create-fields.command';
import { SearchEngineCreateFieldsService } from './search-engine-create-fields.service';

describe('searchEngineCreateFieldsCommandHandler', () =>
{
    let commandHandler: SearchEngineCreateFieldsCommandHandler;
    let service: SearchEngineCreateFieldsService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SearchEngineCreateFieldsCommandHandler,
                {
                    provide : SearchEngineCreateFieldsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<SearchEngineCreateFieldsCommandHandler>(SearchEngineCreateFieldsCommandHandler);
        service = module.get<SearchEngineCreateFieldsService>(SearchEngineCreateFieldsService);
    });

    describe('main', () =>
    {
        test('SearchEngineCreateFieldsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return SearchEngineMockFieldData createds', async () =>
        {
            expect(await commandHandler.execute(
                new SearchEngineCreateFieldsCommand(
                    searchEngineMockFieldData,
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
