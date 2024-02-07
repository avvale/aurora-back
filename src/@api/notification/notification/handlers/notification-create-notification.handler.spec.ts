/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationCreateNotificationHandler } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateNotificationHandler', () =>
{
    let handler: NotificationCreateNotificationHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationCreateNotificationHandler,
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

        handler = module.get<NotificationCreateNotificationHandler>(NotificationCreateNotificationHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('NotificationCreateNotificationHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an notification created', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData[0])));
            expect(
                await handler.main(
                    notificationMockNotificationData[0],
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockNotificationData[0]);
        });
    });
});
