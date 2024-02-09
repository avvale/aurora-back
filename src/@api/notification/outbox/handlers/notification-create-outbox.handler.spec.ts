/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationCreateOutboxHandler } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateOutboxHandler', () =>
{
    let handler: NotificationCreateOutboxHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationCreateOutboxHandler,
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

        handler = module.get<NotificationCreateOutboxHandler>(NotificationCreateOutboxHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('NotificationCreateOutboxHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an outbox created', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData[0])));
            expect(
                await handler.main(
                    notificationMockOutboxData[0],
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockOutboxData[0]);
        });
    });
});
