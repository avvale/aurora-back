import { NotificationPaginateOutBoxNotificationsController, NotificationPaginateOutBoxNotificationsHandler } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateOutBoxNotificationsController', () =>
{
    let controller: NotificationPaginateOutBoxNotificationsController;
    let handler: NotificationPaginateOutBoxNotificationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationPaginateOutBoxNotificationsController,
            ],
            providers: [
                {
                    provide : NotificationPaginateOutBoxNotificationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationPaginateOutBoxNotificationsController>(NotificationPaginateOutBoxNotificationsController);
        handler = module.get<NotificationPaginateOutBoxNotificationsHandler>(NotificationPaginateOutBoxNotificationsHandler);
    });

    describe('main', () =>
    {
        test('NotificationPaginateOutBoxNotificationsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a notificationMockOutBoxNotificationData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : notificationMockOutBoxNotificationData,
            })));
            expect(await controller.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : notificationMockOutBoxNotificationData,
            });
        });
    });
});
