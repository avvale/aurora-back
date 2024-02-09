import { notificationMockInboxSettingData, NotificationUpdateInboxSettingByIdCommand } from '@app/notification/inbox-setting';
import { NotificationUpdateInboxSettingByIdCommandHandler } from '@app/notification/inbox-setting/application/update/notification-update-inbox-setting-by-id.command-handler';
import { NotificationUpdateInboxSettingByIdService } from '@app/notification/inbox-setting/application/update/notification-update-inbox-setting-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateInboxSettingByIdCommandHandler', () =>
{
    let commandHandler: NotificationUpdateInboxSettingByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationUpdateInboxSettingByIdCommandHandler,
                {
                    provide : NotificationUpdateInboxSettingByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationUpdateInboxSettingByIdCommandHandler>(NotificationUpdateInboxSettingByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateInboxSettingByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an inboxSetting created', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationUpdateInboxSettingByIdCommand(
                    {
                        id: notificationMockInboxSettingData[0].id,
                        accountId: notificationMockInboxSettingData[0].accountId,
                        sort: notificationMockInboxSettingData[0].sort,
                    },
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
