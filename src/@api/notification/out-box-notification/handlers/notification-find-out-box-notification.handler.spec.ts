/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationFindOutBoxNotificationHandler } from '@api/notification/out-box-notification';
import { notificationMockOutBoxNotificationData } from '@app/notification/out-box-notification';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindOutBoxNotificationHandler', () =>
{
    let handler: NotificationFindOutBoxNotificationHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationFindOutBoxNotificationHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationFindOutBoxNotificationHandler>(NotificationFindOutBoxNotificationHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationFindOutBoxNotificationHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationFindOutBoxNotificationHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a outBoxNotification', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutBoxNotificationData[0])));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockOutBoxNotificationData[0]);
        });
    });
});
