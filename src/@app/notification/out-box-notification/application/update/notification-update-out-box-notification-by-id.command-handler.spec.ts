import { notificationMockOutBoxNotificationData, NotificationUpdateOutBoxNotificationByIdCommand } from '@app/notification/out-box-notification';
import { NotificationUpdateOutBoxNotificationByIdCommandHandler } from '@app/notification/out-box-notification/application/update/notification-update-out-box-notification-by-id.command-handler';
import { NotificationUpdateOutBoxNotificationByIdService } from '@app/notification/out-box-notification/application/update/notification-update-out-box-notification-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateOutBoxNotificationByIdCommandHandler', () =>
{
    let commandHandler: NotificationUpdateOutBoxNotificationByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationUpdateOutBoxNotificationByIdCommandHandler,
                {
                    provide : NotificationUpdateOutBoxNotificationByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationUpdateOutBoxNotificationByIdCommandHandler>(NotificationUpdateOutBoxNotificationByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateOutBoxNotificationByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an outBoxNotification created', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationUpdateOutBoxNotificationByIdCommand(
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
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
