import { NotificationFindNotificationController, NotificationFindNotificationHandler } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindNotificationController', () =>
{
    let controller: NotificationFindNotificationController;
    let handler: NotificationFindNotificationHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationFindNotificationController,
            ],
            providers: [
                {
                    provide : NotificationFindNotificationHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationFindNotificationController>(NotificationFindNotificationController);
        handler = module.get<NotificationFindNotificationHandler>(NotificationFindNotificationHandler);
    });

    describe('main', () =>
    {
        test('NotificationFindNotificationController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a notification', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData[0])));
            expect(await controller.main()).toBe(notificationMockNotificationData[0]);
        });
    });
});
