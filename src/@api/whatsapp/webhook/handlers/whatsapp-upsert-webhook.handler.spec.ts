/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappUpsertWebhookHandler } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappUpsertWebhookHandler', () =>
{
    let handler: WhatsappUpsertWebhookHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                WhatsappUpsertWebhookHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<WhatsappUpsertWebhookHandler>(WhatsappUpsertWebhookHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('WhatsappUpsertWebhookHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an webhook upserted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData[0])));
            expect(
                await handler.main(
                    whatsappMockWebhookData[0],
                    'Europe/Madrid',
                ))
                .toBe(whatsappMockWebhookData[0]);
        });
    });
});
