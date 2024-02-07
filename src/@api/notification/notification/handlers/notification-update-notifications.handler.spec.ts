/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateNotificationsInput } from '@api/graphql';
import { NotificationUpdateNotificationsHandler } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateNotificationsHandler', () =>
{
    let handler: NotificationUpdateNotificationsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpdateNotificationsHandler,
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

        handler = module.get<NotificationUpdateNotificationsHandler>(NotificationUpdateNotificationsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationUpdateNotificationsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpdateNotificationsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a notifications updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData[0])));
            expect(
                await handler.main(
                    <NotificationUpdateNotificationsInput>notificationMockNotificationData[0],
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockNotificationData[0]);
        });
    });
});
