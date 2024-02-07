/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationGetNotificationsHandler, NotificationGetNotificationsResolver } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationGetNotificationsResolver', () =>
{
    let resolver: NotificationGetNotificationsResolver;
    let handler: NotificationGetNotificationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationGetNotificationsResolver,
                {
                    provide : NotificationGetNotificationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationGetNotificationsResolver>(NotificationGetNotificationsResolver);
        handler = module.get<NotificationGetNotificationsHandler>(NotificationGetNotificationsHandler);
    });

    test('NotificationGetNotificationsResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationGetNotificationsResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a notificationMockNotificationData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData)));
            expect(await resolver.main()).toBe(notificationMockNotificationData);
        });
    });
});
