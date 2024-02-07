import { NotificationINotificationRepository, NotificationMockNotificationRepository, NotificationNotificationMapper, NotificationRawSQLNotificationsQuery } from '@app/notification/notification';
import { NotificationRawSQLNotificationsQueryHandler } from '@app/notification/notification/application/raw-sql/notification-raw-sql-notifications.query-handler';
import { NotificationRawSQLNotificationsService } from '@app/notification/notification/application/raw-sql/notification-raw-sql-notifications.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('RawSQLNotificationsQueryHandler', () =>
{
    let queryHandler: NotificationRawSQLNotificationsQueryHandler;
    let service: NotificationRawSQLNotificationsService;
    let repository: NotificationMockNotificationRepository;
    let mapper: NotificationNotificationMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationRawSQLNotificationsQueryHandler,
                {
                    provide : NotificationINotificationRepository,
                    useClass: NotificationMockNotificationRepository,
                },
                {
                    provide : NotificationRawSQLNotificationsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationRawSQLNotificationsQueryHandler>(NotificationRawSQLNotificationsQueryHandler);
        service = module.get<NotificationRawSQLNotificationsService>(NotificationRawSQLNotificationsService);
        repository = <NotificationMockNotificationRepository>module.get<NotificationINotificationRepository>(NotificationINotificationRepository);
        mapper = new NotificationNotificationMapper();
    });

    describe('main', () =>
    {
        test('NotificationRawSQLNotificationsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an notifications founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new NotificationRawSQLNotificationsQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
