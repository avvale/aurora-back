import { NotificationFindOutboxByIdQuery, NotificationIOutboxRepository, notificationMockOutboxData, NotificationMockOutboxRepository, NotificationOutboxMapper } from '@app/notification/outbox';
import { NotificationFindOutboxByIdQueryHandler } from '@app/notification/outbox/application/find/notification-find-outbox-by-id.query-handler';
import { NotificationFindOutboxByIdService } from '@app/notification/outbox/application/find/notification-find-outbox-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindOutboxByIdQueryHandler', () =>
{
    let queryHandler: NotificationFindOutboxByIdQueryHandler;
    let service: NotificationFindOutboxByIdService;
    let repository: NotificationMockOutboxRepository;
    let mapper: NotificationOutboxMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationFindOutboxByIdQueryHandler,
                {
                    provide : NotificationIOutboxRepository,
                    useClass: NotificationMockOutboxRepository,
                },
                {
                    provide : NotificationFindOutboxByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationFindOutboxByIdQueryHandler>(NotificationFindOutboxByIdQueryHandler);
        service = module.get<NotificationFindOutboxByIdService>(NotificationFindOutboxByIdService);
        repository = <NotificationMockOutboxRepository>module.get<NotificationIOutboxRepository>(NotificationIOutboxRepository);
        mapper = new NotificationOutboxMapper();
    });

    describe('main', () =>
    {
        test('FindOutboxByIdQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an outbox founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new NotificationFindOutboxByIdQuery(
                    notificationMockOutboxData[0].id,

                ),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
