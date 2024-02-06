/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateOutBoxNotificationsInput } from '@api/graphql';
import { NotificationUpdateOutBoxNotificationsHandler, NotificationUpdateOutBoxNotificationsResolver } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateOutBoxNotificationsResolver', () =>
{
    let resolver: NotificationUpdateOutBoxNotificationsResolver;
    let handler: NotificationUpdateOutBoxNotificationsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpdateOutBoxNotificationsResolver,
                {
                    provide : NotificationUpdateOutBoxNotificationsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationUpdateOutBoxNotificationsResolver>(NotificationUpdateOutBoxNotificationsResolver);
        handler = module.get<NotificationUpdateOutBoxNotificationsHandler>(NotificationUpdateOutBoxNotificationsHandler);
    });

    test('NotificationUpdateOutBoxNotificationsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpdateOutBoxNotificationsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a outBoxNotifications updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData[0])));
            expect(await resolver.main(<NotificationUpdateOutBoxNotificationsInput>notificationMockOutBoxNotificationData[0])).toBe(notificationMockOutBoxNotificationData[0]);
        });
    });
});
