import { notificationMockOutBoxNotificationData, NotificationUpsertOutBoxNotificationCommand } from '@app/notification/out-box-notification';
import { NotificationUpsertOutBoxNotificationCommandHandler } from '@app/notification/out-box-notification/application/upsert/notification-upsert-out-box-notification.command-handler';
import { NotificationUpsertOutBoxNotificationService } from '@app/notification/out-box-notification/application/upsert/notification-upsert-out-box-notification.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpsertOutBoxNotificationCommandHandler', () =>
{
    let commandHandler: NotificationUpsertOutBoxNotificationCommandHandler;
    let service: NotificationUpsertOutBoxNotificationService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationUpsertOutBoxNotificationCommandHandler,
                {
                    provide : NotificationUpsertOutBoxNotificationService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationUpsertOutBoxNotificationCommandHandler>(NotificationUpsertOutBoxNotificationCommandHandler);
        service = module.get<NotificationUpsertOutBoxNotificationService>(NotificationUpsertOutBoxNotificationService);
    });

    describe('main', () =>
    {
        test('UpsertOutBoxNotificationCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should upsert the values objects and pass them as parameters to the NotificationUpsertOutBoxNotificationService', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationUpsertOutBoxNotificationCommand(
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
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
