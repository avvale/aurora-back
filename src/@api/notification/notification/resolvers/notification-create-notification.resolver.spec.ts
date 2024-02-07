/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationCreateNotificationInput } from '@api/graphql';
import { NotificationCreateNotificationHandler, NotificationCreateNotificationResolver } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateNotificationResolver', () =>
{
    let resolver: NotificationCreateNotificationResolver;
    let handler: NotificationCreateNotificationHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationCreateNotificationResolver,
                {
                    provide : NotificationCreateNotificationHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationCreateNotificationResolver>(NotificationCreateNotificationResolver);
        handler = module.get<NotificationCreateNotificationHandler>(NotificationCreateNotificationHandler);
    });

    test('NotificationCreateNotificationResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationCreateNotificationResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an notification created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData[0])));
            expect(await resolver.main(<NotificationCreateNotificationInput>notificationMockNotificationData[0])).toBe(notificationMockNotificationData[0]);
        });
    });
});
