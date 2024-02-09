import { NotificationFindInboxByIdQuery, NotificationIInboxRepository, NotificationInboxMapper, notificationMockInboxData, NotificationMockInboxRepository } from '@app/notification/inbox';
import { NotificationFindInboxByIdQueryHandler } from '@app/notification/inbox/application/find/notification-find-inbox-by-id.query-handler';
import { NotificationFindInboxByIdService } from '@app/notification/inbox/application/find/notification-find-inbox-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindInboxByIdQueryHandler', () =>
{
    let queryHandler: NotificationFindInboxByIdQueryHandler;
    let service: NotificationFindInboxByIdService;
    let repository: NotificationMockInboxRepository;
    let mapper: NotificationInboxMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationFindInboxByIdQueryHandler,
                {
                    provide : NotificationIInboxRepository,
                    useClass: NotificationMockInboxRepository,
                },
                {
                    provide : NotificationFindInboxByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationFindInboxByIdQueryHandler>(NotificationFindInboxByIdQueryHandler);
        service = module.get<NotificationFindInboxByIdService>(NotificationFindInboxByIdService);
        repository = <NotificationMockInboxRepository>module.get<NotificationIInboxRepository>(NotificationIInboxRepository);
        mapper = new NotificationInboxMapper();
    });

    describe('main', () =>
    {
        test('FindInboxByIdQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an inbox founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new NotificationFindInboxByIdQuery(
                    notificationMockInboxData[0].id,

                ),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
