/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationPaginateOutBoxNotificationsHandler } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateOutBoxNotificationsHandler', () =>
{
    let handler: NotificationPaginateOutBoxNotificationsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationPaginateOutBoxNotificationsHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationPaginateOutBoxNotificationsHandler>(NotificationPaginateOutBoxNotificationsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationPaginateOutBoxNotificationsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationPaginateOutBoxNotificationsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a outBoxNotifications', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: notificationMockOutBoxNotificationData.length,
                count: notificationMockOutBoxNotificationData.length,
                rows : notificationMockOutBoxNotificationData,
            })));
            expect(
                await handler.main(
                    {},
                    {},
                ),
            )
                .toEqual({
                    total: notificationMockOutBoxNotificationData.length,
                    count: notificationMockOutBoxNotificationData.length,
                    rows : notificationMockOutBoxNotificationData,
                });
        });
    });
});
