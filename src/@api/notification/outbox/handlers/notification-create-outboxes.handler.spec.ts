import { NotificationCreateOutboxesHandler } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { ICommandBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateOutboxesHandler', () =>
{
    let handler: NotificationCreateOutboxesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationCreateOutboxesHandler,
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationCreateOutboxesHandler>(NotificationCreateOutboxesHandler);
    });

    describe('main', () =>
    {
        test('NotificationCreateOutboxesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an notificationMockOutboxData created', async () =>
        {
            expect(await handler.main(notificationMockOutboxData)).toBe(true);
        });
    });
});
