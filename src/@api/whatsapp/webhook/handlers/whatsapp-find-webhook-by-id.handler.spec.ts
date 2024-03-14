/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappFindWebhookByIdHandler } from '@api/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';
import { IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappFindWebhookByIdHandler', () =>
{
    let handler: WhatsappFindWebhookByIdHandler;
    let queryBus: IQueryBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                WhatsappFindWebhookByIdHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<WhatsappFindWebhookByIdHandler>(WhatsappFindWebhookByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
    });

    test('WhatsappFindWebhookByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('WhatsappFindWebhookByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an webhook by id', async () =>
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
