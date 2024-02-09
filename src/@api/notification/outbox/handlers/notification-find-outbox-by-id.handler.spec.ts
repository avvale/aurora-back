/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationFindOutboxByIdHandler } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindOutboxByIdHandler', () =>
{
    let handler: NotificationFindOutboxByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationFindOutboxByIdHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<NotificationFindOutboxByIdHandler>(NotificationFindOutboxByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationFindOutboxByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationFindOutboxByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an outbox by id', async () =>
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
