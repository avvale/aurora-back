import { WhatsappCreateWebhookCommandHandler } from './whatsapp-create-webhook.command-handler';
import { WhatsappCreateWebhookService } from './whatsapp-create-webhook.service';
import { WhatsappCreateWebhookCommand, whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappCreateWebhookCommandHandler', () =>
{
    let commandHandler: WhatsappCreateWebhookCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WhatsappCreateWebhookCommandHandler,
                {
                    provide : WhatsappCreateWebhookService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<WhatsappCreateWebhookCommandHandler>(WhatsappCreateWebhookCommandHandler);
    });

    describe('main', () =>
    {
        test('CreateWebhookCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the values objects and pass them as parameters to the WhatsappCreateWebhookService', async () =>
        {
            expect(await commandHandler.execute(
                new WhatsappCreateWebhookCommand(
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
