/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteOutBoxNotificationByIdHandler, NotificationDeleteOutBoxNotificationByIdResolver } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteOutBoxNotificationByIdResolver', () =>
{
    let resolver: NotificationDeleteOutBoxNotificationByIdResolver;
    let handler: NotificationDeleteOutBoxNotificationByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationDeleteOutBoxNotificationByIdResolver,
                {
                    provide : NotificationDeleteOutBoxNotificationByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationDeleteOutBoxNotificationByIdResolver>(NotificationDeleteOutBoxNotificationByIdResolver);
        handler = module.get<NotificationDeleteOutBoxNotificationByIdHandler>(NotificationDeleteOutBoxNotificationByIdHandler);
    });

    test('NotificationDeleteOutBoxNotificationByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationDeleteOutBoxNotificationByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an outBoxNotification deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData[0])));
            expect(await resolver.main(notificationMockOutBoxNotificationData[0].id)).toBe(notificationMockOutBoxNotificationData[0]);
        });
    });
});
