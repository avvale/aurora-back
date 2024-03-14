import { whatsappMockWebhookData, WhatsappUpdateAndIncrementWebhooksCommand } from '@app/whatsapp/webhook';
import { WhatsappUpdateAndIncrementWebhooksCommandHandler } from '@app/whatsapp/webhook/application/update/whatsapp-update-and-increment-webhooks.command-handler';
import { WhatsappUpdateAndIncrementWebhooksService } from '@app/whatsapp/webhook/application/update/whatsapp-update-and-increment-webhooks.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappUpdateAndIncrementWebhooksCommandHandler', () =>
{
    let commandHandler: WhatsappUpdateAndIncrementWebhooksCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WhatsappUpdateAndIncrementWebhooksCommandHandler,
                {
                    provide : WhatsappUpdateAndIncrementWebhooksService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<WhatsappUpdateAndIncrementWebhooksCommandHandler>(WhatsappUpdateAndIncrementWebhooksCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateAndIncrementWebhooksCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an webhooks updated', async () =>
        {
            /* eslint-disable key-spacing */
            expect(await commandHandler.execute(
                new WhatsappUpdateAndIncrementWebhooksCommand(
                    {
                        id: whatsappMockWebhookData[0].id,
                        payload: whatsappMockWebhookData[0].payload,
                    },
                    {},
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
            /* eslint-enable key-spacing */
        });
    });
});
