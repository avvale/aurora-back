import { WhatsappPaginateWebhooksController, WhatsappPaginateWebhooksHandler } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappPaginateWebhooksController', () =>
{
    let controller: WhatsappPaginateWebhooksController;
    let handler: WhatsappPaginateWebhooksHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                WhatsappPaginateWebhooksController,
            ],
            providers: [
                {
                    provide : WhatsappPaginateWebhooksHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<WhatsappPaginateWebhooksController>(WhatsappPaginateWebhooksController);
        handler = module.get<WhatsappPaginateWebhooksHandler>(WhatsappPaginateWebhooksHandler);
    });

    describe('main', () =>
    {
        test('WhatsappPaginateWebhooksController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a whatsappMockWebhookData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : whatsappMockWebhookData,
            })));
            expect(await controller.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : whatsappMockWebhookData,
            });
        });
    });
});
