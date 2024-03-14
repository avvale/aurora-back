/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappIWebhookRepository, whatsappMockWebhookData, WhatsappMockWebhookRepository } from '@app/whatsapp/webhook';
import { WhatsappUpdateWebhookByIdService } from '@app/whatsapp/webhook/application/update/whatsapp-update-webhook-by-id.service';
import {
    WhatsappWebhookId,
    WhatsappWebhookPayload,
} from '@app/whatsapp/webhook/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappUpdateWebhookByIdService', () =>
{
    let service: WhatsappUpdateWebhookByIdService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                WhatsappUpdateWebhookByIdService,
                WhatsappMockWebhookRepository,
                {
                    provide : WhatsappIWebhookRepository,
                    useValue: {
                        updateById: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(WhatsappUpdateWebhookByIdService);
    });

    describe('main', () =>
    {
        test('WhatsappUpdateWebhookByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a webhook and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new WhatsappWebhookId(whatsappMockWebhookData[0].id),
                        payload: new WhatsappWebhookPayload(whatsappMockWebhookData[0].payload),
                    },
                    {},
                ),
            ).toBe(undefined);
        });
    });
});
