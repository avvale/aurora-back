import { WhatsappFindWebhookController, WhatsappFindWebhookHandler } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappFindWebhookController', () =>
{
    let controller: WhatsappFindWebhookController;
    let handler: WhatsappFindWebhookHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                WhatsappFindWebhookController,
            ],
            providers: [
                {
                    provide : WhatsappFindWebhookHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<WhatsappFindWebhookController>(WhatsappFindWebhookController);
        handler = module.get<WhatsappFindWebhookHandler>(WhatsappFindWebhookHandler);
    });

    describe('main', () =>
    {
        test('WhatsappFindWebhookController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a webhook', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData[0])));
            expect(await controller.main()).toBe(whatsappMockWebhookData[0]);
        });
    });
});
