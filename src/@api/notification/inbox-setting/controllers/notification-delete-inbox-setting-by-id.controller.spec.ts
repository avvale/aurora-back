/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteInboxSettingByIdController, NotificationDeleteInboxSettingByIdHandler } from '@api/notification/inbox-setting';
import { notificationMockInboxSettingData } from '@app/notification/inbox-setting';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteInboxSettingByIdController', () =>
{
    let controller: NotificationDeleteInboxSettingByIdController;
    let handler: NotificationDeleteInboxSettingByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationDeleteInboxSettingByIdController,
            ],
            providers: [
                {
                    provide : NotificationDeleteInboxSettingByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationDeleteInboxSettingByIdController>(NotificationDeleteInboxSettingByIdController);
        handler = module.get<NotificationDeleteInboxSettingByIdHandler>(NotificationDeleteInboxSettingByIdHandler);
    });

    describe('main', () =>
    {
        test('NotificationDeleteInboxSettingByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an inboxSetting deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxSettingData[0])));
            expect(await controller.main(notificationMockInboxSettingData[0].id)).toBe(notificationMockInboxSettingData[0]);
        });
    });
});
