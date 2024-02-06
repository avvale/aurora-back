import { NotificationUpdateOutBoxNotificationsController, NotificationUpdateOutBoxNotificationsHandler } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateOutBoxNotificationsController', () =>
{
    let controller: NotificationUpdateOutBoxNotificationsController;
    let handler: NotificationUpdateOutBoxNotificationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationUpdateOutBoxNotificationsController,
            ],
            providers: [
                {
                    provide : NotificationUpdateOutBoxNotificationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationUpdateOutBoxNotificationsController>(NotificationUpdateOutBoxNotificationsController);
        handler = module.get<NotificationUpdateOutBoxNotificationsHandler>(NotificationUpdateOutBoxNotificationsHandler);
    });

    describe('main', () =>
    {
        test('NotificationUpdateOutBoxNotificationsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a outBoxNotifications updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData[0])));
            expect(await controller.main(notificationMockOutBoxNotificationData[0])).toBe(notificationMockOutBoxNotificationData[0]);
        });
    });
});
