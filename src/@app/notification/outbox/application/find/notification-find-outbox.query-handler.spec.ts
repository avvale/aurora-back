import { NotificationFindOutboxQuery, NotificationIOutboxRepository, NotificationMockOutboxRepository, NotificationOutboxMapper } from '@app/notification/outbox';
import { NotificationFindOutboxQueryHandler } from '@app/notification/outbox/application/find/notification-find-outbox.query-handler';
import { NotificationFindOutboxService } from '@app/notification/outbox/application/find/notification-find-outbox.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationFindOutboxQueryHandler', () =>
{
    let queryHandler: NotificationFindOutboxQueryHandler;
    let service: NotificationFindOutboxService;
    let repository: NotificationMockOutboxRepository;
    let mapper: NotificationOutboxMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationFindOutboxQueryHandler,
                {
                    provide : NotificationIOutboxRepository,
                    useClass: NotificationMockOutboxRepository,
                },
                {
                    provide : NotificationFindOutboxService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationFindOutboxQueryHandler>(NotificationFindOutboxQueryHandler);
        service = module.get<NotificationFindOutboxService>(NotificationFindOutboxService);
        repository = <NotificationMockOutboxRepository>module.get<NotificationIOutboxRepository>(NotificationIOutboxRepository);
        mapper = new NotificationOutboxMapper();
    });

    describe('main', () =>
    {
        test('NotificationFindOutboxQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an outbox founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new NotificationFindOutboxQuery(),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});
