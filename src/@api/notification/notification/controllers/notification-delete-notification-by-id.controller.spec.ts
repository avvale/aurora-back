/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteNotificationByIdController, NotificationDeleteNotificationByIdHandler } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteNotificationByIdController', () =>
{
    let controller: NotificationDeleteNotificationByIdController;
    let handler: NotificationDeleteNotificationByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationDeleteNotificationByIdController,
            ],
            providers: [
                {
                    provide : NotificationDeleteNotificationByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationDeleteNotificationByIdController>(NotificationDeleteNotificationByIdController);
        handler = module.get<NotificationDeleteNotificationByIdHandler>(NotificationDeleteNotificationByIdHandler);
    });

    describe('main', () =>
    {
        test('NotificationDeleteNotificationByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an notification deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData[0])));
            expect(await controller.main(notificationMockNotificationData[0].id)).toBe(notificationMockNotificationData[0]);
        });
    });
});
