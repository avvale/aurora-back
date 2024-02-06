import { NotificationGetOutBoxNotificationsController, NotificationGetOutBoxNotificationsHandler } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationGetOutBoxNotificationsController', () =>
{
    let controller: NotificationGetOutBoxNotificationsController;
    let handler: NotificationGetOutBoxNotificationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationGetOutBoxNotificationsController,
            ],
            providers: [
                {
                    provide : NotificationGetOutBoxNotificationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationGetOutBoxNotificationsController>(NotificationGetOutBoxNotificationsController);
        handler = module.get<NotificationGetOutBoxNotificationsHandler>(NotificationGetOutBoxNotificationsHandler);
    });

    describe('main', () =>
    {
        test('NotificationGetOutBoxNotificationsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a notificationMockOutBoxNotificationData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData)));
            expect(await controller.main()).toBe(notificationMockOutBoxNotificationData);
        });
    });
});
