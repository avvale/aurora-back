import { WhatsappUpsertWebhookController, WhatsappUpsertWebhookHandler } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappUpsertWebhookController', () =>
{
    let controller: WhatsappUpsertWebhookController;
    let handler: WhatsappUpsertWebhookHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                WhatsappUpsertWebhookController,
            ],
            providers: [
                {
                    provide : WhatsappUpsertWebhookHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<WhatsappUpsertWebhookController>(WhatsappUpsertWebhookController);
        handler = module.get<WhatsappUpsertWebhookHandler>(WhatsappUpsertWebhookHandler);
    });

    describe('main', () =>
    {
        test('WhatsappUpsertWebhookController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an webhook upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData[0])));
            expect(await controller.main(whatsappMockWebhookData[0])).toBe(whatsappMockWebhookData[0]);
        });
    });
});
