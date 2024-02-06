import { NotificationDeleteOutBoxNotificationsController, NotificationDeleteOutBoxNotificationsHandler } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteOutBoxNotificationsController', () =>
{
    let controller: NotificationDeleteOutBoxNotificationsController;
    let handler: NotificationDeleteOutBoxNotificationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationDeleteOutBoxNotificationsController,
            ],
            providers: [
                {
                    provide : NotificationDeleteOutBoxNotificationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationDeleteOutBoxNotificationsController>(NotificationDeleteOutBoxNotificationsController);
        handler = module.get<NotificationDeleteOutBoxNotificationsHandler>(NotificationDeleteOutBoxNotificationsHandler);
    });

    describe('main', () =>
    {
        test('NotificationDeleteOutBoxNotificationsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an notificationMockOutBoxNotificationData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData)));
            expect(await controller.main()).toBe(notificationMockOutBoxNotificationData);
        });
    });
});
