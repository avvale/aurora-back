import { NotificationUpdateOutBoxNotificationByIdController, NotificationUpdateOutBoxNotificationByIdHandler } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateOutBoxNotificationByIdController', () =>
{
    let controller: NotificationUpdateOutBoxNotificationByIdController;
    let handler: NotificationUpdateOutBoxNotificationByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationUpdateOutBoxNotificationByIdController,
            ],
            providers: [
                {
                    provide : NotificationUpdateOutBoxNotificationByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationUpdateOutBoxNotificationByIdController>(NotificationUpdateOutBoxNotificationByIdController);
        handler = module.get<NotificationUpdateOutBoxNotificationByIdHandler>(NotificationUpdateOutBoxNotificationByIdHandler);
    });

    describe('main', () =>
    {
        test('NotificationUpdateOutBoxNotificationByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a outBoxNotification updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData[0])));
            expect(await controller.main(notificationMockOutBoxNotificationData[0])).toBe(notificationMockOutBoxNotificationData[0]);
        });
    });
});
