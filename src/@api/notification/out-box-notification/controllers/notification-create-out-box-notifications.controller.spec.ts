import { NotificationCreateOutBoxNotificationsController, NotificationCreateOutBoxNotificationsHandler } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateOutBoxNotificationsController', () =>
{
    let controller: NotificationCreateOutBoxNotificationsController;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [
                NotificationCreateOutBoxNotificationsController,
            ],
            providers: [
                {
                    provide : NotificationCreateOutBoxNotificationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationCreateOutBoxNotificationsController>(NotificationCreateOutBoxNotificationsController);
    });

    describe('main', () =>
    {
        test('NotificationCreateOutBoxNotificationsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an notificationMockOutBoxNotificationData created', async () =>
        {
            expect(
                await controller.main(
                    notificationMockOutBoxNotificationData,
                ),
            )
                .toBe(undefined);
        });
    });
});
