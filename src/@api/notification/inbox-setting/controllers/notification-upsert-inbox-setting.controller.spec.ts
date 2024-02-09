import { NotificationUpsertInboxSettingController, NotificationUpsertInboxSettingHandler } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpsertInboxSettingController', () =>
{
    let controller: NotificationUpsertInboxSettingController;
    let handler: NotificationUpsertInboxSettingHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationUpsertInboxSettingController,
            ],
            providers: [
                {
                    provide : NotificationUpsertInboxSettingHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationUpsertInboxSettingController>(NotificationUpsertInboxSettingController);
        handler = module.get<NotificationUpsertInboxSettingHandler>(NotificationUpsertInboxSettingHandler);
    });

    describe('main', () =>
    {
        test('NotificationUpsertInboxSettingController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an inboxSetting upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData[0])));
            expect(await controller.main(notificationMockInboxSettingData[0])).toBe(notificationMockInboxSettingData[0]);
        });
    });
});
