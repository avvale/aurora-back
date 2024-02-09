import { NotificationUpdateOutboxesController, NotificationUpdateOutboxesHandler } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateOutboxesController', () =>
{
    let controller: NotificationUpdateOutboxesController;
    let handler: NotificationUpdateOutboxesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationUpdateOutboxesController,
            ],
            providers: [
                {
                    provide : NotificationUpdateOutboxesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationUpdateOutboxesController>(NotificationUpdateOutboxesController);
        handler = module.get<NotificationUpdateOutboxesHandler>(NotificationUpdateOutboxesHandler);
    });

    describe('main', () =>
    {
        test('NotificationUpdateOutboxesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a outboxes updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData[0])));
            expect(await controller.main(notificationMockOutboxData[0])).toBe(notificationMockOutboxData[0]);
        });
    });
});
