import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';
import { SearchEngineUpdateFieldsCommandHandler } from './search-engine-update-fields.command-handler';
import { SearchEngineUpdateFieldsCommand } from './search-engine-update-fields.command';
import { SearchEngineUpdateFieldsService } from './search-engine-update-fields.service';

describe('UpdateFieldsCommandHandler', () =>
{
    let commandHandler: UpdateFieldsCommandHandler;
    let service: UpdateFieldsService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UpdateFieldsCommandHandler,
                {
                    provide : UpdateFieldsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<UpdateFieldsCommandHandler>(UpdateFieldsCommandHandler);
        service = module.get<UpdateFieldsService>(UpdateFieldsService);
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
                new UpdateFieldsCommand(
                    {
                        id: fields[0].id,
                        collectionId: fields[0].collectionId,
                        name: fields[0].name,
                        type: fields[0].type,
                        isNullable: fields[0].isNullable,
                    },
                    {},
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});