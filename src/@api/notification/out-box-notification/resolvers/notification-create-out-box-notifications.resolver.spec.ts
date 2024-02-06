import { NotificationCreateOutBoxNotificationInput } from '@api/graphql';
import { NotificationCreateOutBoxNotificationsHandler, NotificationCreateOutBoxNotificationsResolver } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateOutBoxNotificationsResolver', () =>
{
    let resolver: NotificationCreateOutBoxNotificationsResolver;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationCreateOutBoxNotificationsResolver,
                {
                    provide : NotificationCreateOutBoxNotificationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationCreateOutBoxNotificationsResolver>(NotificationCreateOutBoxNotificationsResolver);
    });

    test('NotificationCreateOutBoxNotificationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationCreateOutBoxNotificationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an outBoxNotifications created', async () =>
        {
            expect(await resolver.main(<NotificationCreateOutBoxNotificationInput[]>notificationMockOutBoxNotificationData)).toBe(undefined);
        });
    });
});
