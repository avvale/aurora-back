import { NotificationCreateOutboxesCommand, notificationMockOutboxData } from '@app/notification/outbox';
import { NotificationCreateOutboxesCommandHandler } from '@app/notification/outbox/application/create/notification-create-outboxes.command-handler';
import { NotificationCreateOutboxesService } from '@app/notification/outbox/application/create/notification-create-outboxes.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('notificationCreateOutboxesCommandHandler', () =>
{
    let commandHandler: NotificationCreateOutboxesCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationCreateOutboxesCommandHandler,
                {
                    provide : NotificationCreateOutboxesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationCreateOutboxesCommandHandler>(NotificationCreateOutboxesCommandHandler);
    });

    describe('main', () =>
    {
        test('NotificationCreateOutboxesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return NotificationMockOutboxData created', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationCreateOutboxesCommand(
                    notificationMockOutboxData,
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
