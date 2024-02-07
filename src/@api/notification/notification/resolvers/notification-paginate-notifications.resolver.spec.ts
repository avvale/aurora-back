/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationPaginateNotificationsHandler, NotificationPaginateNotificationsResolver } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateNotificationsResolver', () =>
{
    let resolver: NotificationPaginateNotificationsResolver;
    let handler: NotificationPaginateNotificationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationPaginateNotificationsResolver,
                {
                    provide : NotificationPaginateNotificationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationPaginateNotificationsResolver>(NotificationPaginateNotificationsResolver);
        handler = module.get<NotificationPaginateNotificationsHandler>(NotificationPaginateNotificationsHandler);
    });

    test('NotificationPaginateNotificationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationPaginateNotificationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a notificationMockNotificationData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : notificationMockNotificationData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : notificationMockNotificationData,
            });
        });
    });
});
