/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationPaginateOutboxesHandler } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateOutboxesHandler', () =>
{
    let handler: NotificationPaginateOutboxesHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationPaginateOutboxesHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationPaginateOutboxesHandler>(NotificationPaginateOutboxesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationPaginateOutboxesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationPaginateOutboxesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a outboxes', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: notificationMockOutboxData.length,
                count: notificationMockOutboxData.length,
                rows : notificationMockOutboxData,
            })));
            expect(
                await handler.main(
                    {},
                    {},
                ),
            )
                .toEqual({
                    total: notificationMockOutboxData.length,
                    count: notificationMockOutboxData.length,
                    rows : notificationMockOutboxData,
                });
        });
    });
});
