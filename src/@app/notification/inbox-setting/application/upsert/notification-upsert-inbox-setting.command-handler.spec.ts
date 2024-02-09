import { notificationMockInboxSettingData, NotificationUpsertInboxSettingCommand } from '@app/notification/inbox-setting';
import { NotificationUpsertInboxSettingCommandHandler } from '@app/notification/inbox-setting/application/upsert/notification-upsert-inbox-setting.command-handler';
import { NotificationUpsertInboxSettingService } from '@app/notification/inbox-setting/application/upsert/notification-upsert-inbox-setting.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpsertInboxSettingCommandHandler', () =>
{
    let commandHandler: NotificationUpsertInboxSettingCommandHandler;
    let service: NotificationUpsertInboxSettingService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationUpsertInboxSettingCommandHandler,
                {
                    provide : NotificationUpsertInboxSettingService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<NotificationUpsertInboxSettingCommandHandler>(NotificationUpsertInboxSettingCommandHandler);
        service = module.get<NotificationUpsertInboxSettingService>(NotificationUpsertInboxSettingService);
    });

    describe('main', () =>
    {
        test('UpsertInboxSettingCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should upsert the values objects and pass them as parameters to the NotificationUpsertInboxSettingService', async () =>
        {
            expect(await commandHandler.execute(
                new NotificationUpsertInboxSettingCommand(
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
