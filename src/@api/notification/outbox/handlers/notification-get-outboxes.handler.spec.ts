/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationGetOutboxesHandler } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationGetOutboxesHandler', () =>
{
    let handler: NotificationGetOutboxesHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationGetOutboxesHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationGetOutboxesHandler>(NotificationGetOutboxesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationGetOutboxesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationGetOutboxesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a notificationMockOutboxData', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData)));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockOutboxData);
        });
    });
});
