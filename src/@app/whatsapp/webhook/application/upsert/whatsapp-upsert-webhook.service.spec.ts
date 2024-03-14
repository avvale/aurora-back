/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappIWebhookRepository, whatsappMockWebhookData, WhatsappMockWebhookRepository } from '@app/whatsapp/webhook';
import { WhatsappUpsertWebhookService } from '@app/whatsapp/webhook/application/upsert/whatsapp-upsert-webhook.service';
import {
    WhatsappWebhookId,
    WhatsappWebhookPayload,
} from '@app/whatsapp/webhook/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappUpsertWebhookService', () =>

{
    let service: WhatsappUpsertWebhookService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                WhatsappUpsertWebhookService,
                WhatsappMockWebhookRepository,
                {
                    provide : WhatsappIWebhookRepository,
                    useValue: {
                        upsert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(WhatsappUpsertWebhookService);
    });

    describe('main', () =>
    {
        test('WhatsappUpsertWebhookService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should upsert a webhook and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new WhatsappWebhookId(whatsappMockWebhookData[0].id),
                        payload: new WhatsappWebhookPayload(whatsappMockWebhookData[0].payload),
                    },
                ),
            )
                .toBe(undefined);
        });
    });
});
