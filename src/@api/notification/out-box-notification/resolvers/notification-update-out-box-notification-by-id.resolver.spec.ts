/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateOutBoxNotificationByIdInput } from '@api/graphql';
import { NotificationUpdateOutBoxNotificationByIdHandler, NotificationUpdateOutBoxNotificationByIdResolver } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateOutBoxNotificationByIdResolver', () =>
{
    let resolver: NotificationUpdateOutBoxNotificationByIdResolver;
    let handler: NotificationUpdateOutBoxNotificationByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpdateOutBoxNotificationByIdResolver,
                {
                    provide : NotificationUpdateOutBoxNotificationByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<NotificationUpdateOutBoxNotificationByIdResolver>(NotificationUpdateOutBoxNotificationByIdResolver);
        handler = module.get<NotificationUpdateOutBoxNotificationByIdHandler>(NotificationUpdateOutBoxNotificationByIdHandler);
    });

    test('NotificationUpdateOutBoxNotificationByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpdateOutBoxNotificationByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a outBoxNotification by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData[0])));
            expect(await resolver.main(<NotificationUpdateOutBoxNotificationByIdInput>notificationMockOutBoxNotificationData[0])).toBe(notificationMockOutBoxNotificationData[0]);
        });
    });
});
