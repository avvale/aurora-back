import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';
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
                UpdateFieldByIdCommandHandler,
                {
                    provide : UpdateFieldByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<UpdateFieldByIdCommandHandler>(UpdateFieldByIdCommandHandler);
        service = module.get<UpdateFieldByIdService>(UpdateFieldByIdService);
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
                new UpdateFieldByIdCommand(
                    {
                        id: fields[0].id,
                        collectionId: fields[0].collectionId,
                        name: fields[0].name,
                        type: fields[0].type,
                        isNullable: fields[0].isNullable,
                    },
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});