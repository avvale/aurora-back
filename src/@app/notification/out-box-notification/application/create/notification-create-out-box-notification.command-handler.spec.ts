import { NotificationCreateOutBoxNotificationCommandHandler } from './notification-create-out-box-notification.command-handler';
import { NotificationCreateOutBoxNotificationService } from './notification-create-out-box-notification.service';
import { NotificationCreateOutBoxNotificationCommand, notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateOutBoxNotificationCommandHandler', () =>
{
    let commandHandler: NotificationCreateOutBoxNotificationCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationCreateOutBoxNotificationCommandHandler,
                {
                    provide : NotificationCreateOutBoxNotificationService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationCreateOutBoxNotificationCommandHandler>(NotificationCreateOutBoxNotificationCommandHandler);
    });

    describe('main', () =>
    {
        test('CreateOutBoxNotificationCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the values objects and pass them as parameters to the NotificationCreateOutBoxNotificationService', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationCreateOutBoxNotificationCommand(
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
