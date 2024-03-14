/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappPaginateWebhooksHandler, WhatsappPaginateWebhooksResolver } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappPaginateWebhooksResolver', () =>
{
    let resolver: WhatsappPaginateWebhooksResolver;
    let handler: WhatsappPaginateWebhooksHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                WhatsappPaginateWebhooksResolver,
                {
                    provide : WhatsappPaginateWebhooksHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<WhatsappPaginateWebhooksResolver>(WhatsappPaginateWebhooksResolver);
        handler = module.get<WhatsappPaginateWebhooksHandler>(WhatsappPaginateWebhooksHandler);
    });

    test('WhatsappPaginateWebhooksResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('WhatsappPaginateWebhooksResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a whatsappMockWebhookData', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : whatsappMockWebhookData,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : whatsappMockWebhookData,
            });
        });
    });
});
