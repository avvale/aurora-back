import { NotificationCreateNotificationInput } from '@api/graphql';
import { NotificationCreateNotificationsHandler, NotificationCreateNotificationsResolver } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateNotificationsResolver', () =>
{
    let resolver: NotificationCreateNotificationsResolver;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationCreateNotificationsResolver,
                {
                    provide : NotificationCreateNotificationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationCreateNotificationsResolver>(NotificationCreateNotificationsResolver);
    });

    test('NotificationCreateNotificationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationCreateNotificationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an notifications created', async () =>
        {
            expect(await resolver.main(<NotificationCreateNotificationInput[]>notificationMockNotificationData)).toBe(undefined);
        });
    });
});
