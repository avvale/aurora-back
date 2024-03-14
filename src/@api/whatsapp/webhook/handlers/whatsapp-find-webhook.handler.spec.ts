/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappFindWebhookHandler } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappFindWebhookHandler', () =>
{
    let handler: WhatsappFindWebhookHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                WhatsappFindWebhookHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<WhatsappFindWebhookHandler>(WhatsappFindWebhookHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('WhatsappFindWebhookHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('WhatsappFindWebhookHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a webhook', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData[0])));
            expect(
                await handler.main(
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(whatsappMockWebhookData[0]);
        });
    });
});
