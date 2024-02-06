import { NotificationCreateOutBoxNotificationController, NotificationCreateOutBoxNotificationHandler } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateOutBoxNotificationController', () =>
{
    let controller: NotificationCreateOutBoxNotificationController;
    let handler: NotificationCreateOutBoxNotificationHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationCreateOutBoxNotificationController,
            ],
            providers: [
                {
                    provide : NotificationCreateOutBoxNotificationHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationCreateOutBoxNotificationController>(NotificationCreateOutBoxNotificationController);
        handler = module.get<NotificationCreateOutBoxNotificationHandler>(NotificationCreateOutBoxNotificationHandler);
    });

    describe('main', () =>
    {
        test('NotificationCreateOutBoxNotificationController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an outBoxNotification created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData[0])));
            expect(
                await controller.main(
                    notificationMockOutBoxNotificationData[0],
                ),
            )
                .toBe(notificationMockOutBoxNotificationData[0]);
        });
    });
});
