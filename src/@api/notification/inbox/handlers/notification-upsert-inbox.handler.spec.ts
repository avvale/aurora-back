/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpsertInboxHandler } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpsertInboxHandler', () =>
{
    let handler: NotificationUpsertInboxHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpsertInboxHandler,
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

        handler = module.get<NotificationUpsertInboxHandler>(NotificationUpsertInboxHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('NotificationUpsertInboxHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an inbox upserted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData[0])));
            expect(
                await handler.main(
                    notificationMockInboxData[0],
                    'Europe/Madrid',
                ))
                .toBe(notificationMockInboxData[0]);
        });
    });
});
