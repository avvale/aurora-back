/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappDeleteWebhooksHandler, WhatsappDeleteWebhooksResolver } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappDeleteWebhooksResolver', () =>
{
    let resolver: WhatsappDeleteWebhooksResolver;
    let handler: WhatsappDeleteWebhooksHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                WhatsappDeleteWebhooksResolver,
                {
                    provide : WhatsappDeleteWebhooksHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<WhatsappDeleteWebhooksResolver>(WhatsappDeleteWebhooksResolver);
        handler = module.get<WhatsappDeleteWebhooksHandler>(WhatsappDeleteWebhooksHandler);
    });

    test('WhatsappDeleteWebhooksResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('WhatsappDeleteWebhooksResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an whatsappMockWebhookData deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData)));
            expect(await resolver.main()).toBe(whatsappMockWebhookData);
        });
    });
});
