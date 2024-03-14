import { whatsappMockWebhookData, WhatsappUpdateWebhooksCommand } from '@app/whatsapp/webhook';
import { WhatsappUpdateWebhooksCommandHandler } from '@app/whatsapp/webhook/application/update/whatsapp-update-webhooks.command-handler';
import { WhatsappUpdateWebhooksService } from '@app/whatsapp/webhook/application/update/whatsapp-update-webhooks.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappUpdateWebhooksCommandHandler', () =>
{
    let commandHandler: WhatsappUpdateWebhooksCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WhatsappUpdateWebhooksCommandHandler,
                {
                    provide : WhatsappUpdateWebhooksService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<WhatsappUpdateWebhooksCommandHandler>(WhatsappUpdateWebhooksCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateWebhooksCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an webhooks updated', async () =>
        {
            expect(await commandHandler.execute(
                new WhatsappUpdateWebhooksCommand(
                    {
                        id: whatsappMockWebhookData[0].id,
                        payload: whatsappMockWebhookData[0].payload,
                    },
                    {},
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
