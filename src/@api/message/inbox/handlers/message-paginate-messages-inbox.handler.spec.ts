/* eslint-disable @typescript-eslint/no-unused-vars */
import { MessagePaginateMessagesInboxHandler } from './message-paginate-messages-inbox.handler';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('MessagePaginateMessagesInboxHandler', () =>
{
    let handler: MessagePaginateMessagesInboxHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MessagePaginateMessagesInboxHandler,
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

        handler     = module.get<MessagePaginateMessagesInboxHandler>(MessagePaginateMessagesInboxHandler);
        queryBus    = module.get<IQueryBus>(IQueryBus);
        commandBus  = module.get<ICommandBus>(ICommandBus);
    });

    describe('main', () =>
    {
        test('MessagePaginateMessagesInboxHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });
    });
});