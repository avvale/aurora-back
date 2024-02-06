/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateOutBoxNotificationsInput } from '@api/graphql';
import { NotificationUpdateOutBoxNotificationsHandler } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateOutBoxNotificationsHandler', () =>
{
    let handler: NotificationUpdateOutBoxNotificationsHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpdateOutBoxNotificationsHandler,
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

        handler = module.get<NotificationUpdateOutBoxNotificationsHandler>(NotificationUpdateOutBoxNotificationsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationUpdateOutBoxNotificationsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpdateOutBoxNotificationsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a outBoxNotifications updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData[0])));
            expect(
                await handler.main(
                    <NotificationUpdateOutBoxNotificationsInput>notificationMockOutBoxNotificationData[0],
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockOutBoxNotificationData[0]);
        });
    });
});
