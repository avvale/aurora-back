/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationUpdateInboxByIdInput } from '@api/graphql';
import { NotificationUpdateInboxByIdHandler } from '@api/notification/inbox';
import { notificationMockInboxData } from '@app/notification/inbox';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationUpdateInboxByIdHandler', () =>
{
    let handler: NotificationUpdateInboxByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationUpdateInboxByIdHandler,
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

        handler = module.get<NotificationUpdateInboxByIdHandler>(NotificationUpdateInboxByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('NotificationUpdateInboxByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('NotificationUpdateInboxByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a inbox updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(notificationMockInboxData[0])));
            expect(
                await handler.main(
                    <NotificationUpdateInboxByIdInput>notificationMockInboxData[0],
                    {},
                    'Europe/Madrid',
                ))
                .toBe(notificationMockInboxData[0]);
        });
    });
});
