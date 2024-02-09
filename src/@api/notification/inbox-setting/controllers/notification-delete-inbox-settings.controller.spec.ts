import { NotificationDeleteInboxSettingsController, NotificationDeleteInboxSettingsHandler } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteInboxSettingsController', () =>
{
    let controller: NotificationDeleteInboxSettingsController;
    let handler: NotificationDeleteInboxSettingsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationDeleteInboxSettingsController,
            ],
            providers: [
                {
                    provide : NotificationDeleteInboxSettingsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationDeleteInboxSettingsController>(NotificationDeleteInboxSettingsController);
        handler = module.get<NotificationDeleteInboxSettingsHandler>(NotificationDeleteInboxSettingsHandler);
    });

    describe('main', () =>
    {
        test('NotificationDeleteInboxSettingsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an notificationMockInboxSettingData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData)));
            expect(await controller.main()).toBe(notificationMockInboxSettingData);
        });
    });
});
