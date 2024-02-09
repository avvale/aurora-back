import { NotificationCreateInboxSettingsHandler } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { ICommandBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateInboxSettingsHandler', () =>
{
    let handler: NotificationCreateInboxSettingsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationCreateInboxSettingsHandler,
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationCreateInboxSettingsHandler>(NotificationCreateInboxSettingsHandler);
    });

    describe('main', () =>
    {
        test('NotificationCreateInboxSettingsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an notificationMockInboxSettingData created', async () =>
        {
            expect(await handler.main(notificationMockInboxSettingData)).toBe(true);
        });
    });
});
