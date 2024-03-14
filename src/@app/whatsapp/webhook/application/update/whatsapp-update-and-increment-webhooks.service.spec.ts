/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappIWebhookRepository, whatsappMockWebhookData, WhatsappMockWebhookRepository } from '@app/whatsapp/webhook';
import { WhatsappUpdateAndIncrementWebhooksService } from '@app/whatsapp/webhook/application/update/whatsapp-update-and-increment-webhooks.service';
import {
    WhatsappWebhookId,
    WhatsappWebhookPayload,
} from '@app/whatsapp/webhook/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappUpdateAndIncrementWebhooksService', () =>
{
    let service: WhatsappUpdateAndIncrementWebhooksService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                WhatsappUpdateAndIncrementWebhooksService,
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

        service = module.get(WhatsappUpdateAndIncrementWebhooksService);
    });

    describe('main', () =>
    {
        test('UpdateAndIncrementWebhooksService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a webhooks and emit event', async () =>
        {
            /* eslint-disable key-spacing */
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
            /* eslint-enable key-spacing */
        });
    });
});
