import { WhatsappIWebhookRepository, WhatsappMockWebhookRepository, WhatsappPaginateWebhooksQuery } from '@app/whatsapp/webhook';
import { WhatsappPaginateWebhooksQueryHandler } from '@app/whatsapp/webhook/application/paginate/whatsapp-paginate-webhooks.query-handler';
import { WhatsappPaginateWebhooksService } from '@app/whatsapp/webhook/application/paginate/whatsapp-paginate-webhooks.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('WhatsappPaginateWebhooksQueryHandler', () =>
{
    let queryHandler: WhatsappPaginateWebhooksQueryHandler;
    let service: WhatsappPaginateWebhooksService;
    let repository: WhatsappMockWebhookRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                WhatsappPaginateWebhooksQueryHandler,
                {
                    provide : WhatsappIWebhookRepository,
                    useClass: WhatsappMockWebhookRepository,
                },
                {
                    provide : WhatsappPaginateWebhooksService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<WhatsappPaginateWebhooksQueryHandler>(WhatsappPaginateWebhooksQueryHandler);
        service = module.get<WhatsappPaginateWebhooksService>(WhatsappPaginateWebhooksService);
        repository = <WhatsappMockWebhookRepository>module.get<WhatsappIWebhookRepository>(WhatsappIWebhookRepository);
    });

    describe('main', () =>
    {
        test('WhatsappPaginateWebhooksQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an webhooks paginated', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(
                {
                    count: 10,
                    total: 100,
                    rows : repository.collectionSource.slice(0,10),
                },
            )));
            expect(await queryHandler.execute(
                new WhatsappPaginateWebhooksQuery(
                    {
                        offset: 0,
                        limit : 10,
                    },
                ),
            )).toStrictEqual(
                new PaginationResponse(
                    100,
                    10,
                    repository.collectionSource.slice(0,10).map(item => item.toDTO()),
                ),
            );
        });
    });
});
