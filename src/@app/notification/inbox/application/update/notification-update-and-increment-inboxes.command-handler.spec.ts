import { notificationMockInboxData, NotificationUpdateAndIncrementInboxesCommand } from '@app/notification/inbox';
import { NotificationUpdateAndIncrementInboxesCommandHandler } from '@app/notification/inbox/application/update/notification-update-and-increment-inboxes.command-handler';
import { NotificationUpdateAndIncrementInboxesService } from '@app/notification/inbox/application/update/notification-update-and-increment-inboxes.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateAndIncrementInboxesCommandHandler', () =>
{
    let commandHandler: NotificationUpdateAndIncrementInboxesCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationUpdateAndIncrementInboxesCommandHandler,
                {
                    provide : NotificationUpdateAndIncrementInboxesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationUpdateAndIncrementInboxesCommandHandler>(NotificationUpdateAndIncrementInboxesCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateAndIncrementInboxesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an inboxes updated', async () =>
        {
            /* eslint-disable key-spacing */
            expect(await commandHandler.execute(
                new NotificationUpdateAndIncrementInboxesCommand(
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
            /* eslint-enable key-spacing */
        });
    });
});
