/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateOutboxByIdInput } from '@api/graphql';
import { NotificationUpdateOutboxByIdHandler } from '@api/notification/outbox';
import { notificationMockOutboxData } from '@app/notification/outbox';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateOutboxByIdHandler', () =>
{
    let handler: NotificationUpdateOutboxByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpdateOutboxByIdHandler,
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

        handler = module.get<NotificationUpdateOutboxByIdHandler>(NotificationUpdateOutboxByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationUpdateOutboxByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpdateOutboxByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a outbox updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockOutboxData[0])));
            expect(
                await handler.main(
                    <NotificationUpdateOutboxByIdInput>notificationMockOutboxData[0],
                    {},
                    'Europe/Madrid',
                ))
                .toBe(notificationMockOutboxData[0]);
        });
    });
});
