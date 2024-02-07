/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateNotificationByIdInput } from '@api/graphql';
import { NotificationUpsertNotificationHandler, NotificationUpsertNotificationResolver } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpsertNotificationResolver', () =>
{
    let resolver: NotificationUpsertNotificationResolver;
    let handler: NotificationUpsertNotificationHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpsertNotificationResolver,
                {
                    provide : NotificationUpsertNotificationHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationUpsertNotificationResolver>(NotificationUpsertNotificationResolver);
        handler = module.get<NotificationUpsertNotificationHandler>(NotificationUpsertNotificationHandler);
    });

    test('NotificationUpsertNotificationResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpsertNotificationResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an notification upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData[0])));
            expect(await resolver.main(<NotificationUpdateNotificationByIdInput>notificationMockNotificationData[0])).toBe(notificationMockNotificationData[0]);
        });
    });
});
