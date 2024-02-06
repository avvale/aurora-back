/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationFindOutBoxNotificationByIdHandler, NotificationFindOutBoxNotificationByIdResolver } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindOutBoxNotificationByIdResolver', () =>
{
    let resolver: NotificationFindOutBoxNotificationByIdResolver;
    let handler: NotificationFindOutBoxNotificationByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationFindOutBoxNotificationByIdResolver,
                {
                    provide : NotificationFindOutBoxNotificationByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationFindOutBoxNotificationByIdResolver>(NotificationFindOutBoxNotificationByIdResolver);
        handler = module.get<NotificationFindOutBoxNotificationByIdHandler>(NotificationFindOutBoxNotificationByIdHandler);
    });

    test('NotificationFindOutBoxNotificationByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationFindOutBoxNotificationByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an outBoxNotification by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData[0])));
            expect(await resolver.main(notificationMockOutBoxNotificationData[0].id)).toBe(notificationMockOutBoxNotificationData[0]);
        });
    });
});
