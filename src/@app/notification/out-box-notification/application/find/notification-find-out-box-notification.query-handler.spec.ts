import { NotificationFindOutBoxNotificationQuery, NotificationIOutBoxNotificationRepository, NotificationMockOutBoxNotificationRepository, NotificationOutBoxNotificationMapper } from '@app/notification/out-box-notification';
import { NotificationFindOutBoxNotificationQueryHandler } from '@app/notification/out-box-notification/application/find/notification-find-out-box-notification.query-handler';
import { NotificationFindOutBoxNotificationService } from '@app/notification/out-box-notification/application/find/notification-find-out-box-notification.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindOutBoxNotificationQueryHandler', () =>
{
    let queryHandler: NotificationFindOutBoxNotificationQueryHandler;
    let service: NotificationFindOutBoxNotificationService;
    let repository: NotificationMockOutBoxNotificationRepository;
    let mapper: NotificationOutBoxNotificationMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationFindOutBoxNotificationQueryHandler,
                {
                    provide : NotificationIOutBoxNotificationRepository,
                    useClass: NotificationMockOutBoxNotificationRepository,
                },
                {
                    provide : NotificationFindOutBoxNotificationService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationFindOutBoxNotificationQueryHandler>(NotificationFindOutBoxNotificationQueryHandler);
        service = module.get<NotificationFindOutBoxNotificationService>(NotificationFindOutBoxNotificationService);
        repository = <NotificationMockOutBoxNotificationRepository>module.get<NotificationIOutBoxNotificationRepository>(NotificationIOutBoxNotificationRepository);
        mapper = new NotificationOutBoxNotificationMapper();
    });

    describe('main', () =>
    {
        test('NotificationFindOutBoxNotificationQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an outBoxNotification founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new NotificationFindOutBoxNotificationQuery(),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
