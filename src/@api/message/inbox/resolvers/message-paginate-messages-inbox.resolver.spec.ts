/* eslint-disable @typescript-eslint/no-unused-vars */
import { MessagePaginateMessagesInboxHandler } from '../handlers/message-paginate-messages-inbox.handler';
import { MessagePaginateMessagesInboxResolver } from './message-paginate-messages-inbox.resolver';
import { Test, TestingModule } from '@nestjs/testing';

describe('MessagePaginateMessagesInboxResolver', () =>
{
    let resolver: MessagePaginateMessagesInboxResolver;
    let handler: MessagePaginateMessagesInboxHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MessagePaginateMessagesInboxResolver,
                {
                    provide : MessagePaginateMessagesInboxHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MessagePaginateMessagesInboxResolver>(MessagePaginateMessagesInboxResolver);
        handler = module.get<MessagePaginateMessagesInboxHandler>(MessagePaginateMessagesInboxHandler);
    });

    test('MessagePaginateMessagesInboxResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('MessagePaginateMessagesInboxResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });
    });
});