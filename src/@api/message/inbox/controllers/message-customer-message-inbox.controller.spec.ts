/* eslint-disable @typescript-eslint/no-unused-vars */
import { MessageCustomerMessageInboxHandler } from '../handlers/message-customer-message-inbox.handler';
import { MessageCustomerMessageInboxController } from './message-customer-message-inbox.controller';
import { Test, TestingModule } from '@nestjs/testing';

describe('MessageCustomerMessageInboxController', () =>
{
    let controller: MessageCustomerMessageInboxController;
    let handler: MessageCustomerMessageInboxHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                MessageCustomerMessageInboxController,
            ],
            providers: [
                {
                    provide : MessageCustomerMessageInboxHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<MessageCustomerMessageInboxController>(MessageCustomerMessageInboxController);
        handler = module.get<MessageCustomerMessageInboxHandler>(MessageCustomerMessageInboxHandler);
    });

    describe('main', () =>
    {
        test('MessageCustomerMessageInboxController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });
    });
});