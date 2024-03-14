/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappUpdateWebhooksInput } from '@api/graphql';
import { WhatsappUpdateWebhooksHandler } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappUpdateWebhooksHandler', () =>
{
    let handler: WhatsappUpdateWebhooksHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                WhatsappUpdateWebhooksHandler,
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

        handler = module.get<WhatsappUpdateWebhooksHandler>(WhatsappUpdateWebhooksHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('WhatsappUpdateWebhooksHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('WhatsappUpdateWebhooksHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a webhooks updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData[0])));
            expect(
                await handler.main(
                    <WhatsappUpdateWebhooksInput>whatsappMockWebhookData[0],
                    {},
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(whatsappMockWebhookData[0]);
        });
    });
});
