/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationCreateOutBoxNotificationInput } from '@api/graphql';
import { NotificationCreateOutBoxNotificationHandler, NotificationCreateOutBoxNotificationResolver } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateOutBoxNotificationResolver', () =>
{
    let resolver: NotificationCreateOutBoxNotificationResolver;
    let handler: NotificationCreateOutBoxNotificationHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationCreateOutBoxNotificationResolver,
                {
                    provide : NotificationCreateOutBoxNotificationHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationCreateOutBoxNotificationResolver>(NotificationCreateOutBoxNotificationResolver);
        handler = module.get<NotificationCreateOutBoxNotificationHandler>(NotificationCreateOutBoxNotificationHandler);
    });

    test('NotificationCreateOutBoxNotificationResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationCreateOutBoxNotificationResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an outBoxNotification created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData[0])));
            expect(await resolver.main(<NotificationCreateOutBoxNotificationInput>notificationMockOutBoxNotificationData[0])).toBe(notificationMockOutBoxNotificationData[0]);
        });
    });
});
