import { WhatsappIWebhookRepository, whatsappMockWebhookData, WhatsappMockWebhookRepository } from '@app/whatsapp/webhook';
import { WhatsappFindWebhookByIdService } from '@app/whatsapp/webhook/application/find/whatsapp-find-webhook-by-id.service';
import { WhatsappWebhookId } from '@app/whatsapp/webhook/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappFindWebhookByIdService', () =>
{
    let service: WhatsappFindWebhookByIdService;
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
                WhatsappFindWebhookByIdService,
                WhatsappMockWebhookRepository,
                {
                    provide : WhatsappIWebhookRepository,
                    useValue: {
                        findById: id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(WhatsappFindWebhookByIdService);
        repository = module.get(WhatsappIWebhookRepository);
        mockRepository = module.get(WhatsappMockWebhookRepository);
    });

    describe('main', () =>
    {
        test('FindWebhookByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find webhook by id', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main(
                new WhatsappWebhookId(whatsappMockWebhookData[0].id),
            )).toBe(mockRepository.collectionSource[0]);
        });
    });
});
