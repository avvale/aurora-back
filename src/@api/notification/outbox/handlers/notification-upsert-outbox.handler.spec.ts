/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpsertOutboxHandler } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpsertOutboxHandler', () =>
{
    let handler: NotificationUpsertOutboxHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpsertOutboxHandler,
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

        handler = module.get<NotificationUpsertOutboxHandler>(NotificationUpsertOutboxHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('NotificationUpsertOutboxHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an outbox upserted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData[0])));
            expect(
                await handler.main(
                    notificationMockOutboxData[0],
                    'Europe/Madrid',
                ))
                .toBe(notificationMockOutboxData[0]);
        });
    });
});
