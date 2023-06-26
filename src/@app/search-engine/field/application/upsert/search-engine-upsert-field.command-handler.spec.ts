import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';
import { SearchEngineUpsertFieldCommandHandler } from './search-engine-upsert-field.command-handler';
import { SearchEngineUpsertFieldCommand } from './search-engine-upsert-field.command';
import { SearchEngineUpsertFieldService } from './search-engine-upsert-field.service';

describe('UpsertFieldCommandHandler', () =>
{
    let commandHandler: UpsertFieldCommandHandler;
    let service: UpsertFieldService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UpsertFieldCommandHandler,
                {
                    provide : UpsertFieldService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<UpsertFieldCommandHandler>(UpsertFieldCommandHandler);
        service = module.get<UpsertFieldService>(UpsertFieldService);
    });

    describe('main', () =>
    {
        test('UpsertFieldCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should upsert the values objects and pass them as parameters to the UpsertFieldService', async () =>
        {
            expect(await commandHandler.execute(
                new UpsertFieldCommand(
                    {
                        id: fields[0].id,
                        collectionId: fields[0].collectionId,
                        name: fields[0].name,
                        type: fields[0].type,
                        isNullable: fields[0].isNullable,
                    },
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});