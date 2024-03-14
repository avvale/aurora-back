/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappUpdateWebhookByIdInput } from '@api/graphql';
import { WhatsappUpdateWebhookByIdHandler, WhatsappUpdateWebhookByIdResolver } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappUpdateWebhookByIdResolver', () =>
{
    let resolver: WhatsappUpdateWebhookByIdResolver;
    let handler: WhatsappUpdateWebhookByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                WhatsappUpdateWebhookByIdResolver,
                {
                    provide : WhatsappUpdateWebhookByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<WhatsappUpdateWebhookByIdResolver>(WhatsappUpdateWebhookByIdResolver);
        handler = module.get<WhatsappUpdateWebhookByIdHandler>(WhatsappUpdateWebhookByIdHandler);
    });

    test('WhatsappUpdateWebhookByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('WhatsappUpdateWebhookByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a webhook by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData[0])));
            expect(await resolver.main(<WhatsappUpdateWebhookByIdInput>whatsappMockWebhookData[0])).toBe(whatsappMockWebhookData[0]);
        });
    });
});
