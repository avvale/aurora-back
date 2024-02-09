import { notificationMockInboxSettingData, NotificationUpdateAndIncrementInboxSettingsCommand } from '@app/notification/inbox-setting';
import { NotificationUpdateAndIncrementInboxSettingsCommandHandler } from '@app/notification/inbox-setting/application/update/notification-update-and-increment-inbox-settings.command-handler';
import { NotificationUpdateAndIncrementInboxSettingsService } from '@app/notification/inbox-setting/application/update/notification-update-and-increment-inbox-settings.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateAndIncrementInboxSettingsCommandHandler', () =>
{
    let commandHandler: NotificationUpdateAndIncrementInboxSettingsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationUpdateAndIncrementInboxSettingsCommandHandler,
                {
                    provide : NotificationUpdateAndIncrementInboxSettingsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationUpdateAndIncrementInboxSettingsCommandHandler>(NotificationUpdateAndIncrementInboxSettingsCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateAndIncrementInboxSettingsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an inboxSettings updated', async () =>
        {
            /* eslint-disable key-spacing */
            expect(await commandHandler.execute(
                new NotificationUpdateAndIncrementInboxSettingsCommand(
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
            /* eslint-enable key-spacing */
        });
    });
});
