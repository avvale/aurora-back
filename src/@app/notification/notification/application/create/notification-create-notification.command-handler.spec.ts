import { NotificationCreateNotificationCommandHandler } from './notification-create-notification.command-handler';
import { NotificationCreateNotificationService } from './notification-create-notification.service';
import { NotificationCreateNotificationCommand, notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateNotificationCommandHandler', () =>
{
    let commandHandler: NotificationCreateNotificationCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationCreateNotificationCommandHandler,
                {
                    provide : NotificationCreateNotificationService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationCreateNotificationCommandHandler>(NotificationCreateNotificationCommandHandler);
    });

    describe('main', () =>
    {
        test('CreateNotificationCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the values objects and pass them as parameters to the NotificationCreateNotificationService', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationCreateNotificationCommand(
                    {
                        id: notificationMockNotificationData[0].id,
                        tenantId: notificationMockNotificationData[0].tenantId,
                        status: notificationMockNotificationData[0].status,
                        accountIds: notificationMockNotificationData[0].accountIds,
                        tenantIds: notificationMockNotificationData[0].tenantIds,
                        scopes: notificationMockNotificationData[0].scopes,
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
