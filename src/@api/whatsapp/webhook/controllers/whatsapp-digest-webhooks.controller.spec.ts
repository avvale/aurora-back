/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappDigestWebhooksHandler } from '../handlers/whatsapp-digest-webhooks.handler';
import { WhatsappDigestWebhooksController } from './whatsapp-webhooks.controller';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappDigestWebhooksController', () =>
{
    let controller: WhatsappDigestWebhooksController;
    let handler: WhatsappDigestWebhooksHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                WhatsappDigestWebhooksController,
            ],
            providers: [
                {
                    provide : WhatsappDigestWebhooksHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<WhatsappDigestWebhooksController>(WhatsappDigestWebhooksController);
        handler = module.get<WhatsappDigestWebhooksHandler>(WhatsappDigestWebhooksHandler);
    });

    describe('main', () =>
    {
        test('WhatsappDigestWebhooksController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });
    });
});