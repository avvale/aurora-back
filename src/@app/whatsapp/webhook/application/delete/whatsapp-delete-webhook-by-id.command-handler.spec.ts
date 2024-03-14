import { WhatsappDeleteWebhookByIdCommand, whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { WhatsappDeleteWebhookByIdCommandHandler } from '@app/whatsapp/webhook/application/delete/whatsapp-delete-webhook-by-id.command-handler';
import { WhatsappDeleteWebhookByIdService } from '@app/whatsapp/webhook/application/delete/whatsapp-delete-webhook-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappDeleteWebhookByIdCommandHandler', () =>
{
    let commandHandler: WhatsappDeleteWebhookByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WhatsappDeleteWebhookByIdCommandHandler,
                {
                    provide : WhatsappDeleteWebhookByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<WhatsappDeleteWebhookByIdCommandHandler>(WhatsappDeleteWebhookByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('WhatsappDeleteWebhookByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the value object id and pass them as parameters to the WhatsappDeleteWebhookByIdService', async () =>
        {
            expect(await commandHandler.execute(
                new WhatsappDeleteWebhookByIdCommand(
                    whatsappMockWebhookData[0].id,
                ),
            )).toBe(undefined);
        });
    });
});
