/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappGetWebhooksHandler } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappGetWebhooksHandler', () =>
{
    let handler: WhatsappGetWebhooksHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                WhatsappGetWebhooksHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<WhatsappGetWebhooksHandler>(WhatsappGetWebhooksHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('WhatsappGetWebhooksHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('WhatsappGetWebhooksHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a whatsappMockWebhookData', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData)));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(whatsappMockWebhookData);
        });
    });
});
