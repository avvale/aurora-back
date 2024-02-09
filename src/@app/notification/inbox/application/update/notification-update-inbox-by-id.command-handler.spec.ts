import { notificationMockInboxData, NotificationUpdateInboxByIdCommand } from '@app/notification/inbox';
import { NotificationUpdateInboxByIdCommandHandler } from '@app/notification/inbox/application/update/notification-update-inbox-by-id.command-handler';
import { NotificationUpdateInboxByIdService } from '@app/notification/inbox/application/update/notification-update-inbox-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateInboxByIdCommandHandler', () =>
{
    let commandHandler: NotificationUpdateInboxByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationUpdateInboxByIdCommandHandler,
                {
                    provide : NotificationUpdateInboxByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationUpdateInboxByIdCommandHandler>(NotificationUpdateInboxByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateInboxByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an inbox created', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationUpdateInboxByIdCommand(
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
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
