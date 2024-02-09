import { NotificationDeleteOutboxesController, NotificationDeleteOutboxesHandler } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteOutboxesController', () =>
{
    let controller: NotificationDeleteOutboxesController;
    let handler: NotificationDeleteOutboxesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationDeleteOutboxesController,
            ],
            providers: [
                {
                    provide : NotificationDeleteOutboxesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationDeleteOutboxesController>(NotificationDeleteOutboxesController);
        handler = module.get<NotificationDeleteOutboxesHandler>(NotificationDeleteOutboxesHandler);
    });

    describe('main', () =>
    {
        test('NotificationDeleteOutboxesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an notificationMockOutboxData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData)));
            expect(await controller.main()).toBe(notificationMockOutboxData);
        });
    });
});
