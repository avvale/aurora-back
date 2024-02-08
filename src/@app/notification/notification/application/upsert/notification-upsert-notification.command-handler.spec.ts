import { notificationMockNotificationData, NotificationUpsertNotificationCommand } from '@app/notification/notification';
import { NotificationUpsertNotificationCommandHandler } from '@app/notification/notification/application/upsert/notification-upsert-notification.command-handler';
import { NotificationUpsertNotificationService } from '@app/notification/notification/application/upsert/notification-upsert-notification.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpsertNotificationCommandHandler', () =>
{
    let commandHandler: NotificationUpsertNotificationCommandHandler;
    let service: NotificationUpsertNotificationService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationUpsertNotificationCommandHandler,
                {
                    provide : NotificationUpsertNotificationService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationUpsertNotificationCommandHandler>(NotificationUpsertNotificationCommandHandler);
        service = module.get<NotificationUpsertNotificationService>(NotificationUpsertNotificationService);
    });

    describe('main', () =>
    {
        test('UpsertNotificationCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should upsert the values objects and pass them as parameters to the NotificationUpsertNotificationService', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationUpsertNotificationCommand(
                    {
                        id: notificationMockNotificationData[0].id,
                        tenantIds: notificationMockNotificationData[0].tenantIds,
                        status: notificationMockNotificationData[0].status,
                        accountRecipientIds: notificationMockNotificationData[0].accountRecipientIds,
                        tenantRecipientIds: notificationMockNotificationData[0].tenantRecipientIds,
                        scopeRecipientIds: notificationMockNotificationData[0].scopeRecipientIds,
                        sendAt: notificationMockNotificationData[0].sendAt,
                        isImportant: notificationMockNotificationData[0].isImportant,
                        subject: notificationMockNotificationData[0].subject,
                        body: notificationMockNotificationData[0].body,
                        attachments: notificationMockNotificationData[0].attachments,
                        totalRecipients: notificationMockNotificationData[0].totalRecipients,
                        reads: notificationMockNotificationData[0].reads,
                        meta: notificationMockNotificationData[0].meta,
                    },
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
