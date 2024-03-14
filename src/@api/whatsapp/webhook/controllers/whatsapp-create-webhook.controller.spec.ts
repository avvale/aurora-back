import { WhatsappCreateWebhookController, WhatsappCreateWebhookHandler } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappCreateWebhookController', () =>
{
    let controller: WhatsappCreateWebhookController;
    let handler: WhatsappCreateWebhookHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                WhatsappCreateWebhookController,
            ],
            providers: [
                {
                    provide : WhatsappCreateWebhookHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<WhatsappCreateWebhookController>(WhatsappCreateWebhookController);
        handler = module.get<WhatsappCreateWebhookHandler>(WhatsappCreateWebhookHandler);
    });

    describe('main', () =>
    {
        test('WhatsappCreateWebhookController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an webhook created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData[0])));
            expect(
                await controller.main(
                    whatsappMockWebhookData[0],
                ),
            )
                .toBe(whatsappMockWebhookData[0]);
        });
    });
});
