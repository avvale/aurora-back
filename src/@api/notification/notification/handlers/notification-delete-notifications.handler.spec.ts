/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteNotificationsHandler } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteNotificationsHandler', () =>
{
    let handler: NotificationDeleteNotificationsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationDeleteNotificationsHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationDeleteNotificationsHandler>(NotificationDeleteNotificationsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationDeleteNotificationsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationDeleteNotificationsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an notificationMockNotificationData deleted', async () =>
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
