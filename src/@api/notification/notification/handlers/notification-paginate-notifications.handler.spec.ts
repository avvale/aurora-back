/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationPaginateNotificationsHandler } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateNotificationsHandler', () =>
{
    let handler: NotificationPaginateNotificationsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationPaginateNotificationsHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationPaginateNotificationsHandler>(NotificationPaginateNotificationsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationPaginateNotificationsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationPaginateNotificationsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a notifications', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: notificationMockNotificationData.length,
                count: notificationMockNotificationData.length,
                rows : notificationMockNotificationData,
            })));
            expect(
                await handler.main(
                    {},
                    {},
                ),
            )
                .toEqual({
                    total: notificationMockNotificationData.length,
                    count: notificationMockNotificationData.length,
                    rows : notificationMockNotificationData,
                });
        });
    });
});
