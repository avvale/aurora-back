import { NotificationIOutBoxNotificationRepository, NotificationMockOutBoxNotificationRepository, NotificationPaginateOutBoxNotificationsQuery } from '@app/notification/out-box-notification';
import { NotificationPaginateOutBoxNotificationsQueryHandler } from '@app/notification/out-box-notification/application/paginate/notification-paginate-out-box-notifications.query-handler';
import { NotificationPaginateOutBoxNotificationsService } from '@app/notification/out-box-notification/application/paginate/notification-paginate-out-box-notifications.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationPaginateOutBoxNotificationsQueryHandler', () =>
{
    let queryHandler: NotificationPaginateOutBoxNotificationsQueryHandler;
    let service: NotificationPaginateOutBoxNotificationsService;
    let repository: NotificationMockOutBoxNotificationRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationPaginateOutBoxNotificationsQueryHandler,
                {
                    provide : NotificationIOutBoxNotificationRepository,
                    useClass: NotificationMockOutBoxNotificationRepository,
                },
                {
                    provide : NotificationPaginateOutBoxNotificationsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationPaginateOutBoxNotificationsQueryHandler>(NotificationPaginateOutBoxNotificationsQueryHandler);
        service = module.get<NotificationPaginateOutBoxNotificationsService>(NotificationPaginateOutBoxNotificationsService);
        repository = <NotificationMockOutBoxNotificationRepository>module.get<NotificationIOutBoxNotificationRepository>(NotificationIOutBoxNotificationRepository);
    });

    describe('main', () =>
    {
        test('NotificationPaginateOutBoxNotificationsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an outBoxNotifications paginated', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(
                {
                    count: 10,
                    total: 100,
                    rows : repository.collectionSource.slice(0,10),
                },
            )));
            expect(await queryHandler.execute(
                new NotificationPaginateOutBoxNotificationsQuery(
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
