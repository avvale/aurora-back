import { NotificationCountInboxQuery, NotificationIInboxRepository, NotificationMockInboxRepository } from '@app/notification/inbox';
import { NotificationCountInboxQueryHandler } from '@app/notification/inbox/application/count/notification-count-inbox.query-handler';
import { NotificationCountInboxService } from '@app/notification/inbox/application/count/notification-count-inbox.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('NotificationCountInboxQueryHandler', () =>
{
    let queryHandler: NotificationCountInboxQueryHandler;
    let service: NotificationCountInboxService;
    let repository: NotificationMockInboxRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                NotificationCountInboxQueryHandler,
                {
                    provide : NotificationIInboxRepository,
                    useClass: NotificationMockInboxRepository,
                },
                {
                    provide : NotificationCountInboxService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<NotificationCountInboxQueryHandler>(NotificationCountInboxQueryHandler);
        service = module.get<NotificationCountInboxService>(NotificationCountInboxService);
        repository = <NotificationMockInboxRepository>module.get<NotificationIInboxRepository>(NotificationIInboxRepository);
    });

    describe('main', () =>
    {
        test('NotificationCountInboxQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should count total inboxes', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource.length)));
            expect(await queryHandler.execute(
                new NotificationCountInboxQuery(),
            )).toStrictEqual(repository.collectionSource.length);
        });
    });
});
