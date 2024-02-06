import { NotificationCreateOutBoxNotificationsHandler } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { ICommandBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateOutBoxNotificationsHandler', () =>
{
    let handler: NotificationCreateOutBoxNotificationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationCreateOutBoxNotificationsHandler,
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationCreateOutBoxNotificationsHandler>(NotificationCreateOutBoxNotificationsHandler);
    });

    describe('main', () =>
    {
        test('NotificationCreateOutBoxNotificationsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an notificationMockOutBoxNotificationData created', async () =>
        {
            expect(await handler.main(notificationMockOutBoxNotificationData)).toBe(true);
        });
    });
});
