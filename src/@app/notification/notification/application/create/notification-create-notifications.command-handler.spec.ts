import { NotificationCreateNotificationsCommand, notificationMockNotificationData } from '@app/notification/notification';
import { NotificationCreateNotificationsCommandHandler } from '@app/notification/notification/application/create/notification-create-notifications.command-handler';
import { NotificationCreateNotificationsService } from '@app/notification/notification/application/create/notification-create-notifications.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('notificationCreateNotificationsCommandHandler', () =>
{
    let commandHandler: NotificationCreateNotificationsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationCreateNotificationsCommandHandler,
                {
                    provide : NotificationCreateNotificationsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationCreateNotificationsCommandHandler>(NotificationCreateNotificationsCommandHandler);
    });

    describe('main', () =>
    {
        test('NotificationCreateNotificationsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return NotificationMockNotificationData created', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationCreateNotificationsCommand(
                    notificationMockNotificationData,
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
