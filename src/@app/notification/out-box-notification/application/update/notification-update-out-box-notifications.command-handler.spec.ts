import { notificationMockOutBoxNotificationData, NotificationUpdateOutBoxNotificationsCommand } from '@app/notification/out-box-notification';
import { NotificationUpdateOutBoxNotificationsCommandHandler } from '@app/notification/out-box-notification/application/update/notification-update-out-box-notifications.command-handler';
import { NotificationUpdateOutBoxNotificationsService } from '@app/notification/out-box-notification/application/update/notification-update-out-box-notifications.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateOutBoxNotificationsCommandHandler', () =>
{
    let commandHandler: NotificationUpdateOutBoxNotificationsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationUpdateOutBoxNotificationsCommandHandler,
                {
                    provide : NotificationUpdateOutBoxNotificationsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationUpdateOutBoxNotificationsCommandHandler>(NotificationUpdateOutBoxNotificationsCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateOutBoxNotificationsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an outBoxNotifications updated', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationUpdateOutBoxNotificationsCommand(
                    {
                        id: notificationMockOutBoxNotificationData[0].id,
                        sort: notificationMockOutBoxNotificationData[0].sort,
                        tenantId: notificationMockOutBoxNotificationData[0].tenantId,
                        accountIds: notificationMockOutBoxNotificationData[0].accountIds,
                        accountTenantOperator: notificationMockOutBoxNotificationData[0].accountTenantOperator,
                        tenantIds: notificationMockOutBoxNotificationData[0].tenantIds,
                        scopes: notificationMockOutBoxNotificationData[0].scopes,
                        isImportant: notificationMockOutBoxNotificationData[0].isImportant,
                        subject: notificationMockOutBoxNotificationData[0].subject,
                        body: notificationMockOutBoxNotificationData[0].body,
                        attachments: notificationMockOutBoxNotificationData[0].attachments,
                        meta: notificationMockOutBoxNotificationData[0].meta,
                    },
                    {},
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
