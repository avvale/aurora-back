import { NotificationCreateInboxSettingCommandHandler } from './notification-create-inbox-setting.command-handler';
import { NotificationCreateInboxSettingService } from './notification-create-inbox-setting.service';
import { NotificationCreateInboxSettingCommand, notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateInboxSettingCommandHandler', () =>
{
    let commandHandler: NotificationCreateInboxSettingCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationCreateInboxSettingCommandHandler,
                {
                    provide : NotificationCreateInboxSettingService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationCreateInboxSettingCommandHandler>(NotificationCreateInboxSettingCommandHandler);
    });

    describe('main', () =>
    {
        test('CreateInboxSettingCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the values objects and pass them as parameters to the NotificationCreateInboxSettingService', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationCreateInboxSettingCommand(
                    {
                        id: notificationMockInboxSettingData[0].id,
                        accountId: notificationMockInboxSettingData[0].accountId,
                        sort: notificationMockInboxSettingData[0].sort,
                    },
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
