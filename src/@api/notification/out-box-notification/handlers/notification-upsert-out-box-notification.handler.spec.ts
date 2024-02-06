/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpsertOutBoxNotificationHandler } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpsertOutBoxNotificationHandler', () =>
{
    let handler: NotificationUpsertOutBoxNotificationHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpsertOutBoxNotificationHandler,
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

        handler = module.get<NotificationUpsertOutBoxNotificationHandler>(NotificationUpsertOutBoxNotificationHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('NotificationUpsertOutBoxNotificationHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an outBoxNotification upserted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData[0])));
            expect(
                await handler.main(
                    notificationMockOutBoxNotificationData[0],
                    'Europe/Madrid',
                ))
                .toBe(notificationMockOutBoxNotificationData[0]);
        });
    });
});
