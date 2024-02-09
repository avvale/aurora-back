import { NotificationIOutboxRepository, NotificationMockOutboxRepository, NotificationOutboxMapper, NotificationRawSQLOutboxesQuery } from '@app/notification/outbox';
import { NotificationRawSQLOutboxesQueryHandler } from '@app/notification/outbox/application/raw-sql/notification-raw-sql-outboxes.query-handler';
import { NotificationRawSQLOutboxesService } from '@app/notification/outbox/application/raw-sql/notification-raw-sql-outboxes.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('RawSQLOutboxesQueryHandler', () =>
{
    let queryHandler: NotificationRawSQLOutboxesQueryHandler;
    let service: NotificationRawSQLOutboxesService;
    let repository: NotificationMockOutboxRepository;
    let mapper: NotificationOutboxMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationRawSQLOutboxesQueryHandler,
                {
                    provide : NotificationIOutboxRepository,
                    useClass: NotificationMockOutboxRepository,
                },
                {
                    provide : NotificationRawSQLOutboxesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationRawSQLOutboxesQueryHandler>(NotificationRawSQLOutboxesQueryHandler);
        service = module.get<NotificationRawSQLOutboxesService>(NotificationRawSQLOutboxesService);
        repository = <NotificationMockOutboxRepository>module.get<NotificationIOutboxRepository>(NotificationIOutboxRepository);
        mapper = new NotificationOutboxMapper();
    });

    describe('main', () =>
    {
        test('NotificationRawSQLOutboxesQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an outboxes founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new NotificationRawSQLOutboxesQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
