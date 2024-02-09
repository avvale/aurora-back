import { notificationMockInboxSettingData, NotificationUpdateInboxSettingsCommand } from '@app/notification/inbox-setting';
import { NotificationUpdateInboxSettingsCommandHandler } from '@app/notification/inbox-setting/application/update/notification-update-inbox-settings.command-handler';
import { NotificationUpdateInboxSettingsService } from '@app/notification/inbox-setting/application/update/notification-update-inbox-settings.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateInboxSettingsCommandHandler', () =>
{
    let commandHandler: NotificationUpdateInboxSettingsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationUpdateInboxSettingsCommandHandler,
                {
                    provide : NotificationUpdateInboxSettingsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationUpdateInboxSettingsCommandHandler>(NotificationUpdateInboxSettingsCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateInboxSettingsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an inboxSettings updated', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationUpdateInboxSettingsCommand(
                    {
                        id: notificationMockInboxSettingData[0].id,
                        accountId: notificationMockInboxSettingData[0].accountId,
                        sort: notificationMockInboxSettingData[0].sort,
                    },
                    {},
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
