/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappFindWebhookByIdHandler, WhatsappFindWebhookByIdResolver } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappFindWebhookByIdResolver', () =>
{
    let resolver: WhatsappFindWebhookByIdResolver;
    let handler: WhatsappFindWebhookByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                WhatsappFindWebhookByIdResolver,
                {
                    provide : WhatsappFindWebhookByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<WhatsappFindWebhookByIdResolver>(WhatsappFindWebhookByIdResolver);
        handler = module.get<WhatsappFindWebhookByIdHandler>(WhatsappFindWebhookByIdHandler);
    });

    test('WhatsappFindWebhookByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('WhatsappFindWebhookByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an webhook by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData[0])));
            expect(await resolver.main(whatsappMockWebhookData[0].id)).toBe(whatsappMockWebhookData[0]);
        });
    });
});
