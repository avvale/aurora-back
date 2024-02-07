import { NotificationUpdateNotificationByIdController, NotificationUpdateNotificationByIdHandler } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateNotificationByIdController', () =>
{
    let controller: NotificationUpdateNotificationByIdController;
    let handler: NotificationUpdateNotificationByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationUpdateNotificationByIdController,
            ],
            providers: [
                {
                    provide : NotificationUpdateNotificationByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationUpdateNotificationByIdController>(NotificationUpdateNotificationByIdController);
        handler = module.get<NotificationUpdateNotificationByIdHandler>(NotificationUpdateNotificationByIdHandler);
    });

    describe('main', () =>
    {
        test('NotificationUpdateNotificationByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a notification updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData[0])));
            expect(await controller.main(notificationMockNotificationData[0])).toBe(notificationMockNotificationData[0]);
        });
    });
});
