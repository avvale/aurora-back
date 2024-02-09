import { NotificationCreateOutboxesController, NotificationCreateOutboxesHandler } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateOutboxesController', () =>
{
    let controller: NotificationCreateOutboxesController;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [
                NotificationCreateOutboxesController,
            ],
            providers: [
                {
                    provide : NotificationCreateOutboxesHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<NotificationCreateOutboxesController>(NotificationCreateOutboxesController);
    });

    describe('main', () =>
    {
        test('NotificationCreateOutboxesController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an notificationMockOutboxData created', async () =>
        {
            expect(
                await controller.main(
                    notificationMockOutboxData,
                ),
            )
                .toBe(undefined);
        });
    });
});
