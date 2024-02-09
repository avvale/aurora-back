/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationFindOutboxHandler } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindOutboxHandler', () =>
{
    let handler: NotificationFindOutboxHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationFindOutboxHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationFindOutboxHandler>(NotificationFindOutboxHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationFindOutboxHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationFindOutboxHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a outbox', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData[0])));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockOutboxData[0]);
        });
    });
});
