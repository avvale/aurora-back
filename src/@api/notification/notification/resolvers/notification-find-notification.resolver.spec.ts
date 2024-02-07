/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationFindNotificationHandler, NotificationFindNotificationResolver } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindNotificationResolver', () =>
{
    let resolver: NotificationFindNotificationResolver;
    let handler: NotificationFindNotificationHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationFindNotificationResolver,
                {
                    provide : NotificationFindNotificationHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationFindNotificationResolver>(NotificationFindNotificationResolver);
        handler = module.get<NotificationFindNotificationHandler>(NotificationFindNotificationHandler);
    });

    test('NotificationFindNotificationResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationFindNotificationResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a notification', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData[0])));
            expect(await resolver.main()).toBe(notificationMockNotificationData[0]);
        });
    });
});
