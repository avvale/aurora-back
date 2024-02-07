import { NotificationUpdateNotificationsController, NotificationUpdateNotificationsHandler } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateNotificationsController', () =>
{
    let controller: NotificationUpdateNotificationsController;
    let handler: NotificationUpdateNotificationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationUpdateNotificationsController,
            ],
            providers: [
                {
                    provide : NotificationUpdateNotificationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationUpdateNotificationsController>(NotificationUpdateNotificationsController);
        handler = module.get<NotificationUpdateNotificationsHandler>(NotificationUpdateNotificationsHandler);
    });

    describe('main', () =>
    {
        test('NotificationUpdateNotificationsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a notifications updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData[0])));
            expect(await controller.main(notificationMockNotificationData[0])).toBe(notificationMockNotificationData[0]);
        });
    });
});
