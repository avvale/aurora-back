/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappDeleteWebhookByIdHandler, WhatsappDeleteWebhookByIdResolver } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappDeleteWebhookByIdResolver', () =>
{
    let resolver: WhatsappDeleteWebhookByIdResolver;
    let handler: WhatsappDeleteWebhookByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                WhatsappDeleteWebhookByIdResolver,
                {
                    provide : WhatsappDeleteWebhookByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<WhatsappDeleteWebhookByIdResolver>(WhatsappDeleteWebhookByIdResolver);
        handler = module.get<WhatsappDeleteWebhookByIdHandler>(WhatsappDeleteWebhookByIdHandler);
    });

    test('WhatsappDeleteWebhookByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('WhatsappDeleteWebhookByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an webhook deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData[0])));
            expect(await resolver.main(whatsappMockWebhookData[0].id)).toBe(whatsappMockWebhookData[0]);
        });
    });
});
