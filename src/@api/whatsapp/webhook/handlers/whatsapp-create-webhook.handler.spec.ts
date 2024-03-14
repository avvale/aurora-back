/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappCreateWebhookHandler } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappCreateWebhookHandler', () =>
{
    let handler: WhatsappCreateWebhookHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                WhatsappCreateWebhookHandler,
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

        handler = module.get<WhatsappCreateWebhookHandler>(WhatsappCreateWebhookHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('WhatsappCreateWebhookHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an webhook created', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData[0])));
            expect(
                await handler.main(
                    whatsappMockWebhookData[0],
                    'Europe/Madrid',
                ),
            )
                .toBe(whatsappMockWebhookData[0]);
        });
    });
});
