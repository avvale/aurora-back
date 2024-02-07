import { NotificationINotificationRepository, NotificationMockNotificationRepository, NotificationPaginateNotificationsQuery } from '@app/notification/notification';
import { NotificationPaginateNotificationsQueryHandler } from '@app/notification/notification/application/paginate/notification-paginate-notifications.query-handler';
import { NotificationPaginateNotificationsService } from '@app/notification/notification/application/paginate/notification-paginate-notifications.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateNotificationsQueryHandler', () =>
{
    let queryHandler: NotificationPaginateNotificationsQueryHandler;
    let service: NotificationPaginateNotificationsService;
    let repository: NotificationMockNotificationRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationPaginateNotificationsQueryHandler,
                {
                    provide : NotificationINotificationRepository,
                    useClass: NotificationMockNotificationRepository,
                },
                {
                    provide : NotificationPaginateNotificationsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationPaginateNotificationsQueryHandler>(NotificationPaginateNotificationsQueryHandler);
        service = module.get<NotificationPaginateNotificationsService>(NotificationPaginateNotificationsService);
        repository = <NotificationMockNotificationRepository>module.get<NotificationINotificationRepository>(NotificationINotificationRepository);
    });

    describe('main', () =>
    {
        test('NotificationPaginateNotificationsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an notifications paginated', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(
                {
                    count: 10,
                    total: 100,
                    rows : repository.collectionSource.slice(0,10),
                },
            )));
            expect(await queryHandler.execute(
                new NotificationPaginateNotificationsQuery(
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
