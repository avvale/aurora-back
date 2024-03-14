import { WhatsappIWebhookRepository, WhatsappMaxWebhookQuery, WhatsappMockWebhookRepository } from '@app/whatsapp/webhook';
import { WhatsappMaxWebhookQueryHandler } from '@app/whatsapp/webhook/application/max/whatsapp-max-webhook.query-handler';
import { WhatsappMaxWebhookService } from '@app/whatsapp/webhook/application/max/whatsapp-max-webhook.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappMaxWebhookQueryHandler', () =>
{
    let queryHandler: WhatsappMaxWebhookQueryHandler;
    let service: WhatsappMaxWebhookService;
    let repository: WhatsappMockWebhookRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WhatsappMaxWebhookQueryHandler,
                {
                    provide : WhatsappIWebhookRepository,
                    useClass: WhatsappMockWebhookRepository,
                },
                {
                    provide : WhatsappMaxWebhookService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<WhatsappMaxWebhookQueryHandler>(WhatsappMaxWebhookQueryHandler);
        service = module.get<WhatsappMaxWebhookService>(WhatsappMaxWebhookService);
        repository = <WhatsappMockWebhookRepository>module.get<WhatsappIWebhookRepository>(WhatsappIWebhookRepository);
    });

    describe('main', () =>
    {
        test('WhatsappMaxWebhookQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should max inboxes', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation((column: string) => new Promise(resolve => resolve(repository.max(column))));
            expect(await queryHandler.execute(
                new WhatsappMaxWebhookQuery('id'),
            )).toStrictEqual(repository.max('id'));
        });
    });
});
