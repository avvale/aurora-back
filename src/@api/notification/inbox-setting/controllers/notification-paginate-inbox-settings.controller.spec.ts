import { NotificationPaginateInboxSettingsController, NotificationPaginateInboxSettingsHandler } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateInboxSettingsController', () =>
{
    let controller: NotificationPaginateInboxSettingsController;
    let handler: NotificationPaginateInboxSettingsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationPaginateInboxSettingsController,
            ],
            providers: [
                {
                    provide : NotificationPaginateInboxSettingsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationPaginateInboxSettingsController>(NotificationPaginateInboxSettingsController);
        handler = module.get<NotificationPaginateInboxSettingsHandler>(NotificationPaginateInboxSettingsHandler);
    });

    describe('main', () =>
    {
        test('NotificationPaginateInboxSettingsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a notificationMockInboxSettingData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : notificationMockInboxSettingData,
            })));
            expect(await controller.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : notificationMockInboxSettingData,
            });
        });
    });
});
