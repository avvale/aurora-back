/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationPaginateInboxesHandler } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateInboxesHandler', () =>
{
    let handler: NotificationPaginateInboxesHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationPaginateInboxesHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationPaginateInboxesHandler>(NotificationPaginateInboxesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationPaginateInboxesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationPaginateInboxesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a inboxes', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: notificationMockInboxData.length,
                count: notificationMockInboxData.length,
                rows : notificationMockInboxData,
            })));
            expect(
                await handler.main(
                    {},
                    {},
                ),
            )
                .toEqual({
                    total: notificationMockInboxData.length,
                    count: notificationMockInboxData.length,
                    rows : notificationMockInboxData,
                });
        });
    });
});
