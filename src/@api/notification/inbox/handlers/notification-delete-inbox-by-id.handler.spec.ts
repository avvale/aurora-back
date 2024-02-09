/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationDeleteInboxByIdHandler } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationDeleteInboxByIdController', () =>
{
    let handler: NotificationDeleteInboxByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationDeleteInboxByIdHandler,
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

        handler = module.get<NotificationDeleteInboxByIdHandler>(NotificationDeleteInboxByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('NotificationDeleteInboxByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an inbox deleted', async () =>
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
