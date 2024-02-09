import { NotificationIInboxRepository, NotificationInboxMapper, NotificationMockInboxRepository, NotificationRawSQLInboxesQuery } from '@app/notification/inbox';
import { NotificationRawSQLInboxesQueryHandler } from '@app/notification/inbox/application/raw-sql/notification-raw-sql-inboxes.query-handler';
import { NotificationRawSQLInboxesService } from '@app/notification/inbox/application/raw-sql/notification-raw-sql-inboxes.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('RawSQLInboxesQueryHandler', () =>
{
    let queryHandler: NotificationRawSQLInboxesQueryHandler;
    let service: NotificationRawSQLInboxesService;
    let repository: NotificationMockInboxRepository;
    let mapper: NotificationInboxMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationRawSQLInboxesQueryHandler,
                {
                    provide : NotificationIInboxRepository,
                    useClass: NotificationMockInboxRepository,
                },
                {
                    provide : NotificationRawSQLInboxesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationRawSQLInboxesQueryHandler>(NotificationRawSQLInboxesQueryHandler);
        service = module.get<NotificationRawSQLInboxesService>(NotificationRawSQLInboxesService);
        repository = <NotificationMockInboxRepository>module.get<NotificationIInboxRepository>(NotificationIInboxRepository);
        mapper = new NotificationInboxMapper();
    });

    describe('main', () =>
    {
        test('NotificationRawSQLInboxesQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an inboxes founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new NotificationRawSQLInboxesQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
