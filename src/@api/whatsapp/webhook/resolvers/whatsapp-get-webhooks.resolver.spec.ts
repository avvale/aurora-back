/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappGetWebhooksHandler, WhatsappGetWebhooksResolver } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappGetWebhooksResolver', () =>
{
    let resolver: WhatsappGetWebhooksResolver;
    let handler: WhatsappGetWebhooksHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                WhatsappGetWebhooksResolver,
                {
                    provide : WhatsappGetWebhooksHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<WhatsappGetWebhooksResolver>(WhatsappGetWebhooksResolver);
        handler = module.get<WhatsappGetWebhooksHandler>(WhatsappGetWebhooksHandler);
    });

    test('WhatsappGetWebhooksResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('WhatsappGetWebhooksResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a whatsappMockWebhookData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData)));
            expect(await resolver.main()).toBe(whatsappMockWebhookData);
        });
    });
});
