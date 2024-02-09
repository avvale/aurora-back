import { NotificationIOutboxRepository, NotificationMockOutboxRepository, NotificationPaginateOutboxesQuery } from '@app/notification/outbox';
import { NotificationPaginateOutboxesQueryHandler } from '@app/notification/outbox/application/paginate/notification-paginate-outboxes.query-handler';
import { NotificationPaginateOutboxesService } from '@app/notification/outbox/application/paginate/notification-paginate-outboxes.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateOutboxesQueryHandler', () =>
{
    let queryHandler: NotificationPaginateOutboxesQueryHandler;
    let service: NotificationPaginateOutboxesService;
    let repository: NotificationMockOutboxRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationPaginateOutboxesQueryHandler,
                {
                    provide : NotificationIOutboxRepository,
                    useClass: NotificationMockOutboxRepository,
                },
                {
                    provide : NotificationPaginateOutboxesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationPaginateOutboxesQueryHandler>(NotificationPaginateOutboxesQueryHandler);
        service = module.get<NotificationPaginateOutboxesService>(NotificationPaginateOutboxesService);
        repository = <NotificationMockOutboxRepository>module.get<NotificationIOutboxRepository>(NotificationIOutboxRepository);
    });

    describe('main', () =>
    {
        test('NotificationPaginateOutboxesQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an outboxes paginated', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(
                {
                    count: 10,
                    total: 100,
                    rows : repository.collectionSource.slice(0,10),
                },
            )));
            expect(await queryHandler.execute(
                new NotificationPaginateOutboxesQuery(
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
