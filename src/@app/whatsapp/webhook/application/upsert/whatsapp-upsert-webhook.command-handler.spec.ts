import { whatsappMockWebhookData, WhatsappUpsertWebhookCommand } from '@app/whatsapp/webhook';
import { WhatsappUpsertWebhookCommandHandler } from '@app/whatsapp/webhook/application/upsert/whatsapp-upsert-webhook.command-handler';
import { WhatsappUpsertWebhookService } from '@app/whatsapp/webhook/application/upsert/whatsapp-upsert-webhook.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappUpsertWebhookCommandHandler', () =>
{
    let commandHandler: WhatsappUpsertWebhookCommandHandler;
    let service: WhatsappUpsertWebhookService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WhatsappUpsertWebhookCommandHandler,
                {
                    provide : WhatsappUpsertWebhookService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<WhatsappUpsertWebhookCommandHandler>(WhatsappUpsertWebhookCommandHandler);
        service = module.get<WhatsappUpsertWebhookService>(WhatsappUpsertWebhookService);
    });

    describe('main', () =>
    {
        test('UpsertWebhookCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should upsert the values objects and pass them as parameters to the WhatsappUpsertWebhookService', async () =>
        {
            expect(await commandHandler.execute(
                new WhatsappUpsertWebhookCommand(
                    {
                        id: whatsappMockWebhookData[0].id,
                        payload: whatsappMockWebhookData[0].payload,
                    },
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
