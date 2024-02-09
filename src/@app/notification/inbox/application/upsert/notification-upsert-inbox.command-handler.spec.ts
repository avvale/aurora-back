import { notificationMockInboxData, NotificationUpsertInboxCommand } from '@app/notification/inbox';
import { NotificationUpsertInboxCommandHandler } from '@app/notification/inbox/application/upsert/notification-upsert-inbox.command-handler';
import { NotificationUpsertInboxService } from '@app/notification/inbox/application/upsert/notification-upsert-inbox.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpsertInboxCommandHandler', () =>
{
    let commandHandler: NotificationUpsertInboxCommandHandler;
    let service: NotificationUpsertInboxService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationUpsertInboxCommandHandler,
                {
                    provide : NotificationUpsertInboxService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationUpsertInboxCommandHandler>(NotificationUpsertInboxCommandHandler);
        service = module.get<NotificationUpsertInboxService>(NotificationUpsertInboxService);
    });

    describe('main', () =>
    {
        test('UpsertInboxCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should upsert the values objects and pass them as parameters to the NotificationUpsertInboxService', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationUpsertInboxCommand(
                    {
                        id: notificationMockInboxData[0].id,
                        tenantIds: notificationMockInboxData[0].tenantIds,
                        notificationId: notificationMockInboxData[0].notificationId,
                        sort: notificationMockInboxData[0].sort,
                        accountId: notificationMockInboxData[0].accountId,
                        accountCode: notificationMockInboxData[0].accountCode,
                        isImportant: notificationMockInboxData[0].isImportant,
                        subject: notificationMockInboxData[0].subject,
                        body: notificationMockInboxData[0].body,
                        attachments: notificationMockInboxData[0].attachments,
                        isRead: notificationMockInboxData[0].isRead,
                        isReadAtLeastOnce: notificationMockInboxData[0].isReadAtLeastOnce,
                        meta: notificationMockInboxData[0].meta,
                    },
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
