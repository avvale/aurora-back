import { NotificationUpsertOutBoxNotificationController, NotificationUpsertOutBoxNotificationHandler } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpsertOutBoxNotificationController', () =>
{
    let controller: NotificationUpsertOutBoxNotificationController;
    let handler: NotificationUpsertOutBoxNotificationHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationUpsertOutBoxNotificationController,
            ],
            providers: [
                {
                    provide : NotificationUpsertOutBoxNotificationHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationUpsertOutBoxNotificationController>(NotificationUpsertOutBoxNotificationController);
        handler = module.get<NotificationUpsertOutBoxNotificationHandler>(NotificationUpsertOutBoxNotificationHandler);
    });

    describe('main', () =>
    {
        test('NotificationUpsertOutBoxNotificationController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an outBoxNotification upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData[0])));
            expect(await controller.main(notificationMockOutBoxNotificationData[0])).toBe(notificationMockOutBoxNotificationData[0]);
        });
    });
});
