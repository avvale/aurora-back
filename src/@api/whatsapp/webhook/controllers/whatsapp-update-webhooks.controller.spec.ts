import { WhatsappUpdateWebhooksController, WhatsappUpdateWebhooksHandler } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappUpdateWebhooksController', () =>
{
    let controller: WhatsappUpdateWebhooksController;
    let handler: WhatsappUpdateWebhooksHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                WhatsappUpdateWebhooksController,
            ],
            providers: [
                {
                    provide : WhatsappUpdateWebhooksHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<WhatsappUpdateWebhooksController>(WhatsappUpdateWebhooksController);
        handler = module.get<WhatsappUpdateWebhooksHandler>(WhatsappUpdateWebhooksHandler);
    });

    describe('main', () =>
    {
        test('WhatsappUpdateWebhooksController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a webhooks updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData[0])));
            expect(await controller.main(whatsappMockWebhookData[0])).toBe(whatsappMockWebhookData[0]);
        });
    });
});
