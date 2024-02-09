import { NotificationDeleteOutboxesCommand } from '@app/notification/outbox';
import { NotificationDeleteOutboxesCommandHandler } from '@app/notification/outbox/application/delete/notification-delete-outboxes.command-handler';
import { NotificationDeleteOutboxesService } from '@app/notification/outbox/application/delete/notification-delete-outboxes.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteOutboxesCommandHandler', () =>
{
    let commandHandler: NotificationDeleteOutboxesCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationDeleteOutboxesCommandHandler,
                {
                    provide : NotificationDeleteOutboxesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationDeleteOutboxesCommandHandler>(NotificationDeleteOutboxesCommandHandler);
    });

    describe('main', () =>
    {
        test('NotificationDeleteOutboxesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return void', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationDeleteOutboxesCommand(),
            )).toBe(undefined);
        });
    });
});
