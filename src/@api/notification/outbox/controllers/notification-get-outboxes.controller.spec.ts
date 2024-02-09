import { NotificationGetOutboxesController, NotificationGetOutboxesHandler } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationGetOutboxesController', () =>
{
    let controller: NotificationGetOutboxesController;
    let handler: NotificationGetOutboxesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationGetOutboxesController,
            ],
            providers: [
                {
                    provide : NotificationGetOutboxesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationGetOutboxesController>(NotificationGetOutboxesController);
        handler = module.get<NotificationGetOutboxesHandler>(NotificationGetOutboxesHandler);
    });

    describe('main', () =>
    {
        test('NotificationGetOutboxesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a notificationMockOutboxData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData)));
            expect(await controller.main()).toBe(notificationMockOutboxData);
        });
    });
});
