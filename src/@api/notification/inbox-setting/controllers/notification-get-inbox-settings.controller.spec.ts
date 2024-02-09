import { NotificationGetInboxSettingsController, NotificationGetInboxSettingsHandler } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationGetInboxSettingsController', () =>
{
    let controller: NotificationGetInboxSettingsController;
    let handler: NotificationGetInboxSettingsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationGetInboxSettingsController,
            ],
            providers: [
                {
                    provide : NotificationGetInboxSettingsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationGetInboxSettingsController>(NotificationGetInboxSettingsController);
        handler = module.get<NotificationGetInboxSettingsHandler>(NotificationGetInboxSettingsHandler);
    });

    describe('main', () =>
    {
        test('NotificationGetInboxSettingsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a notificationMockInboxSettingData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData)));
            expect(await controller.main()).toBe(notificationMockInboxSettingData);
        });
    });
});
