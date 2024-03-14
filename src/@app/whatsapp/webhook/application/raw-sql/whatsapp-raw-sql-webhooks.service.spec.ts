import { WhatsappIWebhookRepository, WhatsappMockWebhookRepository } from '@app/whatsapp/webhook';
import { WhatsappRawSQLWebhooksService } from '@app/whatsapp/webhook/application/raw-sql/whatsapp-raw-sql-webhooks.service';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappRawSQLWebhooksService ', () =>
{
    let service: WhatsappRawSQLWebhooksService ;
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
                WhatsappRawSQLWebhooksService ,
                WhatsappMockWebhookRepository,
                {
                    provide : WhatsappIWebhookRepository,
                    useValue: {
                        rawSQL: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service         = module.get(WhatsappRawSQLWebhooksService );
        repository      = module.get(WhatsappIWebhookRepository);
        mockRepository  = module.get(WhatsappMockWebhookRepository);
    });

    describe('main', () =>
    {
        test('RawSQLWebhooksService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get webhooks', async () =>
        {
            jest.spyOn(repository, 'rawSQL').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});
