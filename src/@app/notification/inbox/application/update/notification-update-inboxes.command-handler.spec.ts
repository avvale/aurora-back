import { notificationMockInboxData, NotificationUpdateInboxesCommand } from '@app/notification/inbox';
import { NotificationUpdateInboxesCommandHandler } from '@app/notification/inbox/application/update/notification-update-inboxes.command-handler';
import { NotificationUpdateInboxesService } from '@app/notification/inbox/application/update/notification-update-inboxes.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateInboxesCommandHandler', () =>
{
    let commandHandler: NotificationUpdateInboxesCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationUpdateInboxesCommandHandler,
                {
                    provide : NotificationUpdateInboxesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationUpdateInboxesCommandHandler>(NotificationUpdateInboxesCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateInboxesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an inboxes updated', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationUpdateInboxesCommand(
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
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
