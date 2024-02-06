/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationGetOutBoxNotificationsHandler, NotificationGetOutBoxNotificationsResolver } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationGetOutBoxNotificationsResolver', () =>
{
    let resolver: NotificationGetOutBoxNotificationsResolver;
    let handler: NotificationGetOutBoxNotificationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationGetOutBoxNotificationsResolver,
                {
                    provide : NotificationGetOutBoxNotificationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationGetOutBoxNotificationsResolver>(NotificationGetOutBoxNotificationsResolver);
        handler = module.get<NotificationGetOutBoxNotificationsHandler>(NotificationGetOutBoxNotificationsHandler);
    });

    test('NotificationGetOutBoxNotificationsResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationGetOutBoxNotificationsResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a notificationMockOutBoxNotificationData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData)));
            expect(await resolver.main()).toBe(notificationMockOutBoxNotificationData);
        });
    });
});
