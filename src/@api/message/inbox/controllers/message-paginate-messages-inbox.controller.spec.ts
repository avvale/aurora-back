/* eslint-disable @typescript-eslint/no-unused-vars */
import { MessagePaginateMessagesInboxHandler } from '../handlers/message-paginate-messages-inbox.handler';
import { MessagePaginateMessagesInboxController } from './message-paginate-messages-inbox.controller';
import { Test, TestingModule } from '@nestjs/testing';

describe('MessagePaginateMessagesInboxController', () =>
{
    let controller: MessagePaginateMessagesInboxController;
    let handler: MessagePaginateMessagesInboxHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                MessagePaginateMessagesInboxController,
            ],
            providers: [
                {
                    provide : MessagePaginateMessagesInboxHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MessagePaginateMessagesInboxController>(MessagePaginateMessagesInboxController);
        handler = module.get<MessagePaginateMessagesInboxHandler>(MessagePaginateMessagesInboxHandler);
    });

    describe('main', () =>
    {
        test('MessagePaginateMessagesInboxController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });
    });
});