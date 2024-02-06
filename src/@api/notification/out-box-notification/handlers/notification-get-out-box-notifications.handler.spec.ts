/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationGetOutBoxNotificationsHandler } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationGetOutBoxNotificationsHandler', () =>
{
    let handler: NotificationGetOutBoxNotificationsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationGetOutBoxNotificationsHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationGetOutBoxNotificationsHandler>(NotificationGetOutBoxNotificationsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationGetOutBoxNotificationsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationGetOutBoxNotificationsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a notificationMockOutBoxNotificationData', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData)));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockOutBoxNotificationData);
        });
    });
});
