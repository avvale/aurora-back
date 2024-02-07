import { NotificationFindNotificationByIdController, NotificationFindNotificationByIdHandler } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindNotificationByIdController', () =>
{
    let controller: NotificationFindNotificationByIdController;
    let handler: NotificationFindNotificationByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationFindNotificationByIdController,
            ],
            providers: [
                {
                    provide : NotificationFindNotificationByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationFindNotificationByIdController>(NotificationFindNotificationByIdController);
        handler = module.get<NotificationFindNotificationByIdHandler>(NotificationFindNotificationByIdHandler);
    });

    describe('main', () =>
    {
        test('NotificationFindNotificationByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an notification by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData[0])));
            expect(await controller.main(notificationMockNotificationData[0].id)).toBe(notificationMockNotificationData[0]);
        });
    });
});
