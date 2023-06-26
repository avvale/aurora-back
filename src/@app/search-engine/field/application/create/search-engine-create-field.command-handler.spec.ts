import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';
import { SearchEngineCreateFieldCommandHandler } from './create-field.command-handler';
import { SearchEngineCreateFieldCommand } from './create-field.command';
import { SearchEngineCreateFieldService } from './create-field.service';

describe('SearchEngineCreateFieldCommandHandler', () =>
{
    let commandHandler: CreateFieldCommandHandler;
    let service: CreateFieldService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CreateFieldCommandHandler,
                {
                    provide : CreateFieldService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<CreateFieldCommandHandler>(CreateFieldCommandHandler);
        service = module.get<CreateFieldService>(CreateFieldService);
    });

    describe('main', () =>
    {
        test('CreateFieldCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the values objects and pass them as parameters to the CreateFieldService', async () =>
        {
            expect(await commandHandler.execute(
                new CreateFieldCommand(
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