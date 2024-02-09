import { NotificationUpsertOutboxController, NotificationUpsertOutboxHandler } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpsertOutboxController', () =>
{
    let controller: NotificationUpsertOutboxController;
    let handler: NotificationUpsertOutboxHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                NotificationUpsertOutboxController,
            ],
            providers: [
                {
                    provide : NotificationUpsertOutboxHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationUpsertOutboxController>(NotificationUpsertOutboxController);
        handler = module.get<NotificationUpsertOutboxHandler>(NotificationUpsertOutboxHandler);
    });

    describe('main', () =>
    {
        test('NotificationUpsertOutboxController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an outbox upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData[0])));
            expect(await controller.main(notificationMockOutboxData[0])).toBe(notificationMockOutboxData[0]);
        });
    });
});
