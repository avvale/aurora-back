/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpsertNotificationHandler } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpsertNotificationHandler', () =>
{
    let handler: NotificationUpsertNotificationHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpsertNotificationHandler,
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

        handler = module.get<NotificationUpsertNotificationHandler>(NotificationUpsertNotificationHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('NotificationUpsertNotificationHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an notification upserted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData[0])));
            expect(
                await handler.main(
                    notificationMockNotificationData[0],
                    'Europe/Madrid',
                ))
                .toBe(notificationMockNotificationData[0]);
        });
    });
});
