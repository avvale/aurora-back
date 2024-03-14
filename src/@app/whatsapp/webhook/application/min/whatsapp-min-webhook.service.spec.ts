import { WhatsappIWebhookRepository, WhatsappMockWebhookRepository } from '@app/whatsapp/webhook';
import { WhatsappMinWebhookService } from '@app/whatsapp/webhook/application/min/whatsapp-min-webhook.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappMinWebhookService', () =>
{
    let service: WhatsappMinWebhookService;
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
                WhatsappMinWebhookService,
                WhatsappMockWebhookRepository,
                {
                    provide : WhatsappIWebhookRepository,
                    useValue: {
                        min: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(WhatsappMinWebhookService);
        repository = module.get(WhatsappIWebhookRepository);
        mockRepository = module.get(WhatsappMockWebhookRepository);
    });

    describe('main', () =>
    {
        test('WhatsappMinWebhookService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should min inboxes', async () =>
        {
            jest.spyOn(repository, 'min').mockImplementation((column: string) => new Promise(resolve => resolve(mockRepository.min(column))));
            expect(await service.main('id')).toBe(mockRepository.min('id'));
        });
    });
});
