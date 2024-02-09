/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationCheckNotificationsInboxHandler } from './notification-check-notifications-inbox.handler';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCheckNotificationsInboxHandler', () =>
{
    let handler: NotificationCheckNotificationsInboxHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                NotificationCheckNotificationsInboxHandler,
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

        handler     = module.get<NotificationCheckNotificationsInboxHandler>(NotificationCheckNotificationsInboxHandler);
        queryBus    = module.get<IQueryBus>(IQueryBus);
        commandBus  = module.get<ICommandBus>(ICommandBus);
    });

    describe('main', () =>
    {
        test('NotificationCheckNotificationsInboxHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });
    });
});