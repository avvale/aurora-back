import { NotificationUpdateInboxSettingsController, NotificationUpdateInboxSettingsHandler } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateInboxSettingsController', () =>
{
    let controller: NotificationUpdateInboxSettingsController;
    let handler: NotificationUpdateInboxSettingsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationUpdateInboxSettingsController,
            ],
            providers: [
                {
                    provide : NotificationUpdateInboxSettingsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationUpdateInboxSettingsController>(NotificationUpdateInboxSettingsController);
        handler = module.get<NotificationUpdateInboxSettingsHandler>(NotificationUpdateInboxSettingsHandler);
    });

    describe('main', () =>
    {
        test('NotificationUpdateInboxSettingsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a inboxSettings updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData[0])));
            expect(await controller.main(notificationMockInboxSettingData[0])).toBe(notificationMockInboxSettingData[0]);
        });
    });
});
