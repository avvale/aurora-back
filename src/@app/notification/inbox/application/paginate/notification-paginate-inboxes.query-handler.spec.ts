import { NotificationIInboxRepository, NotificationMockInboxRepository, NotificationPaginateInboxesQuery } from '@app/notification/inbox';
import { NotificationPaginateInboxesQueryHandler } from '@app/notification/inbox/application/paginate/notification-paginate-inboxes.query-handler';
import { NotificationPaginateInboxesService } from '@app/notification/inbox/application/paginate/notification-paginate-inboxes.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateInboxesQueryHandler', () =>
{
    let queryHandler: NotificationPaginateInboxesQueryHandler;
    let service: NotificationPaginateInboxesService;
    let repository: NotificationMockInboxRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationPaginateInboxesQueryHandler,
                {
                    provide : NotificationIInboxRepository,
                    useClass: NotificationMockInboxRepository,
                },
                {
                    provide : NotificationPaginateInboxesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationPaginateInboxesQueryHandler>(NotificationPaginateInboxesQueryHandler);
        service = module.get<NotificationPaginateInboxesService>(NotificationPaginateInboxesService);
        repository = <NotificationMockInboxRepository>module.get<NotificationIInboxRepository>(NotificationIInboxRepository);
    });

    describe('main', () =>
    {
        test('NotificationPaginateInboxesQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an inboxes paginated', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(
                {
                    count: 10,
                    total: 100,
                    rows : repository.collectionSource.slice(0,10),
                },
            )));
            expect(await queryHandler.execute(
                new NotificationPaginateInboxesQuery(
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
