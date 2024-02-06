/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationPaginateOutBoxNotificationsHandler, NotificationPaginateOutBoxNotificationsResolver } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateOutBoxNotificationsResolver', () =>
{
    let resolver: NotificationPaginateOutBoxNotificationsResolver;
    let handler: NotificationPaginateOutBoxNotificationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationPaginateOutBoxNotificationsResolver,
                {
                    provide : NotificationPaginateOutBoxNotificationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationPaginateOutBoxNotificationsResolver>(NotificationPaginateOutBoxNotificationsResolver);
        handler = module.get<NotificationPaginateOutBoxNotificationsHandler>(NotificationPaginateOutBoxNotificationsHandler);
    });

    test('NotificationPaginateOutBoxNotificationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationPaginateOutBoxNotificationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a notificationMockOutBoxNotificationData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : notificationMockOutBoxNotificationData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : notificationMockOutBoxNotificationData,
            });
        });
    });
});
