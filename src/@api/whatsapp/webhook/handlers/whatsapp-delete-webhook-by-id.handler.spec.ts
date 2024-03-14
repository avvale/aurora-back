/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappDeleteWebhookByIdHandler } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappDeleteWebhookByIdController', () =>
{
    let handler: WhatsappDeleteWebhookByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                WhatsappDeleteWebhookByIdHandler,
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

        handler = module.get<WhatsappDeleteWebhookByIdHandler>(WhatsappDeleteWebhookByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    describe('main', () =>
    {
        test('WhatsappDeleteWebhookByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an webhook deleted', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(whatsappMockWebhookData[0])));
            expect(
                await handler.main(
                    whatsappMockWebhookData[0].id,
                    {},
                    'Europe/Madrid',
                ),
            )
                .toBe(whatsappMockWebhookData[0]);
        });
    });
});
