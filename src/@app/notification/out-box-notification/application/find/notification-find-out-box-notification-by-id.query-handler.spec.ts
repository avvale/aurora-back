import { NotificationFindOutBoxNotificationByIdQuery, NotificationIOutBoxNotificationRepository, notificationMockOutBoxNotificationData, NotificationMockOutBoxNotificationRepository, NotificationOutBoxNotificationMapper } from '@app/notification/out-box-notification';
import { NotificationFindOutBoxNotificationByIdQueryHandler } from '@app/notification/out-box-notification/application/find/notification-find-out-box-notification-by-id.query-handler';
import { NotificationFindOutBoxNotificationByIdService } from '@app/notification/out-box-notification/application/find/notification-find-out-box-notification-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindOutBoxNotificationByIdQueryHandler', () =>
{
    let queryHandler: NotificationFindOutBoxNotificationByIdQueryHandler;
    let service: NotificationFindOutBoxNotificationByIdService;
    let repository: NotificationMockOutBoxNotificationRepository;
    let mapper: NotificationOutBoxNotificationMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationFindOutBoxNotificationByIdQueryHandler,
                {
                    provide : NotificationIOutBoxNotificationRepository,
                    useClass: NotificationMockOutBoxNotificationRepository,
                },
                {
                    provide : NotificationFindOutBoxNotificationByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationFindOutBoxNotificationByIdQueryHandler>(NotificationFindOutBoxNotificationByIdQueryHandler);
        service = module.get<NotificationFindOutBoxNotificationByIdService>(NotificationFindOutBoxNotificationByIdService);
        repository = <NotificationMockOutBoxNotificationRepository>module.get<NotificationIOutBoxNotificationRepository>(NotificationIOutBoxNotificationRepository);
        mapper = new NotificationOutBoxNotificationMapper();
    });

    describe('main', () =>
    {
        test('FindOutBoxNotificationByIdQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an outBoxNotification founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new NotificationFindOutBoxNotificationByIdQuery(
                    notificationMockOutBoxNotificationData[0].id,

                ),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
