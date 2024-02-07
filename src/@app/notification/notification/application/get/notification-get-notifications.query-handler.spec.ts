import { NotificationGetNotificationsQuery, NotificationINotificationRepository, NotificationMockNotificationRepository, NotificationNotificationMapper } from '@app/notification/notification';
import { NotificationGetNotificationsQueryHandler } from '@app/notification/notification/application/get/notification-get-notifications.query-handler';
import { NotificationGetNotificationsService } from '@app/notification/notification/application/get/notification-get-notifications.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetNotificationsQueryHandler', () =>
{
    let queryHandler: NotificationGetNotificationsQueryHandler;
    let service: NotificationGetNotificationsService;
    let repository: NotificationMockNotificationRepository;
    let mapper: NotificationNotificationMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationGetNotificationsQueryHandler,
                {
                    provide : NotificationINotificationRepository,
                    useClass: NotificationMockNotificationRepository,
                },
                {
                    provide : NotificationGetNotificationsService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationGetNotificationsQueryHandler>(NotificationGetNotificationsQueryHandler);
        service = module.get<NotificationGetNotificationsService>(NotificationGetNotificationsService);
        repository = <NotificationMockNotificationRepository>module.get<NotificationINotificationRepository>(NotificationINotificationRepository);
        mapper = new NotificationNotificationMapper();
    });

    describe('main', () =>
    {
        test('NotificationGetNotificationsQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an notifications founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new NotificationGetNotificationsQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
