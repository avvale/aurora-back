import { NotificationFindNotificationByIdQuery, NotificationINotificationRepository, notificationMockNotificationData, NotificationMockNotificationRepository, NotificationNotificationMapper } from '@app/notification/notification';
import { NotificationFindNotificationByIdQueryHandler } from '@app/notification/notification/application/find/notification-find-notification-by-id.query-handler';
import { NotificationFindNotificationByIdService } from '@app/notification/notification/application/find/notification-find-notification-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindNotificationByIdQueryHandler', () =>
{
    let queryHandler: NotificationFindNotificationByIdQueryHandler;
    let service: NotificationFindNotificationByIdService;
    let repository: NotificationMockNotificationRepository;
    let mapper: NotificationNotificationMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationFindNotificationByIdQueryHandler,
                {
                    provide : NotificationINotificationRepository,
                    useClass: NotificationMockNotificationRepository,
                },
                {
                    provide : NotificationFindNotificationByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationFindNotificationByIdQueryHandler>(NotificationFindNotificationByIdQueryHandler);
        service = module.get<NotificationFindNotificationByIdService>(NotificationFindNotificationByIdService);
        repository = <NotificationMockNotificationRepository>module.get<NotificationINotificationRepository>(NotificationINotificationRepository);
        mapper = new NotificationNotificationMapper();
    });

    describe('main', () =>
    {
        test('FindNotificationByIdQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an notification founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new NotificationFindNotificationByIdQuery(
                    notificationMockNotificationData[0].id,

                ),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
