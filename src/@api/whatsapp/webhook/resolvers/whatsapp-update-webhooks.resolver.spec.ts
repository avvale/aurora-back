/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappUpdateWebhooksInput } from '@api/graphql';
import { WhatsappUpdateWebhooksHandler, WhatsappUpdateWebhooksResolver } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappUpdateWebhooksResolver', () =>
{
    let resolver: WhatsappUpdateWebhooksResolver;
    let handler: WhatsappUpdateWebhooksHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                WhatsappUpdateWebhooksResolver,
                {
                    provide : WhatsappUpdateWebhooksHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<WhatsappUpdateWebhooksResolver>(WhatsappUpdateWebhooksResolver);
        handler = module.get<WhatsappUpdateWebhooksHandler>(WhatsappUpdateWebhooksHandler);
    });

    test('WhatsappUpdateWebhooksResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('WhatsappUpdateWebhooksResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a webhooks updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData[0])));
            expect(await resolver.main(<WhatsappUpdateWebhooksInput>whatsappMockWebhookData[0])).toBe(whatsappMockWebhookData[0]);
        });
    });
});
