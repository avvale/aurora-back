/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateOutBoxNotificationByIdInput } from '@api/graphql';
import { NotificationUpsertOutBoxNotificationHandler, NotificationUpsertOutBoxNotificationResolver } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpsertOutBoxNotificationResolver', () =>
{
    let resolver: NotificationUpsertOutBoxNotificationResolver;
    let handler: NotificationUpsertOutBoxNotificationHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpsertOutBoxNotificationResolver,
                {
                    provide : NotificationUpsertOutBoxNotificationHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationUpsertOutBoxNotificationResolver>(NotificationUpsertOutBoxNotificationResolver);
        handler = module.get<NotificationUpsertOutBoxNotificationHandler>(NotificationUpsertOutBoxNotificationHandler);
    });

    test('NotificationUpsertOutBoxNotificationResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpsertOutBoxNotificationResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an outBoxNotification upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData[0])));
            expect(await resolver.main(<NotificationUpdateOutBoxNotificationByIdInput>notificationMockOutBoxNotificationData[0])).toBe(notificationMockOutBoxNotificationData[0]);
        });
    });
});
