import { NotificationCreateOutboxController, NotificationCreateOutboxHandler } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateOutboxController', () =>
{
    let controller: NotificationCreateOutboxController;
    let handler: NotificationCreateOutboxHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationCreateOutboxController,
            ],
            providers: [
                {
                    provide : NotificationCreateOutboxHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationCreateOutboxController>(NotificationCreateOutboxController);
        handler = module.get<NotificationCreateOutboxHandler>(NotificationCreateOutboxHandler);
    });

    describe('main', () =>
    {
        test('NotificationCreateOutboxController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an outbox created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData[0])));
            expect(
                await controller.main(
                    notificationMockOutboxData[0],
                ),
            )
                .toBe(notificationMockOutboxData[0]);
        });
    });
});
