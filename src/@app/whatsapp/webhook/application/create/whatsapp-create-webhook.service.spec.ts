/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappIWebhookRepository, whatsappMockWebhookData, WhatsappMockWebhookRepository } from '@app/whatsapp/webhook';
import { WhatsappCreateWebhookService } from '@app/whatsapp/webhook/application/create/whatsapp-create-webhook.service';
import {
    WhatsappWebhookId,
    WhatsappWebhookPayload,
} from '@app/whatsapp/webhook/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappCreateWebhookService', () =>

{
    let service: WhatsappCreateWebhookService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                WhatsappCreateWebhookService,
                WhatsappMockWebhookRepository,
                {
                    provide : WhatsappIWebhookRepository,
                    useValue: {
                        create: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(WhatsappCreateWebhookService);
    });

    describe('main', () =>
    {
        test('WhatsappCreateWebhookService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create a webhook and emit event', async () =>
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
