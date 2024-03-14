import { WhatsappGetWebhooksQuery, WhatsappIWebhookRepository, WhatsappMockWebhookRepository, WhatsappWebhookMapper } from '@app/whatsapp/webhook';
import { WhatsappGetWebhooksQueryHandler } from '@app/whatsapp/webhook/application/get/whatsapp-get-webhooks.query-handler';
import { WhatsappGetWebhooksService } from '@app/whatsapp/webhook/application/get/whatsapp-get-webhooks.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetWebhooksQueryHandler', () =>
{
    let queryHandler: WhatsappGetWebhooksQueryHandler;
    let service: WhatsappGetWebhooksService;
    let repository: WhatsappMockWebhookRepository;
    let mapper: WhatsappWebhookMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WhatsappGetWebhooksQueryHandler,
                {
                    provide : WhatsappIWebhookRepository,
                    useClass: WhatsappMockWebhookRepository,
                },
                {
                    provide : WhatsappGetWebhooksService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<WhatsappGetWebhooksQueryHandler>(WhatsappGetWebhooksQueryHandler);
        service = module.get<WhatsappGetWebhooksService>(WhatsappGetWebhooksService);
        repository = <WhatsappMockWebhookRepository>module.get<WhatsappIWebhookRepository>(WhatsappIWebhookRepository);
        mapper = new WhatsappWebhookMapper();
    });

    describe('main', () =>
    {
        test('WhatsappGetWebhooksQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an webhooks founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new WhatsappGetWebhooksQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
