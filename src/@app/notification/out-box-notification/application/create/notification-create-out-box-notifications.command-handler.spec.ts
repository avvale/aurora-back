import { NotificationCreateOutBoxNotificationsCommand, notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { NotificationCreateOutBoxNotificationsCommandHandler } from '@app/notification/out-box-notification/application/create/notification-create-out-box-notifications.command-handler';
import { NotificationCreateOutBoxNotificationsService } from '@app/notification/out-box-notification/application/create/notification-create-out-box-notifications.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('notificationCreateOutBoxNotificationsCommandHandler', () =>
{
    let commandHandler: NotificationCreateOutBoxNotificationsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationCreateOutBoxNotificationsCommandHandler,
                {
                    provide : NotificationCreateOutBoxNotificationsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationCreateOutBoxNotificationsCommandHandler>(NotificationCreateOutBoxNotificationsCommandHandler);
    });

    describe('main', () =>
    {
        test('NotificationCreateOutBoxNotificationsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return NotificationMockOutBoxNotificationData created', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationCreateOutBoxNotificationsCommand(
                    notificationMockOutBoxNotificationData,
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
