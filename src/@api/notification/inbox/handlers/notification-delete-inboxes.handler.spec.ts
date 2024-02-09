/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteInboxesHandler } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteInboxesHandler', () =>
{
    let handler: NotificationDeleteInboxesHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationDeleteInboxesHandler,
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

        handler = module.get<NotificationDeleteInboxesHandler>(NotificationDeleteInboxesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationDeleteInboxesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationDeleteInboxesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an notificationMockInboxData deleted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData)));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockInboxData);
        });
    });
});
