/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationCreateInboxHandler } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCreateInboxHandler', () =>
{
    let handler: NotificationCreateInboxHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationCreateInboxHandler,
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

        handler = module.get<NotificationCreateInboxHandler>(NotificationCreateInboxHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('NotificationCreateInboxHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an inbox created', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData[0])));
            expect(
                await handler.main(
                    notificationMockInboxData[0],
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockInboxData[0]);
        });
    });
});
