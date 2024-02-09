import { NotificationFindInboxSettingByIdController, NotificationFindInboxSettingByIdHandler } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindInboxSettingByIdController', () =>
{
    let controller: NotificationFindInboxSettingByIdController;
    let handler: NotificationFindInboxSettingByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationFindInboxSettingByIdController,
            ],
            providers: [
                {
                    provide : NotificationFindInboxSettingByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationFindInboxSettingByIdController>(NotificationFindInboxSettingByIdController);
        handler = module.get<NotificationFindInboxSettingByIdHandler>(NotificationFindInboxSettingByIdHandler);
    });

    describe('main', () =>
    {
        test('NotificationFindInboxSettingByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an inboxSetting by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData[0])));
            expect(await controller.main(notificationMockInboxSettingData[0].id)).toBe(notificationMockInboxSettingData[0]);
        });
    });
});
