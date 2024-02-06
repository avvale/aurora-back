import { NotificationGetOutBoxNotificationsQuery, NotificationIOutBoxNotificationRepository, NotificationMockOutBoxNotificationRepository, NotificationOutBoxNotificationMapper } from '@app/notification/out-box-notification';
import { NotificationGetOutBoxNotificationsQueryHandler } from '@app/notification/out-box-notification/application/get/notification-get-out-box-notifications.query-handler';
import { NotificationGetOutBoxNotificationsService } from '@app/notification/out-box-notification/application/get/notification-get-out-box-notifications.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetOutBoxNotificationsQueryHandler', () =>
{
    let queryHandler: NotificationGetOutBoxNotificationsQueryHandler;
    let service: NotificationGetOutBoxNotificationsService;
    let repository: NotificationMockOutBoxNotificationRepository;
    let mapper: NotificationOutBoxNotificationMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationGetOutBoxNotificationsQueryHandler,
                {
                    provide : NotificationIOutBoxNotificationRepository,
                    useClass: NotificationMockOutBoxNotificationRepository,
                },
                {
                    provide : NotificationGetOutBoxNotificationsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationGetOutBoxNotificationsQueryHandler>(NotificationGetOutBoxNotificationsQueryHandler);
        service = module.get<NotificationGetOutBoxNotificationsService>(NotificationGetOutBoxNotificationsService);
        repository = <NotificationMockOutBoxNotificationRepository>module.get<NotificationIOutBoxNotificationRepository>(NotificationIOutBoxNotificationRepository);
        mapper = new NotificationOutBoxNotificationMapper();
    });

    describe('main', () =>
    {
        test('NotificationGetOutBoxNotificationsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an outBoxNotifications founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new NotificationGetOutBoxNotificationsQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
