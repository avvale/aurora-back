import { NotificationGetInboxesQuery, NotificationIInboxRepository, NotificationInboxMapper, NotificationMockInboxRepository } from '@app/notification/inbox';
import { NotificationGetInboxesQueryHandler } from '@app/notification/inbox/application/get/notification-get-inboxes.query-handler';
import { NotificationGetInboxesService } from '@app/notification/inbox/application/get/notification-get-inboxes.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('GetInboxesQueryHandler', () =>
{
    let queryHandler: NotificationGetInboxesQueryHandler;
    let service: NotificationGetInboxesService;
    let repository: NotificationMockInboxRepository;
    let mapper: NotificationInboxMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationGetInboxesQueryHandler,
                {
                    provide : NotificationIInboxRepository,
                    useClass: NotificationMockInboxRepository,
                },
                {
                    provide : NotificationGetInboxesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationGetInboxesQueryHandler>(NotificationGetInboxesQueryHandler);
        service = module.get<NotificationGetInboxesService>(NotificationGetInboxesService);
        repository = <NotificationMockInboxRepository>module.get<NotificationIInboxRepository>(NotificationIInboxRepository);
        mapper = new NotificationInboxMapper();
    });

    describe('main', () =>
    {
        test('NotificationGetInboxesQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an inboxes founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new NotificationGetInboxesQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});
