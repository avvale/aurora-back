import { NotificationFindOutBoxNotificationByIdController, NotificationFindOutBoxNotificationByIdHandler } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindOutBoxNotificationByIdController', () =>
{
    let controller: NotificationFindOutBoxNotificationByIdController;
    let handler: NotificationFindOutBoxNotificationByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationFindOutBoxNotificationByIdController,
            ],
            providers: [
                {
                    provide : NotificationFindOutBoxNotificationByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationFindOutBoxNotificationByIdController>(NotificationFindOutBoxNotificationByIdController);
        handler = module.get<NotificationFindOutBoxNotificationByIdHandler>(NotificationFindOutBoxNotificationByIdHandler);
    });

    describe('main', () =>
    {
        test('NotificationFindOutBoxNotificationByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an outBoxNotification by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData[0])));
            expect(await controller.main(notificationMockOutBoxNotificationData[0].id)).toBe(notificationMockOutBoxNotificationData[0]);
        });
    });
});
