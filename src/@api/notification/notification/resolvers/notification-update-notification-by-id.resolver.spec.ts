/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateNotificationByIdInput } from '@api/graphql';
import { NotificationUpdateNotificationByIdHandler, NotificationUpdateNotificationByIdResolver } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateNotificationByIdResolver', () =>
{
    let resolver: NotificationUpdateNotificationByIdResolver;
    let handler: NotificationUpdateNotificationByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpdateNotificationByIdResolver,
                {
                    provide : NotificationUpdateNotificationByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationUpdateNotificationByIdResolver>(NotificationUpdateNotificationByIdResolver);
        handler = module.get<NotificationUpdateNotificationByIdHandler>(NotificationUpdateNotificationByIdHandler);
    });

    test('NotificationUpdateNotificationByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpdateNotificationByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a notification by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData[0])));
            expect(await resolver.main(<NotificationUpdateNotificationByIdInput>notificationMockNotificationData[0])).toBe(notificationMockNotificationData[0]);
        });
    });
});
