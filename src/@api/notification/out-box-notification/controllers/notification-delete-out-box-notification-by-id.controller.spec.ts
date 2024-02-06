/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteOutBoxNotificationByIdController, NotificationDeleteOutBoxNotificationByIdHandler } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteOutBoxNotificationByIdController', () =>
{
    let controller: NotificationDeleteOutBoxNotificationByIdController;
    let handler: NotificationDeleteOutBoxNotificationByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationDeleteOutBoxNotificationByIdController,
            ],
            providers: [
                {
                    provide : NotificationDeleteOutBoxNotificationByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationDeleteOutBoxNotificationByIdController>(NotificationDeleteOutBoxNotificationByIdController);
        handler = module.get<NotificationDeleteOutBoxNotificationByIdHandler>(NotificationDeleteOutBoxNotificationByIdHandler);
    });

    describe('main', () =>
    {
        test('NotificationDeleteOutBoxNotificationByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an outBoxNotification deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData[0])));
            expect(await controller.main(notificationMockOutBoxNotificationData[0].id)).toBe(notificationMockOutBoxNotificationData[0]);
        });
    });
});
