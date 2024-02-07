import { NotificationFindNotificationQuery, NotificationINotificationRepository, NotificationMockNotificationRepository, NotificationNotificationMapper } from '@app/notification/notification';
import { NotificationFindNotificationQueryHandler } from '@app/notification/notification/application/find/notification-find-notification.query-handler';
import { NotificationFindNotificationService } from '@app/notification/notification/application/find/notification-find-notification.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindNotificationQueryHandler', () =>
{
    let queryHandler: NotificationFindNotificationQueryHandler;
    let service: NotificationFindNotificationService;
    let repository: NotificationMockNotificationRepository;
    let mapper: NotificationNotificationMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationFindNotificationQueryHandler,
                {
                    provide : NotificationINotificationRepository,
                    useClass: NotificationMockNotificationRepository,
                },
                {
                    provide : NotificationFindNotificationService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationFindNotificationQueryHandler>(NotificationFindNotificationQueryHandler);
        service = module.get<NotificationFindNotificationService>(NotificationFindNotificationService);
        repository = <NotificationMockNotificationRepository>module.get<NotificationINotificationRepository>(NotificationINotificationRepository);
        mapper = new NotificationNotificationMapper();
    });

    describe('main', () =>
    {
        test('NotificationFindNotificationQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an notification founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new NotificationFindNotificationQuery(),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
