import { NotificationCreateInboxSettingController, NotificationCreateInboxSettingHandler } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateInboxSettingController', () =>
{
    let controller: NotificationCreateInboxSettingController;
    let handler: NotificationCreateInboxSettingHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationCreateInboxSettingController,
            ],
            providers: [
                {
                    provide : NotificationCreateInboxSettingHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationCreateInboxSettingController>(NotificationCreateInboxSettingController);
        handler = module.get<NotificationCreateInboxSettingHandler>(NotificationCreateInboxSettingHandler);
    });

    describe('main', () =>
    {
        test('NotificationCreateInboxSettingController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an inboxSetting created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData[0])));
            expect(
                await controller.main(
                    notificationMockInboxSettingData[0],
                ),
            )
                .toBe(notificationMockInboxSettingData[0]);
        });
    });
});
