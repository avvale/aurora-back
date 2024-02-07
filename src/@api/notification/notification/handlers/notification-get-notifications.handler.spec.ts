/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationGetNotificationsHandler } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationGetNotificationsHandler', () =>
{
    let handler: NotificationGetNotificationsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationGetNotificationsHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationGetNotificationsHandler>(NotificationGetNotificationsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationGetNotificationsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationGetNotificationsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a notificationMockNotificationData', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData)));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockNotificationData);
        });
    });
});
