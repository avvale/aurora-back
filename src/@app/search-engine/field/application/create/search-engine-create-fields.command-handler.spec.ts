/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { fields } from '@app/search-engine/field/infrastructure/mock/mock-field.data';
import { CreateFieldsCommandHandler } from './create-fields.command-handler';
import { CreateFieldsCommand } from './create-fields.command';
import { CreateFieldsService } from './create-fields.service';

describe('CreateFieldsCommandHandler', () =>
{
    let commandHandler: CreateFieldsCommandHandler;
    let service: CreateFieldsService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CreateFieldsCommandHandler,
                {
                    provide : CreateFieldsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<CreateFieldsCommandHandler>(CreateFieldsCommandHandler);
        service = module.get<CreateFieldsService>(CreateFieldsService);
    });

    describe('main', () =>
    {
        test('CreateFieldsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return fields createds', async () =>
        {
            expect(await commandHandler.execute(
                new CreateFieldsCommand(
                    fields,
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});