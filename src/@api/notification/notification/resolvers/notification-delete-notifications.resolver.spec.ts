/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteNotificationsHandler, NotificationDeleteNotificationsResolver } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteNotificationsResolver', () =>
{
    let resolver: NotificationDeleteNotificationsResolver;
    let handler: NotificationDeleteNotificationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationDeleteNotificationsResolver,
                {
                    provide : NotificationDeleteNotificationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationDeleteNotificationsResolver>(NotificationDeleteNotificationsResolver);
        handler = module.get<NotificationDeleteNotificationsHandler>(NotificationDeleteNotificationsHandler);
    });

    test('NotificationDeleteNotificationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationDeleteNotificationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an notificationMockNotificationData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData)));
            expect(await resolver.main()).toBe(notificationMockNotificationData);
        });
    });
});
