import { NotificationCreateNotificationsHandler } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { ICommandBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateNotificationsHandler', () =>
{
    let handler: NotificationCreateNotificationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationCreateNotificationsHandler,
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationCreateNotificationsHandler>(NotificationCreateNotificationsHandler);
    });

    describe('main', () =>
    {
        test('NotificationCreateNotificationsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an notificationMockNotificationData created', async () =>
        {
            expect(await handler.main(notificationMockNotificationData)).toBe(true);
        });
    });
});
