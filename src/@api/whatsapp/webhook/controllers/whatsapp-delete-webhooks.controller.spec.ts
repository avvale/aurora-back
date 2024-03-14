import { WhatsappDeleteWebhooksController, WhatsappDeleteWebhooksHandler } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappDeleteWebhooksController', () =>
{
    let controller: WhatsappDeleteWebhooksController;
    let handler: WhatsappDeleteWebhooksHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                WhatsappDeleteWebhooksController,
            ],
            providers: [
                {
                    provide : WhatsappDeleteWebhooksHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<WhatsappDeleteWebhooksController>(WhatsappDeleteWebhooksController);
        handler = module.get<WhatsappDeleteWebhooksHandler>(WhatsappDeleteWebhooksHandler);
    });

    describe('main', () =>
    {
        test('WhatsappDeleteWebhooksController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an whatsappMockWebhookData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData)));
            expect(await controller.main()).toBe(whatsappMockWebhookData);
        });
    });
});
