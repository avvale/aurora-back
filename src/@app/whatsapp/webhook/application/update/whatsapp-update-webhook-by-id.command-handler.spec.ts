import { whatsappMockWebhookData, WhatsappUpdateWebhookByIdCommand } from '@app/whatsapp/webhook';
import { WhatsappUpdateWebhookByIdCommandHandler } from '@app/whatsapp/webhook/application/update/whatsapp-update-webhook-by-id.command-handler';
import { WhatsappUpdateWebhookByIdService } from '@app/whatsapp/webhook/application/update/whatsapp-update-webhook-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappUpdateWebhookByIdCommandHandler', () =>
{
    let commandHandler: WhatsappUpdateWebhookByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WhatsappUpdateWebhookByIdCommandHandler,
                {
                    provide : WhatsappUpdateWebhookByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<WhatsappUpdateWebhookByIdCommandHandler>(WhatsappUpdateWebhookByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateWebhookByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an webhook created', async () =>
        {
            expect(await commandHandler.execute(
                new WhatsappUpdateWebhookByIdCommand(
                    {
                        id: whatsappMockWebhookData[0].id,
                        payload: whatsappMockWebhookData[0].payload,
                    },
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
