/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteOutBoxNotificationsHandler, NotificationDeleteOutBoxNotificationsResolver } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteOutBoxNotificationsResolver', () =>
{
    let resolver: NotificationDeleteOutBoxNotificationsResolver;
    let handler: NotificationDeleteOutBoxNotificationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationDeleteOutBoxNotificationsResolver,
                {
                    provide : NotificationDeleteOutBoxNotificationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationDeleteOutBoxNotificationsResolver>(NotificationDeleteOutBoxNotificationsResolver);
        handler = module.get<NotificationDeleteOutBoxNotificationsHandler>(NotificationDeleteOutBoxNotificationsHandler);
    });

    test('NotificationDeleteOutBoxNotificationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationDeleteOutBoxNotificationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an notificationMockOutBoxNotificationData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData)));
            expect(await resolver.main()).toBe(notificationMockOutBoxNotificationData);
        });
    });
});
