import { WhatsappCreateWebhookInput } from '@api/graphql';
import { WhatsappCreateWebhooksHandler, WhatsappCreateWebhooksResolver } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappCreateWebhooksResolver', () =>
{
    let resolver: WhatsappCreateWebhooksResolver;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WhatsappCreateWebhooksResolver,
                {
                    provide : WhatsappCreateWebhooksHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<WhatsappCreateWebhooksResolver>(WhatsappCreateWebhooksResolver);
    });

    test('WhatsappCreateWebhooksResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('WhatsappCreateWebhooksResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an webhooks created', async () =>
        {
            expect(await resolver.main(<WhatsappCreateWebhookInput[]>whatsappMockWebhookData)).toBe(undefined);
        });
    });
});
