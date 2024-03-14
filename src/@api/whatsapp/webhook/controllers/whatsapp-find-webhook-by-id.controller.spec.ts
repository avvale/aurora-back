import { WhatsappFindWebhookByIdController, WhatsappFindWebhookByIdHandler } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappFindWebhookByIdController', () =>
{
    let controller: WhatsappFindWebhookByIdController;
    let handler: WhatsappFindWebhookByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                WhatsappFindWebhookByIdController,
            ],
            providers: [
                {
                    provide : WhatsappFindWebhookByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<WhatsappFindWebhookByIdController>(WhatsappFindWebhookByIdController);
        handler = module.get<WhatsappFindWebhookByIdHandler>(WhatsappFindWebhookByIdHandler);
    });

    describe('main', () =>
    {
        test('WhatsappFindWebhookByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an webhook by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData[0])));
            expect(await controller.main(whatsappMockWebhookData[0].id)).toBe(whatsappMockWebhookData[0]);
        });
    });
});
