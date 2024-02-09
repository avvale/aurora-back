/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateInboxesInput } from '@api/graphql';
import { NotificationUpdateInboxesHandler } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateInboxesHandler', () =>
{
    let handler: NotificationUpdateInboxesHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpdateInboxesHandler,
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

        handler = module.get<NotificationUpdateInboxesHandler>(NotificationUpdateInboxesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationUpdateInboxesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpdateInboxesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a inboxes updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData[0])));
            expect(
                await handler.main(
                    <NotificationUpdateInboxesInput>notificationMockInboxData[0],
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(notificationMockInboxData[0]);
        });
    });
});
