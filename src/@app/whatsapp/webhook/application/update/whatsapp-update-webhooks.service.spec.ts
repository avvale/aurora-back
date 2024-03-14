/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappIWebhookRepository, whatsappMockWebhookData, WhatsappMockWebhookRepository } from '@app/whatsapp/webhook';
import { WhatsappUpdateWebhooksService } from '@app/whatsapp/webhook/application/update/whatsapp-update-webhooks.service';
import {
    WhatsappWebhookId,
    WhatsappWebhookPayload,
} from '@app/whatsapp/webhook/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappUpdateWebhooksService', () =>
{
    let service: WhatsappUpdateWebhooksService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                WhatsappUpdateWebhooksService,
                WhatsappMockWebhookRepository,
                {
                    provide : WhatsappIWebhookRepository,
                    useValue: {
                        update: () => { /**/ },
                        get   : () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(WhatsappUpdateWebhooksService);
    });

    describe('main', () =>
    {
        test('UpdateWebhooksService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a webhooks and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new WhatsappWebhookId(whatsappMockWebhookData[0].id),
                        payload: new WhatsappWebhookPayload(whatsappMockWebhookData[0].payload),
                    },
                    {},
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
