import { WhatsappIWebhookRepository, WhatsappMockWebhookRepository, WhatsappRawSQLWebhooksQuery, WhatsappWebhookMapper } from '@app/whatsapp/webhook';
import { WhatsappRawSQLWebhooksQueryHandler } from '@app/whatsapp/webhook/application/raw-sql/whatsapp-raw-sql-webhooks.query-handler';
import { WhatsappRawSQLWebhooksService } from '@app/whatsapp/webhook/application/raw-sql/whatsapp-raw-sql-webhooks.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('RawSQLWebhooksQueryHandler', () =>
{
    let queryHandler: WhatsappRawSQLWebhooksQueryHandler;
    let service: WhatsappRawSQLWebhooksService;
    let repository: WhatsappMockWebhookRepository;
    let mapper: WhatsappWebhookMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WhatsappRawSQLWebhooksQueryHandler,
                {
                    provide : WhatsappIWebhookRepository,
                    useClass: WhatsappMockWebhookRepository,
                },
                {
                    provide : WhatsappRawSQLWebhooksService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<WhatsappRawSQLWebhooksQueryHandler>(WhatsappRawSQLWebhooksQueryHandler);
        service = module.get<WhatsappRawSQLWebhooksService>(WhatsappRawSQLWebhooksService);
        repository = <WhatsappMockWebhookRepository>module.get<WhatsappIWebhookRepository>(WhatsappIWebhookRepository);
        mapper = new WhatsappWebhookMapper();
    });

    describe('main', () =>
    {
        test('WhatsappRawSQLWebhooksQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an webhooks founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new WhatsappRawSQLWebhooksQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
