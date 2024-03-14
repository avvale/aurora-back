/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappCreateWebhookInput } from '@api/graphql';
import { WhatsappCreateWebhookHandler, WhatsappCreateWebhookResolver } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappCreateWebhookResolver', () =>
{
    let resolver: WhatsappCreateWebhookResolver;
    let handler: WhatsappCreateWebhookHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                WhatsappCreateWebhookResolver,
                {
                    provide : WhatsappCreateWebhookHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<WhatsappCreateWebhookResolver>(WhatsappCreateWebhookResolver);
        handler = module.get<WhatsappCreateWebhookHandler>(WhatsappCreateWebhookHandler);
    });

    test('WhatsappCreateWebhookResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('WhatsappCreateWebhookResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an webhook created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData[0])));
            expect(await resolver.main(<WhatsappCreateWebhookInput>whatsappMockWebhookData[0])).toBe(whatsappMockWebhookData[0]);
        });
    });
});
