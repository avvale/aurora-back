/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateOutboxesInput } from '@api/graphql';
import { NotificationUpdateOutboxesHandler } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateOutboxesHandler', () =>
{
    let handler: NotificationUpdateOutboxesHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpdateOutboxesHandler,
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

        handler = module.get<NotificationUpdateOutboxesHandler>(NotificationUpdateOutboxesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationUpdateOutboxesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpdateOutboxesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a outboxes updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData[0])));
            expect(
                await handler.main(
                    <NotificationUpdateOutboxesInput>notificationMockOutboxData[0],
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockOutboxData[0]);
        });
    });
});
