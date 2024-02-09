/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteOutboxesHandler } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteOutboxesHandler', () =>
{
    let handler: NotificationDeleteOutboxesHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationDeleteOutboxesHandler,
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

        handler = module.get<NotificationDeleteOutboxesHandler>(NotificationDeleteOutboxesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationDeleteOutboxesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationDeleteOutboxesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an notificationMockOutboxData deleted', async () =>
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
