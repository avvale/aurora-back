/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappUpdateWebhookByIdInput } from '@api/graphql';
import { WhatsappUpsertWebhookHandler, WhatsappUpsertWebhookResolver } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappUpsertWebhookResolver', () =>
{
    let resolver: WhatsappUpsertWebhookResolver;
    let handler: WhatsappUpsertWebhookHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                WhatsappUpsertWebhookResolver,
                {
                    provide : WhatsappUpsertWebhookHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<WhatsappUpsertWebhookResolver>(WhatsappUpsertWebhookResolver);
        handler = module.get<WhatsappUpsertWebhookHandler>(WhatsappUpsertWebhookHandler);
    });

    test('WhatsappUpsertWebhookResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('WhatsappUpsertWebhookResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an webhook upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData[0])));
            expect(await resolver.main(<WhatsappUpdateWebhookByIdInput>whatsappMockWebhookData[0])).toBe(whatsappMockWebhookData[0]);
        });
    });
});
