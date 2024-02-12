/* eslint-disable @typescript-eslint/no-unused-vars */
import { MessageCustomerMessageInboxHandler } from '../handlers/message-customer-message-inbox.handler';
import { MessageCustomerMessageInboxResolver } from './message-customer-message-inbox.resolver';
import { Test, TestingModule } from '@nestjs/testing';

describe('MessageCustomerMessageInboxResolver', () =>
{
    let resolver: MessageCustomerMessageInboxResolver;
    let handler: MessageCustomerMessageInboxHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                MessageCustomerMessageInboxResolver,
                {
                    provide : MessageCustomerMessageInboxHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<MessageCustomerMessageInboxResolver>(MessageCustomerMessageInboxResolver);
        handler = module.get<MessageCustomerMessageInboxHandler>(MessageCustomerMessageInboxHandler);
    });

    test('MessageCustomerMessageInboxResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('MessageCustomerMessageInboxResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });
    });
});