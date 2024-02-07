import { NotificationGetNotificationsController, NotificationGetNotificationsHandler } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationGetNotificationsController', () =>
{
    let controller: NotificationGetNotificationsController;
    let handler: NotificationGetNotificationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationGetNotificationsController,
            ],
            providers: [
                {
                    provide : NotificationGetNotificationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationGetNotificationsController>(NotificationGetNotificationsController);
        handler = module.get<NotificationGetNotificationsHandler>(NotificationGetNotificationsHandler);
    });

    describe('main', () =>
    {
        test('NotificationGetNotificationsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a notificationMockNotificationData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData)));
            expect(await controller.main()).toBe(notificationMockNotificationData);
        });
    });
});
