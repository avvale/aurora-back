import { WhatsappIWebhookRepository, WhatsappMockWebhookRepository } from '@app/whatsapp/webhook';
import { WhatsappMaxWebhookService } from '@app/whatsapp/webhook/application/max/whatsapp-max-webhook.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappMaxWebhookService', () =>
{
    let service: WhatsappMaxWebhookService;
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
                WhatsappMaxWebhookService,
                WhatsappMockWebhookRepository,
                {
                    provide : WhatsappIWebhookRepository,
                    useValue: {
                        max: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(WhatsappMaxWebhookService);
        repository = module.get(WhatsappIWebhookRepository);
        mockRepository = module.get(WhatsappMockWebhookRepository);
    });

    describe('main', () =>
    {
        test('WhatsappMaxWebhookService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should max inboxes', async () =>
        {
            jest.spyOn(repository, 'max').mockImplementation((column: string) => new Promise(resolve => resolve(mockRepository.max(column))));
            expect(await service.main('id')).toBe(mockRepository.max('id'));
        });
    });
});
