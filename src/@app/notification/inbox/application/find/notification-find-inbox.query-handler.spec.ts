import { NotificationFindInboxQuery, NotificationIInboxRepository, NotificationInboxMapper, NotificationMockInboxRepository } from '@app/notification/inbox';
import { NotificationFindInboxQueryHandler } from '@app/notification/inbox/application/find/notification-find-inbox.query-handler';
import { NotificationFindInboxService } from '@app/notification/inbox/application/find/notification-find-inbox.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindInboxQueryHandler', () =>
{
    let queryHandler: NotificationFindInboxQueryHandler;
    let service: NotificationFindInboxService;
    let repository: NotificationMockInboxRepository;
    let mapper: NotificationInboxMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationFindInboxQueryHandler,
                {
                    provide : NotificationIInboxRepository,
                    useClass: NotificationMockInboxRepository,
                },
                {
                    provide : NotificationFindInboxService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationFindInboxQueryHandler>(NotificationFindInboxQueryHandler);
        service = module.get<NotificationFindInboxService>(NotificationFindInboxService);
        repository = <NotificationMockInboxRepository>module.get<NotificationIInboxRepository>(NotificationIInboxRepository);
        mapper = new NotificationInboxMapper();
    });

    describe('main', () =>
    {
        test('NotificationFindInboxQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an inbox founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new NotificationFindInboxQuery(),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
