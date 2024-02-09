/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationGetInboxesHandler } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationGetInboxesHandler', () =>
{
    let handler: NotificationGetInboxesHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationGetInboxesHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationGetInboxesHandler>(NotificationGetInboxesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationGetInboxesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationGetInboxesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a notificationMockInboxData', async () =>
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
