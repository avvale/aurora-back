import { NotificationCreateInboxSettingsCommand, notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { NotificationCreateInboxSettingsCommandHandler } from '@app/notification/inbox-setting/application/create/notification-create-inbox-settings.command-handler';
import { NotificationCreateInboxSettingsService } from '@app/notification/inbox-setting/application/create/notification-create-inbox-settings.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('notificationCreateInboxSettingsCommandHandler', () =>
{
    let commandHandler: NotificationCreateInboxSettingsCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationCreateInboxSettingsCommandHandler,
                {
                    provide : NotificationCreateInboxSettingsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationCreateInboxSettingsCommandHandler>(NotificationCreateInboxSettingsCommandHandler);
    });

    describe('main', () =>
    {
        test('NotificationCreateInboxSettingsCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return NotificationMockInboxSettingData created', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationCreateInboxSettingsCommand(
                    notificationMockInboxSettingData,
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
