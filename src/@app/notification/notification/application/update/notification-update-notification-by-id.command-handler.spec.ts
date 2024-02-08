import { notificationMockNotificationData, NotificationUpdateNotificationByIdCommand } from '@app/notification/notification';
import { NotificationUpdateNotificationByIdCommandHandler } from '@app/notification/notification/application/update/notification-update-notification-by-id.command-handler';
import { NotificationUpdateNotificationByIdService } from '@app/notification/notification/application/update/notification-update-notification-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateNotificationByIdCommandHandler', () =>
{
    let commandHandler: NotificationUpdateNotificationByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationUpdateNotificationByIdCommandHandler,
                {
                    provide : NotificationUpdateNotificationByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationUpdateNotificationByIdCommandHandler>(NotificationUpdateNotificationByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateNotificationByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an notification created', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationUpdateNotificationByIdCommand(
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
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
