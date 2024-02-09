import { notificationMockNotificationData, NotificationUpdateNotificationsCommand } from '@app/notification/notification';
import { NotificationUpdateNotificationsCommandHandler } from '@app/notification/notification/application/update/notification-update-notifications.command-handler';
import { NotificationUpdateNotificationsService } from '@app/notification/notification/application/update/notification-update-notifications.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateNotificationsCommandHandler', () =>
{
    let commandHandler: NotificationUpdateNotificationsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationUpdateNotificationsCommandHandler,
                {
                    provide : NotificationUpdateNotificationsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationUpdateNotificationsCommandHandler>(NotificationUpdateNotificationsCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateNotificationsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an notifications updated', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationUpdateNotificationsCommand(
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
        });
    });
});
