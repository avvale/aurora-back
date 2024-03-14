import { WhatsappCountWebhookQuery, WhatsappIWebhookRepository, WhatsappMockWebhookRepository } from '@app/whatsapp/webhook';
import { WhatsappCountWebhookQueryHandler } from '@app/whatsapp/webhook/application/count/whatsapp-count-webhook.query-handler';
import { WhatsappCountWebhookService } from '@app/whatsapp/webhook/application/count/whatsapp-count-webhook.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappCountWebhookQueryHandler', () =>
{
    let queryHandler: WhatsappCountWebhookQueryHandler;
    let service: WhatsappCountWebhookService;
    let repository: WhatsappMockWebhookRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WhatsappCountWebhookQueryHandler,
                {
                    provide : WhatsappIWebhookRepository,
                    useClass: WhatsappMockWebhookRepository,
                },
                {
                    provide : WhatsappCountWebhookService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<WhatsappCountWebhookQueryHandler>(WhatsappCountWebhookQueryHandler);
        service = module.get<WhatsappCountWebhookService>(WhatsappCountWebhookService);
        repository = <WhatsappMockWebhookRepository>module.get<WhatsappIWebhookRepository>(WhatsappIWebhookRepository);
    });

    describe('main', () =>
    {
        test('WhatsappCountWebhookQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should count total inboxes', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource.length)));
            expect(await queryHandler.execute(
                new WhatsappCountWebhookQuery(),
            )).toStrictEqual(repository.collectionSource.length);
        });
    });
});
