/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappPaginateWebhooksHandler } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappPaginateWebhooksHandler', () =>
{
    let handler: WhatsappPaginateWebhooksHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                WhatsappPaginateWebhooksHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<WhatsappPaginateWebhooksHandler>(WhatsappPaginateWebhooksHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('WhatsappPaginateWebhooksHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('WhatsappPaginateWebhooksHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a webhooks', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: whatsappMockWebhookData.length,
                count: whatsappMockWebhookData.length,
                rows : whatsappMockWebhookData,
            })));
            expect(
                await handler.main(
                    {},
                    {},
                ),
            )
                .toEqual({
                    total: whatsappMockWebhookData.length,
                    count: whatsappMockWebhookData.length,
                    rows : whatsappMockWebhookData,
                });
        });
    });
});
