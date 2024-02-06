/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationFindOutBoxNotificationHandler, NotificationFindOutBoxNotificationResolver } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindOutBoxNotificationResolver', () =>
{
    let resolver: NotificationFindOutBoxNotificationResolver;
    let handler: NotificationFindOutBoxNotificationHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationFindOutBoxNotificationResolver,
                {
                    provide : NotificationFindOutBoxNotificationHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationFindOutBoxNotificationResolver>(NotificationFindOutBoxNotificationResolver);
        handler = module.get<NotificationFindOutBoxNotificationHandler>(NotificationFindOutBoxNotificationHandler);
    });

    test('NotificationFindOutBoxNotificationResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationFindOutBoxNotificationResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a outBoxNotification', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData[0])));
            expect(await resolver.main()).toBe(notificationMockOutBoxNotificationData[0]);
        });
    });
});
