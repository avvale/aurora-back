import { notificationMockNotificationData, NotificationUpdateAndIncrementNotificationsCommand } from '@app/notification/notification';
import { NotificationUpdateAndIncrementNotificationsCommandHandler } from '@app/notification/notification/application/update/notification-update-and-increment-notifications.command-handler';
import { NotificationUpdateAndIncrementNotificationsService } from '@app/notification/notification/application/update/notification-update-and-increment-notifications.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateAndIncrementNotificationsCommandHandler', () =>
{
    let commandHandler: NotificationUpdateAndIncrementNotificationsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationUpdateAndIncrementNotificationsCommandHandler,
                {
                    provide : NotificationUpdateAndIncrementNotificationsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationUpdateAndIncrementNotificationsCommandHandler>(NotificationUpdateAndIncrementNotificationsCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateAndIncrementNotificationsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an notifications updated', async () =>
        {
            /* eslint-disable key-spacing */
            expect(await commandHandler.execute(
                new NotificationUpdateAndIncrementNotificationsCommand(
                    {
                        id: notificationMockNotificationData[0].id,
                        tenantIds: notificationMockNotificationData[0].tenantIds,
                        status: notificationMockNotificationData[0].status,
                        accountRecipientIds: notificationMockNotificationData[0].accountRecipientIds,
                        tenantRecipientIds: notificationMockNotificationData[0].tenantRecipientIds,
                        scopeRecipients: notificationMockNotificationData[0].scopeRecipients,
                        sendAt: notificationMockNotificationData[0].sendAt,
                        isImportant: notificationMockNotificationData[0].isImportant,
                        subject: notificationMockNotificationData[0].subject,
                        body: notificationMockNotificationData[0].body,
                        attachments: notificationMockNotificationData[0].attachments,
                        totalRecipients: notificationMockNotificationData[0].totalRecipients,
                        reads: notificationMockNotificationData[0].reads,
                        meta: notificationMockNotificationData[0].meta,
                    },
                    {},
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
            /* eslint-enable key-spacing */
        });
    });
});
