import { WhatsappIWebhookRepository, WhatsappMockWebhookRepository, WhatsappSumWebhookQuery } from '@app/whatsapp/webhook';
import { WhatsappSumWebhookQueryHandler } from '@app/whatsapp/webhook/application/sum/whatsapp-sum-webhook.query-handler';
import { WhatsappSumWebhookService } from '@app/whatsapp/webhook/application/sum/whatsapp-sum-webhook.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappSumWebhookQueryHandler', () =>
{
    let queryHandler: WhatsappSumWebhookQueryHandler;
    let service: WhatsappSumWebhookService;
    let repository: WhatsappMockWebhookRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WhatsappSumWebhookQueryHandler,
                {
                    provide : WhatsappIWebhookRepository,
                    useClass: WhatsappMockWebhookRepository,
                },
                {
                    provide : WhatsappSumWebhookService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<WhatsappSumWebhookQueryHandler>(WhatsappSumWebhookQueryHandler);
        service = module.get<WhatsappSumWebhookService>(WhatsappSumWebhookService);
        repository = <WhatsappMockWebhookRepository>module.get<WhatsappIWebhookRepository>(WhatsappIWebhookRepository);
    });

    describe('main', () =>
    {
        test('WhatsappSumWebhookQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should sum inboxes', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation((column: string) => new Promise(resolve => resolve(repository.sum(column))));
            expect(await queryHandler.execute(
                new WhatsappSumWebhookQuery('id'),
            )).toStrictEqual(repository.sum('id'));
        });
    });
});
