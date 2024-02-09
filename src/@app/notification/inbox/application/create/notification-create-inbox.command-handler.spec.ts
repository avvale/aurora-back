import { NotificationCreateInboxCommandHandler } from './notification-create-inbox.command-handler';
import { NotificationCreateInboxService } from './notification-create-inbox.service';
import { NotificationCreateInboxCommand, notificationMockInboxData } from '@app/notification/inbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateInboxCommandHandler', () =>
{
    let commandHandler: NotificationCreateInboxCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationCreateInboxCommandHandler,
                {
                    provide : NotificationCreateInboxService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationCreateInboxCommandHandler>(NotificationCreateInboxCommandHandler);
    });

    describe('main', () =>
    {
        test('CreateInboxCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the values objects and pass them as parameters to the NotificationCreateInboxService', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationCreateInboxCommand(
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
