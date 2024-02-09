/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteOutboxByIdHandler } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteOutboxByIdController', () =>
{
    let handler: NotificationDeleteOutboxByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationDeleteOutboxByIdHandler,
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

        handler = module.get<NotificationDeleteOutboxByIdHandler>(NotificationDeleteOutboxByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('NotificationDeleteOutboxByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an outbox deleted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData[0])));
            expect(
                await handler.main(
                    notificationMockOutboxData[0].id,
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockOutboxData[0]);
        });
    });
});
