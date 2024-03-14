import { WhatsappFindWebhookByIdQuery, WhatsappIWebhookRepository, whatsappMockWebhookData, WhatsappMockWebhookRepository, WhatsappWebhookMapper } from '@app/whatsapp/webhook';
import { WhatsappFindWebhookByIdQueryHandler } from '@app/whatsapp/webhook/application/find/whatsapp-find-webhook-by-id.query-handler';
import { WhatsappFindWebhookByIdService } from '@app/whatsapp/webhook/application/find/whatsapp-find-webhook-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappFindWebhookByIdQueryHandler', () =>
{
    let queryHandler: WhatsappFindWebhookByIdQueryHandler;
    let service: WhatsappFindWebhookByIdService;
    let repository: WhatsappMockWebhookRepository;
    let mapper: WhatsappWebhookMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WhatsappFindWebhookByIdQueryHandler,
                {
                    provide : WhatsappIWebhookRepository,
                    useClass: WhatsappMockWebhookRepository,
                },
                {
                    provide : WhatsappFindWebhookByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<WhatsappFindWebhookByIdQueryHandler>(WhatsappFindWebhookByIdQueryHandler);
        service = module.get<WhatsappFindWebhookByIdService>(WhatsappFindWebhookByIdService);
        repository = <WhatsappMockWebhookRepository>module.get<WhatsappIWebhookRepository>(WhatsappIWebhookRepository);
        mapper = new WhatsappWebhookMapper();
    });

    describe('main', () =>
    {
        test('FindWebhookByIdQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an webhook founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new WhatsappFindWebhookByIdQuery(
                    whatsappMockWebhookData[0].id,

                ),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
