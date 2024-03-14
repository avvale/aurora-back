/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappDeleteWebhookByIdController, WhatsappDeleteWebhookByIdHandler } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappDeleteWebhookByIdController', () =>
{
    let controller: WhatsappDeleteWebhookByIdController;
    let handler: WhatsappDeleteWebhookByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                WhatsappDeleteWebhookByIdController,
            ],
            providers: [
                {
                    provide : WhatsappDeleteWebhookByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<WhatsappDeleteWebhookByIdController>(WhatsappDeleteWebhookByIdController);
        handler = module.get<WhatsappDeleteWebhookByIdHandler>(WhatsappDeleteWebhookByIdHandler);
    });

    describe('main', () =>
    {
        test('WhatsappDeleteWebhookByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an webhook deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData[0])));
            expect(await controller.main(whatsappMockWebhookData[0].id)).toBe(whatsappMockWebhookData[0]);
        });
    });
});
