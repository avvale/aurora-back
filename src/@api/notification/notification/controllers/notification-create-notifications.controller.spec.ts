import { NotificationCreateNotificationsController, NotificationCreateNotificationsHandler } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateNotificationsController', () =>
{
    let controller: NotificationCreateNotificationsController;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [
                NotificationCreateNotificationsController,
            ],
            providers: [
                {
                    provide : NotificationCreateNotificationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationCreateNotificationsController>(NotificationCreateNotificationsController);
    });

    describe('main', () =>
    {
        test('NotificationCreateNotificationsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an notificationMockNotificationData created', async () =>
        {
            expect(
                await controller.main(
                    notificationMockNotificationData,
                ),
            )
                .toBe(undefined);
        });
    });
});
