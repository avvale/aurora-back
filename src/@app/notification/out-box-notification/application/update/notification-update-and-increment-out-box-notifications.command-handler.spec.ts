import { notificationMockOutBoxNotificationData, NotificationUpdateAndIncrementOutBoxNotificationsCommand } from '@app/notification/out-box-notification';
import { NotificationUpdateAndIncrementOutBoxNotificationsCommandHandler } from '@app/notification/out-box-notification/application/update/notification-update-and-increment-out-box-notifications.command-handler';
import { NotificationUpdateAndIncrementOutBoxNotificationsService } from '@app/notification/out-box-notification/application/update/notification-update-and-increment-out-box-notifications.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateAndIncrementOutBoxNotificationsCommandHandler', () =>
{
    let commandHandler: NotificationUpdateAndIncrementOutBoxNotificationsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationUpdateAndIncrementOutBoxNotificationsCommandHandler,
                {
                    provide : NotificationUpdateAndIncrementOutBoxNotificationsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationUpdateAndIncrementOutBoxNotificationsCommandHandler>(NotificationUpdateAndIncrementOutBoxNotificationsCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateAndIncrementOutBoxNotificationsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an outBoxNotifications updated', async () =>
        {
            /* eslint-disable key-spacing */
            expect(await commandHandler.execute(
                new NotificationUpdateAndIncrementOutBoxNotificationsCommand(
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
            /* eslint-enable key-spacing */
        });
    });
});
