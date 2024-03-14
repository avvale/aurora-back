/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappIWebhookRepository, whatsappMockWebhookData, WhatsappMockWebhookRepository } from '@app/whatsapp/webhook';
import { WhatsappDeleteWebhookByIdService } from '@app/whatsapp/webhook/application/delete/whatsapp-delete-webhook-by-id.service';
import { WhatsappWebhookId } from '@app/whatsapp/webhook/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappDeleteWebhookByIdService', () =>
{
    let service: WhatsappDeleteWebhookByIdService;
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
                WhatsappDeleteWebhookByIdService,
                WhatsappMockWebhookRepository,
                {
                    provide : WhatsappIWebhookRepository,
                    useValue: {
                        deleteById: id => { /**/ },
                        findById  : id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(WhatsappDeleteWebhookByIdService);
        repository = module.get(WhatsappIWebhookRepository);
        mockRepository = module.get(WhatsappMockWebhookRepository);
    });

    describe('main', () =>
    {
        test('WhatsappDeleteWebhookByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete webhook and emit event', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(
                await service.main(
                    new WhatsappWebhookId(whatsappMockWebhookData[0].id),
                    {},
                ),
            )
                .toBe(undefined);
        });
    });
});
