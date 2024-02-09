import { NotificationGetOutboxesQuery, NotificationIOutboxRepository, NotificationMockOutboxRepository, NotificationOutboxMapper } from '@app/notification/outbox';
import { NotificationGetOutboxesQueryHandler } from '@app/notification/outbox/application/get/notification-get-outboxes.query-handler';
import { NotificationGetOutboxesService } from '@app/notification/outbox/application/get/notification-get-outboxes.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetOutboxesQueryHandler', () =>
{
    let queryHandler: NotificationGetOutboxesQueryHandler;
    let service: NotificationGetOutboxesService;
    let repository: NotificationMockOutboxRepository;
    let mapper: NotificationOutboxMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationGetOutboxesQueryHandler,
                {
                    provide : NotificationIOutboxRepository,
                    useClass: NotificationMockOutboxRepository,
                },
                {
                    provide : NotificationGetOutboxesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationGetOutboxesQueryHandler>(NotificationGetOutboxesQueryHandler);
        service = module.get<NotificationGetOutboxesService>(NotificationGetOutboxesService);
        repository = <NotificationMockOutboxRepository>module.get<NotificationIOutboxRepository>(NotificationIOutboxRepository);
        mapper = new NotificationOutboxMapper();
    });

    describe('main', () =>
    {
        test('NotificationGetOutboxesQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an outboxes founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new NotificationGetOutboxesQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
