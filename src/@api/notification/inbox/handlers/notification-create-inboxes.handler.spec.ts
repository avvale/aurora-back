import { NotificationCreateInboxesHandler } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { ICommandBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateInboxesHandler', () =>
{
    let handler: NotificationCreateInboxesHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationCreateInboxesHandler,
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationCreateInboxesHandler>(NotificationCreateInboxesHandler);
    });

    describe('main', () =>
    {
        test('NotificationCreateInboxesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an notificationMockInboxData created', async () =>
        {
            expect(await handler.main(notificationMockInboxData)).toBe(true);
        });
    });
});
