/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappUpdateWebhookByIdInput } from '@api/graphql';
import { WhatsappUpdateWebhookByIdHandler } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappUpdateWebhookByIdHandler', () =>
{
    let handler: WhatsappUpdateWebhookByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                WhatsappUpdateWebhookByIdHandler,
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

        handler = module.get<WhatsappUpdateWebhookByIdHandler>(WhatsappUpdateWebhookByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('WhatsappUpdateWebhookByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('WhatsappUpdateWebhookByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a webhook updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData[0])));
            expect(
                await handler.main(
                    <WhatsappUpdateWebhookByIdInput>whatsappMockWebhookData[0],
                    {},
                    'Europe/Madrid',
                ))
                .toBe(whatsappMockWebhookData[0]);
        });
    });
});
