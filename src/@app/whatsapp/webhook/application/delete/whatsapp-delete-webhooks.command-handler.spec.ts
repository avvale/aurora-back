import { WhatsappDeleteWebhooksCommand } from '@app/whatsapp/webhook';
import { WhatsappDeleteWebhooksCommandHandler } from '@app/whatsapp/webhook/application/delete/whatsapp-delete-webhooks.command-handler';
import { WhatsappDeleteWebhooksService } from '@app/whatsapp/webhook/application/delete/whatsapp-delete-webhooks.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappDeleteWebhooksCommandHandler', () =>
{
    let commandHandler: WhatsappDeleteWebhooksCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WhatsappDeleteWebhooksCommandHandler,
                {
                    provide : WhatsappDeleteWebhooksService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<WhatsappDeleteWebhooksCommandHandler>(WhatsappDeleteWebhooksCommandHandler);
    });

    describe('main', () =>
    {
        test('WhatsappDeleteWebhooksCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return void', async () =>
        {
            expect(await commandHandler.execute(
                new WhatsappDeleteWebhooksCommand(),
            )).toBe(undefined);
        });
    });
});
