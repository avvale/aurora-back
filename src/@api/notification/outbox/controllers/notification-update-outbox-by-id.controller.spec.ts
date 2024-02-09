import { NotificationUpdateOutboxByIdController, NotificationUpdateOutboxByIdHandler } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateOutboxByIdController', () =>
{
    let controller: NotificationUpdateOutboxByIdController;
    let handler: NotificationUpdateOutboxByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationUpdateOutboxByIdController,
            ],
            providers: [
                {
                    provide : NotificationUpdateOutboxByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationUpdateOutboxByIdController>(NotificationUpdateOutboxByIdController);
        handler = module.get<NotificationUpdateOutboxByIdHandler>(NotificationUpdateOutboxByIdHandler);
    });

    describe('main', () =>
    {
        test('NotificationUpdateOutboxByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a outbox updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData[0])));
            expect(await controller.main(notificationMockOutboxData[0])).toBe(notificationMockOutboxData[0]);
        });
    });
});
