/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationFindInboxByIdHandler } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindInboxByIdHandler', () =>
{
    let handler: NotificationFindInboxByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationFindInboxByIdHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationFindInboxByIdHandler>(NotificationFindInboxByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationFindInboxByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationFindInboxByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an inbox by id', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData[0])));
            expect(
                await handler.main(
                    notificationMockInboxData[0].id,
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockInboxData[0]);
        });
    });
});
