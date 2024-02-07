import { NotificationDeleteNotificationsController, NotificationDeleteNotificationsHandler } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteNotificationsController', () =>
{
    let controller: NotificationDeleteNotificationsController;
    let handler: NotificationDeleteNotificationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationDeleteNotificationsController,
            ],
            providers: [
                {
                    provide : NotificationDeleteNotificationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationDeleteNotificationsController>(NotificationDeleteNotificationsController);
        handler = module.get<NotificationDeleteNotificationsHandler>(NotificationDeleteNotificationsHandler);
    });

    describe('main', () =>
    {
        test('NotificationDeleteNotificationsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an notificationMockNotificationData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData)));
            expect(await controller.main()).toBe(notificationMockNotificationData);
        });
    });
});
