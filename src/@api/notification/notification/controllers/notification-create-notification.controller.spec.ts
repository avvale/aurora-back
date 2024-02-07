import { NotificationCreateNotificationController, NotificationCreateNotificationHandler } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateNotificationController', () =>
{
    let controller: NotificationCreateNotificationController;
    let handler: NotificationCreateNotificationHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationCreateNotificationController,
            ],
            providers: [
                {
                    provide : NotificationCreateNotificationHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationCreateNotificationController>(NotificationCreateNotificationController);
        handler = module.get<NotificationCreateNotificationHandler>(NotificationCreateNotificationHandler);
    });

    describe('main', () =>
    {
        test('NotificationCreateNotificationController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an notification created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData[0])));
            expect(
                await controller.main(
                    notificationMockNotificationData[0],
                ),
            )
                .toBe(notificationMockNotificationData[0]);
        });
    });
});
