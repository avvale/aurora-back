import { NotificationIOutBoxNotificationRepository, NotificationMockOutBoxNotificationRepository, NotificationOutBoxNotificationMapper, NotificationRawSQLOutBoxNotificationsQuery } from '@app/notification/out-box-notification';
import { NotificationRawSQLOutBoxNotificationsQueryHandler } from '@app/notification/out-box-notification/application/raw-sql/notification-raw-sql-out-box-notifications.query-handler';
import { NotificationRawSQLOutBoxNotificationsService } from '@app/notification/out-box-notification/application/raw-sql/notification-raw-sql-out-box-notifications.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('RawSQLOutBoxNotificationsQueryHandler', () =>
{
    let queryHandler: NotificationRawSQLOutBoxNotificationsQueryHandler;
    let service: NotificationRawSQLOutBoxNotificationsService;
    let repository: NotificationMockOutBoxNotificationRepository;
    let mapper: NotificationOutBoxNotificationMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationRawSQLOutBoxNotificationsQueryHandler,
                {
                    provide : NotificationIOutBoxNotificationRepository,
                    useClass: NotificationMockOutBoxNotificationRepository,
                },
                {
                    provide : NotificationRawSQLOutBoxNotificationsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationRawSQLOutBoxNotificationsQueryHandler>(NotificationRawSQLOutBoxNotificationsQueryHandler);
        service = module.get<NotificationRawSQLOutBoxNotificationsService>(NotificationRawSQLOutBoxNotificationsService);
        repository = <NotificationMockOutBoxNotificationRepository>module.get<NotificationIOutBoxNotificationRepository>(NotificationIOutBoxNotificationRepository);
        mapper = new NotificationOutBoxNotificationMapper();
    });

    describe('main', () =>
    {
        test('NotificationRawSQLOutBoxNotificationsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an outBoxNotifications founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new NotificationRawSQLOutBoxNotificationsQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
