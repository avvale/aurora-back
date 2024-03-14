import { WhatsappCreateWebhooksHandler } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { ICommandBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappCreateWebhooksHandler', () =>
{
    let handler: WhatsappCreateWebhooksHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WhatsappCreateWebhooksHandler,
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<WhatsappCreateWebhooksHandler>(WhatsappCreateWebhooksHandler);
    });

    describe('main', () =>
    {
        test('WhatsappCreateWebhooksHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an whatsappMockWebhookData created', async () =>
        {
            expect(await handler.main(whatsappMockWebhookData)).toBe(true);
        });
    });
});
