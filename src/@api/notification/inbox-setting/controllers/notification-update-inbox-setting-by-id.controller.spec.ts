import { NotificationUpdateInboxSettingByIdController, NotificationUpdateInboxSettingByIdHandler } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateInboxSettingByIdController', () =>
{
    let controller: NotificationUpdateInboxSettingByIdController;
    let handler: NotificationUpdateInboxSettingByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationUpdateInboxSettingByIdController,
            ],
            providers: [
                {
                    provide : NotificationUpdateInboxSettingByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationUpdateInboxSettingByIdController>(NotificationUpdateInboxSettingByIdController);
        handler = module.get<NotificationUpdateInboxSettingByIdHandler>(NotificationUpdateInboxSettingByIdHandler);
    });

    describe('main', () =>
    {
        test('NotificationUpdateInboxSettingByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a inboxSetting updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData[0])));
            expect(await controller.main(notificationMockInboxSettingData[0])).toBe(notificationMockInboxSettingData[0]);
        });
    });
});
