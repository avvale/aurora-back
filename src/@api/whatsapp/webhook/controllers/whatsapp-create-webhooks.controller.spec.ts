import { WhatsappCreateWebhooksController, WhatsappCreateWebhooksHandler } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappCreateWebhooksController', () =>
{
    let controller: WhatsappCreateWebhooksController;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [
                WhatsappCreateWebhooksController,
            ],
            providers: [
                {
                    provide : WhatsappCreateWebhooksHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<WhatsappCreateWebhooksController>(WhatsappCreateWebhooksController);
    });

    describe('main', () =>
    {
        test('WhatsappCreateWebhooksController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an whatsappMockWebhookData created', async () =>
        {
            expect(
                await controller.main(
                    whatsappMockWebhookData,
                ),
            )
                .toBe(undefined);
        });
    });
});
