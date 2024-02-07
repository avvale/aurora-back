/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationFindNotificationByIdHandler, NotificationFindNotificationByIdResolver } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindNotificationByIdResolver', () =>
{
    let resolver: NotificationFindNotificationByIdResolver;
    let handler: NotificationFindNotificationByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationFindNotificationByIdResolver,
                {
                    provide : NotificationFindNotificationByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationFindNotificationByIdResolver>(NotificationFindNotificationByIdResolver);
        handler = module.get<NotificationFindNotificationByIdHandler>(NotificationFindNotificationByIdHandler);
    });

    test('NotificationFindNotificationByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationFindNotificationByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an notification by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData[0])));
            expect(await resolver.main(notificationMockNotificationData[0].id)).toBe(notificationMockNotificationData[0]);
        });
    });
});
