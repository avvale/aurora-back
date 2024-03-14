import { WhatsappIWebhookRepository, WhatsappMockWebhookRepository } from '@app/whatsapp/webhook';
import { WhatsappGetWebhooksService } from '@app/whatsapp/webhook/application/get/whatsapp-get-webhooks.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappGetWebhooksService', () =>
{
    let service: WhatsappGetWebhooksService;
    let repository: WhatsappIWebhookRepository;
    let mockRepository: WhatsappMockWebhookRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                WhatsappGetWebhooksService,
                WhatsappMockWebhookRepository,
                {
                    provide : WhatsappIWebhookRepository,
                    useValue: {
                        get: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(WhatsappGetWebhooksService);
        repository = module.get(WhatsappIWebhookRepository);
        mockRepository = module.get(WhatsappMockWebhookRepository);
    });

    describe('main', () =>
    {
        test('GetWebhooksService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get webhooks', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
