/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateNotificationsInput } from '@api/graphql';
import { NotificationUpdateNotificationsHandler, NotificationUpdateNotificationsResolver } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateNotificationsResolver', () =>
{
    let resolver: NotificationUpdateNotificationsResolver;
    let handler: NotificationUpdateNotificationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpdateNotificationsResolver,
                {
                    provide : NotificationUpdateNotificationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationUpdateNotificationsResolver>(NotificationUpdateNotificationsResolver);
        handler = module.get<NotificationUpdateNotificationsHandler>(NotificationUpdateNotificationsHandler);
    });

    test('NotificationUpdateNotificationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpdateNotificationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a notifications updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData[0])));
            expect(await resolver.main(<NotificationUpdateNotificationsInput>notificationMockNotificationData[0])).toBe(notificationMockNotificationData[0]);
        });
    });
});
