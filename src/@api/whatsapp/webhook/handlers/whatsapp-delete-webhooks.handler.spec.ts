/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappDeleteWebhooksHandler } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappDeleteWebhooksHandler', () =>
{
    let handler: WhatsappDeleteWebhooksHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                WhatsappDeleteWebhooksHandler,
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

        handler = module.get<WhatsappDeleteWebhooksHandler>(WhatsappDeleteWebhooksHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('WhatsappDeleteWebhooksHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('WhatsappDeleteWebhooksHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an whatsappMockWebhookData deleted', async () =>
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
