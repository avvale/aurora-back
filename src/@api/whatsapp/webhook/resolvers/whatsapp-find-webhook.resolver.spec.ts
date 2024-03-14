/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappFindWebhookHandler, WhatsappFindWebhookResolver } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappFindWebhookResolver', () =>
{
    let resolver: WhatsappFindWebhookResolver;
    let handler: WhatsappFindWebhookHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                WhatsappFindWebhookResolver,
                {
                    provide : WhatsappFindWebhookHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<WhatsappFindWebhookResolver>(WhatsappFindWebhookResolver);
        handler = module.get<WhatsappFindWebhookHandler>(WhatsappFindWebhookHandler);
    });

    test('WhatsappFindWebhookResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('WhatsappFindWebhookResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a webhook', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData[0])));
            expect(await resolver.main()).toBe(whatsappMockWebhookData[0]);
        });
    });
});
