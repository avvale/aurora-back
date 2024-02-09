import { NotificationFindInboxSettingController, NotificationFindInboxSettingHandler } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindInboxSettingController', () =>
{
    let controller: NotificationFindInboxSettingController;
    let handler: NotificationFindInboxSettingHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationFindInboxSettingController,
            ],
            providers: [
                {
                    provide : NotificationFindInboxSettingHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationFindInboxSettingController>(NotificationFindInboxSettingController);
        handler = module.get<NotificationFindInboxSettingHandler>(NotificationFindInboxSettingHandler);
    });

    describe('main', () =>
    {
        test('NotificationFindInboxSettingController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a inboxSetting', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData[0])));
            expect(await controller.main()).toBe(notificationMockInboxSettingData[0]);
        });
    });
});
