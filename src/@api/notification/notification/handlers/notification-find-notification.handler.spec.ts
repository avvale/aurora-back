/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationFindNotificationHandler } from '@api/notification/notification';
import { notificationMockNotificationData } from '@app/notification/notification';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindNotificationHandler', () =>
{
    let handler: NotificationFindNotificationHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationFindNotificationHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationFindNotificationHandler>(NotificationFindNotificationHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationFindNotificationHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationFindNotificationHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a notification', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockNotificationData[0])));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockNotificationData[0]);
        });
    });
});
