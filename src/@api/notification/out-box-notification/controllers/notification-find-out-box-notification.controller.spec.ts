import { NotificationFindOutBoxNotificationController, NotificationFindOutBoxNotificationHandler } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindOutBoxNotificationController', () =>
{
    let controller: NotificationFindOutBoxNotificationController;
    let handler: NotificationFindOutBoxNotificationHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationFindOutBoxNotificationController,
            ],
            providers: [
                {
                    provide : NotificationFindOutBoxNotificationHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationFindOutBoxNotificationController>(NotificationFindOutBoxNotificationController);
        handler = module.get<NotificationFindOutBoxNotificationHandler>(NotificationFindOutBoxNotificationHandler);
    });

    describe('main', () =>
    {
        test('NotificationFindOutBoxNotificationController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a outBoxNotification', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData[0])));
            expect(await controller.main()).toBe(notificationMockOutBoxNotificationData[0]);
        });
    });
});
