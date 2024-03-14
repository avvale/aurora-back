import { WhatsappUpdateWebhookByIdController, WhatsappUpdateWebhookByIdHandler } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappUpdateWebhookByIdController', () =>
{
    let controller: WhatsappUpdateWebhookByIdController;
    let handler: WhatsappUpdateWebhookByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                WhatsappUpdateWebhookByIdController,
            ],
            providers: [
                {
                    provide : WhatsappUpdateWebhookByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<WhatsappUpdateWebhookByIdController>(WhatsappUpdateWebhookByIdController);
        handler = module.get<WhatsappUpdateWebhookByIdHandler>(WhatsappUpdateWebhookByIdHandler);
    });

    describe('main', () =>
    {
        test('WhatsappUpdateWebhookByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a webhook updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData[0])));
            expect(await controller.main(whatsappMockWebhookData[0])).toBe(whatsappMockWebhookData[0]);
        });
    });
});
