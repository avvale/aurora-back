import { WhatsappGetWebhooksController, WhatsappGetWebhooksHandler } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappGetWebhooksController', () =>
{
    let controller: WhatsappGetWebhooksController;
    let handler: WhatsappGetWebhooksHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                WhatsappGetWebhooksController,
            ],
            providers: [
                {
                    provide : WhatsappGetWebhooksHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<WhatsappGetWebhooksController>(WhatsappGetWebhooksController);
        handler = module.get<WhatsappGetWebhooksHandler>(WhatsappGetWebhooksHandler);
    });

    describe('main', () =>
    {
        test('WhatsappGetWebhooksController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a whatsappMockWebhookData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData)));
            expect(await controller.main()).toBe(whatsappMockWebhookData);
        });
    });
});
