import { WhatsappCreateWebhooksCommand, whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { WhatsappCreateWebhooksCommandHandler } from '@app/whatsapp/webhook/application/create/whatsapp-create-webhooks.command-handler';
import { WhatsappCreateWebhooksService } from '@app/whatsapp/webhook/application/create/whatsapp-create-webhooks.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('whatsappCreateWebhooksCommandHandler', () =>
{
    let commandHandler: WhatsappCreateWebhooksCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WhatsappCreateWebhooksCommandHandler,
                {
                    provide : WhatsappCreateWebhooksService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<WhatsappCreateWebhooksCommandHandler>(WhatsappCreateWebhooksCommandHandler);
    });

    describe('main', () =>
    {
        test('WhatsappCreateWebhooksCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return WhatsappMockWebhookData created', async () =>
        {
            expect(await commandHandler.execute(
                new WhatsappCreateWebhooksCommand(
                    whatsappMockWebhookData,
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
