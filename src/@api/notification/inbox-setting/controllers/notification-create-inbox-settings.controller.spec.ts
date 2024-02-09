import { NotificationCreateInboxSettingsController, NotificationCreateInboxSettingsHandler } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateInboxSettingsController', () =>
{
    let controller: NotificationCreateInboxSettingsController;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [
                NotificationCreateInboxSettingsController,
            ],
            providers: [
                {
                    provide : NotificationCreateInboxSettingsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationCreateInboxSettingsController>(NotificationCreateInboxSettingsController);
    });

    describe('main', () =>
    {
        test('NotificationCreateInboxSettingsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an notificationMockInboxSettingData created', async () =>
        {
            expect(
                await controller.main(
                    notificationMockInboxSettingData,
                ),
            )
                .toBe(undefined);
        });
    });
});
