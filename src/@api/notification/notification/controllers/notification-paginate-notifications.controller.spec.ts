import { NotificationPaginateNotificationsController, NotificationPaginateNotificationsHandler } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateNotificationsController', () =>
{
    let controller: NotificationPaginateNotificationsController;
    let handler: NotificationPaginateNotificationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationPaginateNotificationsController,
            ],
            providers: [
                {
                    provide : NotificationPaginateNotificationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationPaginateNotificationsController>(NotificationPaginateNotificationsController);
        handler = module.get<NotificationPaginateNotificationsHandler>(NotificationPaginateNotificationsHandler);
    });

    describe('main', () =>
    {
        test('NotificationPaginateNotificationsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a notificationMockNotificationData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : notificationMockNotificationData,
            })));
            expect(await controller.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : notificationMockNotificationData,
            });
        });
    });
});
