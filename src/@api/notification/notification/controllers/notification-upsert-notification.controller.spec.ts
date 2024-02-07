import { NotificationUpsertNotificationController, NotificationUpsertNotificationHandler } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpsertNotificationController', () =>
{
    let controller: NotificationUpsertNotificationController;
    let handler: NotificationUpsertNotificationHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationUpsertNotificationController,
            ],
            providers: [
                {
                    provide : NotificationUpsertNotificationHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationUpsertNotificationController>(NotificationUpsertNotificationController);
        handler = module.get<NotificationUpsertNotificationHandler>(NotificationUpsertNotificationHandler);
    });

    describe('main', () =>
    {
        test('NotificationUpsertNotificationController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an notification upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData[0])));
            expect(await controller.main(notificationMockNotificationData[0])).toBe(notificationMockNotificationData[0]);
        });
    });
});
