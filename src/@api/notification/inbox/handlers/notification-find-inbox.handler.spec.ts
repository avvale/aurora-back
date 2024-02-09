/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationFindInboxHandler } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindInboxHandler', () =>
{
    let handler: NotificationFindInboxHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationFindInboxHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationFindInboxHandler>(NotificationFindInboxHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationFindInboxHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationFindInboxHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a inbox', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData[0])));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockInboxData[0]);
        });
    });
});
