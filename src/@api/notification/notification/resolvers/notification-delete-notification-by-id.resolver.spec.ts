/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteNotificationByIdHandler, NotificationDeleteNotificationByIdResolver } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteNotificationByIdResolver', () =>
{
    let resolver: NotificationDeleteNotificationByIdResolver;
    let handler: NotificationDeleteNotificationByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationDeleteNotificationByIdResolver,
                {
                    provide : NotificationDeleteNotificationByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationDeleteNotificationByIdResolver>(NotificationDeleteNotificationByIdResolver);
        handler = module.get<NotificationDeleteNotificationByIdHandler>(NotificationDeleteNotificationByIdHandler);
    });

    test('NotificationDeleteNotificationByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationDeleteNotificationByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an notification deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData[0])));
            expect(await resolver.main(notificationMockNotificationData[0].id)).toBe(notificationMockNotificationData[0]);
        });
    });
});
