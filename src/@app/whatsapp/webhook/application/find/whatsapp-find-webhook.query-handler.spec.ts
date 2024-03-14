import { WhatsappFindWebhookQuery, WhatsappIWebhookRepository, WhatsappMockWebhookRepository, WhatsappWebhookMapper } from '@app/whatsapp/webhook';
import { WhatsappFindWebhookQueryHandler } from '@app/whatsapp/webhook/application/find/whatsapp-find-webhook.query-handler';
import { WhatsappFindWebhookService } from '@app/whatsapp/webhook/application/find/whatsapp-find-webhook.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappFindWebhookQueryHandler', () =>
{
    let queryHandler: WhatsappFindWebhookQueryHandler;
    let service: WhatsappFindWebhookService;
    let repository: WhatsappMockWebhookRepository;
    let mapper: WhatsappWebhookMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WhatsappFindWebhookQueryHandler,
                {
                    provide : WhatsappIWebhookRepository,
                    useClass: WhatsappMockWebhookRepository,
                },
                {
                    provide : WhatsappFindWebhookService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<WhatsappFindWebhookQueryHandler>(WhatsappFindWebhookQueryHandler);
        service = module.get<WhatsappFindWebhookService>(WhatsappFindWebhookService);
        repository = <WhatsappMockWebhookRepository>module.get<WhatsappIWebhookRepository>(WhatsappIWebhookRepository);
        mapper = new WhatsappWebhookMapper();
    });

    describe('main', () =>
    {
        test('WhatsappFindWebhookQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an webhook founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new WhatsappFindWebhookQuery(),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
