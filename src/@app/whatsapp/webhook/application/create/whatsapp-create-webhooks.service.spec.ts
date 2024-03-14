/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappIWebhookRepository, WhatsappMockWebhookRepository } from '@app/whatsapp/webhook';
import { WhatsappCreateWebhooksService } from '@app/whatsapp/webhook/application/create/whatsapp-create-webhooks.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappCreateWebhooksService', () =>
{
    let service: WhatsappCreateWebhooksService;
    let mockRepository: WhatsappMockWebhookRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                WhatsappCreateWebhooksService,
                WhatsappMockWebhookRepository,
                {
                    provide : WhatsappIWebhookRepository,
                    useValue: {
                        insert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(WhatsappCreateWebhooksService);
        mockRepository = module.get(WhatsappMockWebhookRepository);
    });

    describe('main', () =>
    {
        test('CreateWebhooksService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create webhooks and emit event', async () =>
        {
            expect(
                await service.main(
                    mockRepository.collectionSource,
                ),
            )
                .toBe(undefined);
        });
    });
});
