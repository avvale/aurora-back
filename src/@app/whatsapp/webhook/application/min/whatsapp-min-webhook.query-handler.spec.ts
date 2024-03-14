import { WhatsappIWebhookRepository, WhatsappMinWebhookQuery, WhatsappMockWebhookRepository } from '@app/whatsapp/webhook';
import { WhatsappMinWebhookQueryHandler } from '@app/whatsapp/webhook/application/min/whatsapp-min-webhook.query-handler';
import { WhatsappMinWebhookService } from '@app/whatsapp/webhook/application/min/whatsapp-min-webhook.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappMinWebhookQueryHandler', () =>
{
    let queryHandler: WhatsappMinWebhookQueryHandler;
    let service: WhatsappMinWebhookService;
    let repository: WhatsappMockWebhookRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WhatsappMinWebhookQueryHandler,
                {
                    provide : WhatsappIWebhookRepository,
                    useClass: WhatsappMockWebhookRepository,
                },
                {
                    provide : WhatsappMinWebhookService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<WhatsappMinWebhookQueryHandler>(WhatsappMinWebhookQueryHandler);
        service = module.get<WhatsappMinWebhookService>(WhatsappMinWebhookService);
        repository = <WhatsappMockWebhookRepository>module.get<WhatsappIWebhookRepository>(WhatsappIWebhookRepository);
    });

    describe('main', () =>
    {
        test('WhatsappMinWebhookQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should min inboxes', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation((column: string) => new Promise(resolve => resolve(repository.min(column))));
            expect(await queryHandler.execute(
                new WhatsappMinWebhookQuery('id'),
            )).toStrictEqual(repository.min('id'));
        });
    });
});
